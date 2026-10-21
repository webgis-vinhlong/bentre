"""Build the display layer from the same historic geometry as its predecessors.
Requires Shapely 2.x. Run: python scripts/build_boundaries.py
This is a derived comparison layer, not an independent official 2025 survey.
"""
import hashlib
import json
from pathlib import Path
from shapely.geometry import shape, mapping
from shapely.ops import unary_union

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'data'
source = DATA / 'ben-tre-gisvn-before-2025.geojson'
original = json.loads(source.read_text())['features']
lookup = {str(f['properties']['ma_xa']): shape(f['geometry']) for f in original}
groups = json.loads((DATA / 'predecessor-map.json').read_text())
units = json.loads((DATA / 'units-2025.json').read_text())
assert len(lookup) == 157 and len(groups) == 48
assert {g['name'] for g in groups} == {u['name'] for u in units}
codes = [code for group in groups for code in group['codes']]
assert len(codes) == len(set(codes)) == 157 and set(codes) == set(lookup)
assert all(g.is_valid and not g.is_empty for g in lookup.values())
features = []
checks = []
for group in groups:
    parts = [lookup[code] for code in group['codes']]
    merged = unary_union(parts)
    assert merged.is_valid and merged.geom_type in ('Polygon', 'MultiPolygon')
    assert all(part.difference(merged).area < 1e-14 for part in parts)
    feature = {'type': 'Feature', 'properties': {
        '_unit_name': group['name'], 'name': group['name'],
        'source_codes': group['codes'], 'source': 'gis.vn',
        'derivation': 'union_of_historic_predecessors',
    }, 'geometry': mapping(merged)}
    # Validate the actual serialized geometry, including rings and holes.
    restored = shape(json.loads(json.dumps(feature))['geometry'])
    delta = restored.symmetric_difference(unary_union(parts)).area
    assert delta < 1e-14
    features.append(feature)
    checks.append({'name': group['name'], 'predecessors': len(parts), 'symmetric_difference': delta})
merged_shapes = [shape(f['geometry']) for f in features]
max_overlap = max(a.intersection(b).area for i, a in enumerate(merged_shapes) for b in merged_shapes[i+1:])
coverage_delta = unary_union(merged_shapes).symmetric_difference(unary_union(list(lookup.values()))).area
assert max_overlap < 1e-12 and coverage_delta < 1e-12
for n in range(4):
    collection = {'type': 'FeatureCollection', 'source': 'gis.vn',
                  'derivation': 'union_of_historic_predecessors',
                  'features': features[n*12:(n+1)*12]}
    (DATA / f'boundaries-2025-{n+1}.geojson').write_text(json.dumps(collection, ensure_ascii=False, separators=(',', ':'))+'\n')
report = {'source_sha256': hashlib.sha256(source.read_bytes()).hexdigest(),
          'historic_count': 157, 'derived_count': 48, 'unique_assigned_codes': len(set(codes)),
          'max_pair_overlap_degrees2': max_overlap, 'coverage_difference_degrees2': coverage_delta,
          'units': checks}
(DATA / 'boundary-validation.json').write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n')
print(f'PASS: 157 unique predecessors → 48 valid unions; max overlap={max_overlap}; coverage delta={coverage_delta}')
