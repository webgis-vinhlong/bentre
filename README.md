# WEBGIS XỨ DỪA · Bến Tre

WebGIS tĩnh chạy trên GitHub Pages, tra cứu địa danh cũ/mới, địa giới và lịch sử hình thành. Giao diện ưu tiên bản đồ, hỗ trợ desktop, tablet và bảng trượt trên điện thoại; không cần backend hoặc bước build.

## Các lớp địa giới

| Lớp | Dữ liệu | Nguồn |
| --- | --- | --- |
| Lưu trữ (mặc định) | 157 MultiPolygon; mã xã, mã huyện, tên và hình học giữ nguyên tệp đính kèm | [GIS.vn · Bản đồ hành chính Việt Nam trước 01/07](https://gis.vn/ban-do-hanh-chinh-viet-nam-truoc-01-07) |
| Năm 2025 | 48 đường bao hợp nhất từ 157 địa giới tiền thân; bốn gói `data/boundaries-2025-{1..4}.geojson` cùng website | GIS.vn, lớp dẫn xuất theo bảng đối chiếu |

Tệp `data/ben-tre-gisvn-before-2025.geojson` là bản sao nguyên byte của **Bến Tre (phường xã) - 63.geojson** do người dùng cung cấp ngày 21/10/2026. Nguồn GIS.vn được ghi theo thông tin người dùng cung cấp. Tệp chứa bộ lưu trữ 157 đơn vị; không gán bộ này cho mốc chuyển tiếp 148 đơn vị hoặc địa giới 48 đơn vị năm 2025.

## Đối chiếu mã

Đối chiếu với `data/archive-157.json` bằng mã xã; khi mã khác nhau, chỉ dùng cặp tên chuẩn hóa và mã huyện. Hai trường hợp được giữ nguyên và giải thích trong hồ sơ:

| Địa danh | Mã trong GeoJSON GIS.vn | Mã trong bảng tra cứu |
| --- | --- | --- |
| Phường An Hội | 28771 | 28777 |
| Xã Phước Ngãi | 29140 | 29137 |

Không sửa mã hoặc tọa độ gốc. Lớp hiển thị 48 được dẫn xuất bằng phép hợp nhất (union) từ cùng 157 polygon cũ theo `data/predecessor-map.json`; đây là lớp đối chiếu sáp nhập, không phải bộ đo đạc pháp lý độc lập năm 2025. Cả 157 đối tượng có liên kết tới bảng đối chiếu theo quy tắc trên. Mốc 148 chỉ có thông tin mô tả, chưa có lớp hình học riêng.

## Sử dụng

- Đổi **Mốc địa giới** trong bảng tra cứu hoặc nút **157 · Lưu trữ / 48 · Năm 2025** trên bản đồ.
- Tìm theo tên có/không dấu, mã xã hoặc tên đơn vị liên quan năm 2025.
- Chọn địa giới để xem hồ sơ, mã gốc và nguồn; mở hồ sơ 2025 để chuyển lớp tương ứng.
- Nguồn hiện ở hồ sơ, dưới bản đồ, ghi công bản đồ và chân trang.
- Lớp lưu trữ tải một tệp cùng website; lớp 2025 có trạng thái tải và chỉ thử lại những gói còn thiếu.

Bản đồ sử dụng Vietflex và các lớp cùng hệ Vietflex; Leaflet là phương án dự phòng. Thư viện và CSS được lưu tại `vendor/`; danh mục địa danh được nhúng trong HTML để khởi động độc lập với các yêu cầu tải địa giới. Mỗi yêu cầu dữ liệu có thời hạn chờ 20 giây, kể cả khi nội dung phản hồi bị treo. Việc vẽ polygon được chia theo lượt để giữ giao diện tương tác. Nền hiện tại dùng Google legacy tiles; ghi công nền hiển thị trên bản đồ. Dữ liệu hành chính phục vụ đối chiếu lịch sử.

## Triển khai và giấy phép

GitHub Pages: nhánh `main`, thư mục gốc. Trang: https://webgis-vinhlong.github.io/bentre/ . Có thể chạy cục bộ với một HTTP server tĩnh.

Long Ngo @2026. Mã nguồn theo giấy phép MIT. Điều kiện sử dụng dữ liệu và nền bản đồ thuộc từng nguồn; không tự gán MIT cho dữ liệu GIS.vn.

## So sánh đơn vị tiền thân

Khi chọn một trong 48 đơn vị năm 2025, website giữ viền đơn vị hiện tại và hiển thị các địa giới trong bộ lưu trữ 157 bằng màu riêng, kèm tên cũ và danh sách màu trong hồ sơ. Có nút bật/tắt ranh giới và nhãn; chọn tên cũ để phóng đến địa giới tương ứng. Tên trực tiếp khớp hồ sơ được dùng chung trong danh sách và nhãn; tên lưu trữ cũ hơn vẫn giữ nguyên khi có thay đổi trung gian năm 2024. Mỗi đường bao mới chứa `source_codes`; chính danh sách mã này quyết định các ranh giới tiền thân được hiển thị, tránh dùng hai phép ghép riêng.

Đối chiếu ưu tiên tên cùng huyện từ danh sách tiền thân, sau đó dùng bảng mã để liên kết các tên cũ hơn. Bản ghi 29194 được sửa từ Vĩnh Thành/Chợ Lách sang Tân Phong/Thạnh Phú → Đại Điền theo thuộc tính địa giới gốc và hồ sơ tiền thân. Hình học gốc được giữ nguyên. Nguồn hiển thị trên giao diện rút gọn thành liên kết gis.vn; thông tin nguồn tải và phiên bản vẫn được giữ trong dữ liệu và tài liệu kỹ thuật.

Logo là nguyên ảnh Bến Tre–Đồng Khởi do người dùng cung cấp ngày 21/10/2026, lưu tại assets/logo-bentre.png.

## Tái tạo và kiểm tra hình học

Cài Shapely 2.x rồi chạy `python scripts/build_boundaries.py`. Quy trình kiểm tra đủ 157 mã, mỗi mã thuộc đúng một trong 48 nhóm, hình học hợp lệ, hiệu đối xứng giữa đường bao và hợp các tiền thân, độ phủ toàn vùng và chồng lấn giữa các nhóm. Kết quả ở `data/boundary-validation.json`. Không dịch chuyển, co giãn, snap hoặc làm trơn tọa độ để khớp nền Google. Dữ liệu nguồn 2025 cũ trong `data/wards-2025/` và manifest chỉ được giữ để truy nguyên; không dùng để vẽ.
