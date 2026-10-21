# Bến Tre Hoài Cổ — Heritage WebGIS

WebGIS tĩnh chủ đề Bến Tre xưa, phong cách xanh hoàng gia, vàng giấy cổ và thiết kế tương thích di động. Dựa trên cảm hứng và danh mục 48 xã/phường trong `ben_tre_dashboard_unified_2025.html` do người sử dụng cung cấp.

## Chạy website

Trang gốc là `index.html`, dùng Leaflet 1.9.4, OpenStreetMap và CARTO Light qua CDN. Có thể sử dụng GitHub Pages trực tiếp từ nhánh `main`, thư mục `/ (root)` mà không cần npm hoặc backend.

**Bật Pages:** Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)` → Save. Trang được dự kiến xuất bản tại https://webgis-vinhlong.github.io/bentre/ .

## Hiện có

- Bản đồ tương tác với trung tâm tại Bến Tre.
- Danh mục 48 xã/phường theo tài liệu 2025, tìm kiếm và lọc theo nhóm huyện cũ.
- Điểm khám phá với tọa độ tham khảo; giao diện responsive.
- Nội dung lịch sử, di sản và cảnh báo rõ về phạm vi dữ liệu.

## Giới hạn dữ liệu

Tên xã/phường trong dashboard gốc không kèm theo polygon địa giới hay tọa độ tâm đáng tin cậy, do đó trang **không vẽ ranh giới hành chính suy đoán**. Bộ `DS_XAPHUONG_FULL.txt` là danh mục dịch vụ ArcGIS REST cũ với URL HTTP; trình duyệt HTTPS có thể chặn mixed content/CORS. Không công bố một lớp thửa đất đang hoạt động khi chưa kiểm chứng tính pháp lý, quyền truy cập, tính toàn vẹn và khả năng phục vụ. Để tích hợp lớp GIS chính xác, chuẩn bị GeoJSON/PMTiles có nguồn, mốc thời gian, giấy phép và tọa độ đã xác minh.

## Tích hợp tiếp theo

1. Nhập đầy đủ thông tin `formerUnits`, `deepHistory`, trung tâm phục vụ hành chính từ HTML gốc và đưa sang file JSON phiên bản hóa.
2. Kết nối PMTiles ranh giới 2025 có kiểm chứng và các bản đồ lịch sử được cấp phép.
3. Thêm lưu trữ địa danh, ảnh xưa/nay, trích dẫn nguồn từng đối tượng, tải KML/GeoJSON.

**Lưu ý:** Bến Tre cũ thuộc tỉnh Vĩnh Long kể từ sắp xếp đơn vị hành chính cấp tỉnh năm 2025. Nội dung hành chính trên web là dữ liệu đối chiếu lịch sử, không phải nguồn pháp lý hiện hành.
