const events = [
      {
        year: '1975',
        period: '1975-1999',
        title: 'Bộ máy hành chính sau giải phóng',
        summary: 'Ổn định bộ máy tỉnh, huyện, xã, ấp sau ngày 30/4/1975.',
        tags: ['khởi điểm', 'tổ chức bộ máy', 'cấp xã'],
        bullets: [
          'Đến 30/11/1975 có Ủy ban tỉnh, các Ủy ban cấp huyện, 122 xã và 824 ấp.',
          'Bộ máy chuyên môn cấp tỉnh gồm nhiều Ty như Giáo dục, Tài chính, Nông nghiệp, Y tế, Công chánh.',
          'Đây là nền tổ chức ban đầu để tái thiết quản lý nhà nước sau chiến tranh.'
        ],
        impact: 'Đặt nền móng cho giai đoạn kiện toàn hành chính của tỉnh trong thời kỳ thống nhất đất nước.'
      },
      {
        year: '1976',
        period: '1975-1999',
        title: 'Đổi tên tỉnh Kiến Hòa thành tỉnh Bến Tre',
        summary: 'Tỉnh Kiến Hòa được đổi tên; cơ cấu cấp huyện được xác lập lại.',
        tags: ['đổi tên tỉnh', '7 huyện'],
        bullets: [
          'Tháng 2/1976, tỉnh Kiến Hòa đổi tên thành tỉnh Bến Tre.',
          'Cấu trúc gồm thị xã Bến Tre và 7 huyện: Ba Tri, Bình Đại, Châu Thành, Chợ Lách, Giồng Trôm, Mỏ Cày, Thạnh Phú.',
          'Đây là mốc hành chính có ý nghĩa nhận diện chính thức của tỉnh trong giai đoạn mới.'
        ],
        impact: 'Tạo cơ sở pháp lý và tổ chức để quản lý thống nhất toàn tỉnh dưới tên gọi Bến Tre.'
      },
      {
        year: '1979',
        period: '1975-1999',
        title: 'Đợt chia tách xã quy mô lớn theo Quyết định 41-CP',
        summary: 'Nhiều xã tại Giồng Trôm, Bình Đại, Thạnh Phú được chia tách.',
        tags: ['41-CP', 'chia tách xã', '143 đơn vị'],
        bullets: [
          'Ngày 03/4/1979, một loạt xã được chia tách tại Giồng Trôm, Bình Đại và Thạnh Phú.',
          'Xuất hiện thêm các đơn vị như Hưng Nhượng, Hưng Lễ, Thạnh Trị, Đại Hòa Lộc, Bình Thới, Tam Hiệp.',
          'Sau điều chỉnh, tỉnh có 143 xã, phường, thị trấn (133 xã, 5 phường, 5 thị trấn).'
        ],
        impact: 'Phản ánh nhu cầu quản lý dân cư và không gian địa phương chi tiết hơn ở cấp cơ sở.'
      },
      {
        year: '1984',
        period: '1975-1999',
        title: 'Phân vạch địa giới và tăng số phường tại thị xã Bến Tre',
        summary: 'Tiếp tục chia xã, điều chỉnh thị trấn và thành lập thêm phường 6, 7, 8.',
        tags: ['41-HĐBT', 'thị xã Bến Tre', '152 đơn vị'],
        bullets: [
          'Ngày 14/3/1984, nhiều xã ở Giồng Trôm, Ba Tri, Bình Đại, Mỏ Cày, Thạnh Phú được chia tách thêm.',
          'Thị xã Bến Tre giải thể một số xã cũ để thành lập phường 6, phường 7, phường 8.',
          'Sau đợt này, toàn tỉnh có 152 đơn vị hành chính cấp xã (139 xã, 8 phường, 5 thị trấn).'
        ],
        impact: 'Tăng mức độ đô thị hóa ở trung tâm tỉnh và tiếp tục tinh chỉnh quản trị cấp xã.'
      },
      {
        year: '1985',
        period: '1975-1999',
        title: 'Điều chỉnh Châu Thành – thị xã Bến Tre và bổ sung đơn vị ở Ba Tri',
        summary: 'Sơn Đông chuyển về thị xã; Ba Tri có thêm nhiều xã mới.',
        tags: ['114-HĐBT', '119-HĐBT', '156 đơn vị'],
        bullets: [
          'Ngày 11/4/1985, xã Sơn Đông được tách khỏi huyện Châu Thành để sáp nhập vào thị xã Bến Tre.',
          'Ngày 16/4/1985, huyện Ba Tri có thêm các điều chỉnh như Bảo Thuận, Mỹ Hòa, An Phú Trung, Vĩnh An.',
          'Cuối năm 1985, tỉnh có 156 xã, phường, thị trấn (143 xã, 8 phường, 5 thị trấn).'
        ],
        impact: 'Mở rộng không gian đô thị thị xã Bến Tre, đồng thời hoàn thiện mạng lưới đơn vị hành chính ở Ba Tri.'
      },
      {
        year: '1994–1995',
        period: '1975-1999',
        title: 'Thành lập An Điền, thị trấn Thạnh Phú và thị trấn Châu Thành',
        summary: 'Bổ sung các trung tâm hành chính mới ở cấp xã và thị trấn.',
        tags: ['105/CP', '84/NĐ-CP', 'thị trấn'],
        bullets: [
          'Ngày 29/8/1994 thành lập xã An Điền và thị trấn Thạnh Phú thuộc huyện Thạnh Phú.',
          'Ngày 02/12/1995 thành lập thị trấn Châu Thành trên cơ sở tách một phần xã Phú An Hòa.',
          'Đến năm 1998, toàn tỉnh đạt 157 đơn vị hành chính cấp xã (143 xã, 8 phường, 6 thị trấn).'
        ],
        impact: 'Củng cố các điểm trung tâm hành chính – dịch vụ ở địa phương, nâng hiệu quả điều hành cấp huyện.'
      },
      {
        year: '1999–2001',
        period: '1999-2008',
        title: 'Bổ sung phường, xã mới ở Bến Tre, Ba Tri và Thạnh Phú',
        summary: 'Thành lập phường Phú Khương, xã Tân Mỹ, xã Mỹ An.',
        tags: ['điều chỉnh nhỏ', 'đô thị – nông thôn'],
        bullets: [
          'Năm 1999 thành lập phường Phú Khương thuộc thị xã Bến Tre.',
          'Năm 2000 thành lập xã Tân Mỹ thuộc huyện Ba Tri.',
          'Năm 2001 thành lập xã Mỹ An thuộc huyện Thạnh Phú.'
        ],
        impact: 'Điều chỉnh theo nhu cầu phát triển dân cư và tổ chức quản lý ở từng địa bàn cụ thể.'
      },
      {
        year: '2007–2008',
        period: '1999-2008',
        title: 'Tăng lên 160 đơn vị cấp xã và chuẩn hóa cơ quan chuyên môn',
        summary: 'Hoàn thiện bộ máy theo mô hình thống nhất cấp tỉnh và cấp huyện.',
        tags: ['160 đơn vị', '17 sở', '12 phòng'],
        bullets: [
          'Đến năm 2007, tỉnh có 160 xã, phường, thị trấn (144 xã, 9 phường, 7 thị trấn).',
          'Năm 2008, tổ chức lại 17 cơ quan chuyên môn thuộc UBND tỉnh theo Nghị định 13/2008/NĐ-CP.',
          'Cấp huyện, thị xã được tổ chức 12 phòng chuyên môn: 10 thống nhất và 2 phòng đặc thù.'
        ],
        impact: 'Chuyển trọng tâm từ điều chỉnh địa giới sang chuẩn hóa mô hình bộ máy hành chính chuyên môn.'
      },
      {
        year: '2009',
        period: '2009-2020',
        title: 'Thành lập huyện Mỏ Cày Bắc và nâng cấp thị xã Bến Tre thành thành phố',
        summary: 'Năm bản lề với thay đổi lớn ở cả cấp huyện và đô thị trung tâm.',
        tags: ['08/NĐ-CP', '34/NQ-CP', 'Mỏ Cày Bắc', 'TP Bến Tre'],
        bullets: [
          'Ngày 09/02/2009 thành lập xã Tân Hội, Hưng Khánh Trung A, Phú Mỹ, phường Phú Tân; đồng thời thành lập huyện Mỏ Cày Bắc.',
          'Ngày 11/8/2009 thành lập thành phố Bến Tre trên cơ sở toàn bộ thị xã Bến Tre.',
          'TP Bến Tre lúc này có 16 đơn vị hành chính trực thuộc gồm 10 phường và 6 xã.'
        ],
        impact: 'Đây là bước tái cấu trúc mạnh nhất giai đoạn sau 2000, vừa tăng đơn vị cấp huyện vừa thúc đẩy đô thị hóa trung tâm tỉnh.'
      },
      {
        year: '2012–2013',
        period: '2009-2020',
        title: 'Phân cấp quản lý bộ máy và mở rộng địa giới thành phố Bến Tre',
        summary: 'Bổ sung cơ chế phân cấp và điều chỉnh ranh giới giữa Châu Thành với TP Bến Tre.',
        tags: ['04/2012/QĐ-UBND', '49/NQ-CP', 'mở rộng thành phố'],
        bullets: [
          'Năm 2012 ban hành quy định phân cấp quản lý tổ chức bộ máy, cán bộ, công chức của tỉnh.',
          'Ngày 05/4/2013 điều chỉnh một phần địa giới huyện Châu Thành để mở rộng thành phố Bến Tre.',
          'Sau điều chỉnh, TP Bến Tre có 10 phường và 7 xã; huyện Châu Thành còn 22 đơn vị hành chính cấp xã.'
        ],
        impact: 'Mở rộng không gian đô thị gắn với tăng cường công cụ quản trị nhân sự và tổ chức trong hệ thống hành chính.'
      },
      {
        year: '2014–2019',
        period: '2009-2020',
        title: 'Ổn định ở quy mô 164 đơn vị cấp xã và nâng hạng đô thị',
        summary: 'Tỉnh vận hành với 9 đơn vị cấp huyện; TP Bến Tre được công nhận đô thị loại II.',
        tags: ['164 đơn vị', 'đô thị loại II'],
        bullets: [
          'Đến năm 2014, tỉnh có 9 đơn vị hành chính cấp huyện và 164 đơn vị hành chính cấp xã.',
          'Năm 2018, số lượng này vẫn giữ ở mức 164 đơn vị (147 xã, 10 phường, 7 thị trấn).',
          'Ngày 13/02/2019, thành phố Bến Tre được công nhận là đô thị loại II trực thuộc tỉnh.'
        ],
        impact: 'Cho thấy giai đoạn ổn định tương đối về địa giới, tập trung vào chất lượng quản trị và phát triển đô thị.'
      },
      {
        year: '2020',
        period: '2009-2020',
        title: 'Sắp xếp đơn vị hành chính cấp xã, giảm còn 157 đơn vị',
        summary: 'Sáp nhập nhiều xã, phường theo chủ trương tinh gọn giai đoạn 2019–2021.',
        tags: ['856/NQ-UBTVQH14', 'sáp nhập', '157 đơn vị'],
        bullets: [
          'Thành lập phường An Hội từ việc sáp nhập phường 1, 2, 3.',
          'Nhập Mỹ Thành vào Bình Phú; Giao Hòa vào Giao Long; Phước Tuy và Phú Ngãi thành Phước Ngãi; Phong Mỹ vào Phong Nẫm; Bình Khánh Tây và Bình Khánh Đông thành Bình Khánh.',
          'Sau sắp xếp, tỉnh giảm 7 đơn vị cấp xã và còn 157 đơn vị hành chính cấp xã, phường, thị trấn.'
        ],
        impact: 'Đánh dấu bước chuyển từ mở rộng sang tinh gọn, hướng đến bộ máy hành chính gọn hơn và hiệu quả hơn.'
      }
    ];
window.BEN_TRE_EVENTS = events;