// Wrapped in an IIFE so the popup can re-inject this file safely.
(() => {
// Danh sách các câu trả lời đã biết, mỗi câu có thể có nhiều đáp án đúng
const answers = {
    // Quy chế 2026.1 (200 câu)
    "Điểm CPA từ 3,2 đến cận 3,6 khi quy đổi sang dải điểm thang 10 tương đương có kết quả là bao nhiêu?":
        ["8,0 đến cận 9,0."],
    "Vị trí của Tiệm giặt là công cộng thuộc Ký túc xá Bách khoa được đặt ở đâu?":
        ["Nhà hồng xanh phía sau hội trường B6 (cạnh B7) - sát đường Trần Đại Nghĩa."],
    "Sinh viên có hành vi vi phạm kỷ luật khi thi hộ hoặc nhờ thi hộ sẽ bị trừ bao nhiêu điểm rèn luyện?":
        ["Trừ 20 điểm."],
    "Tổ tư vấn tâm lý sinh viên (tiền thân của Tổ tư vấn và hỗ trợ sinh viên SSU) được thành lập vào ngày tháng năm nào?":
        ["Ngày 26/03/2019."],
    "Việc nộp chứng chỉ ngoại ngữ quốc tế để quy đổi miễn học và công nhận chuẩn đầu ra được sinh viên thực hiện qua kênh nào?":
        ["Đăng ký trực tuyến trên hệ thống quản lý đào tạo (eHUST/QLDT) theo các đợt thông báo."],
    "Mức giá trị của Học bổng KKHT loại Giỏi (loại B) được tính như thế nào?":
        ["Bằng 1,2 lần mức học bổng loại Khá."],
    'Quy đổi khối lượng học tập hệ đại học chính quy: 1 TCHT của học phần "Thí nghiệm / Thực hành thông thường" bằng bao nhiêu Tín chỉ học phí(TCHP)?':
        ["1,5 TCHP."],
    "Địa điểm tiếp nhận hồ sơ Chế độ chính sách và phát Giấy xác nhận ưu đãi giáo dục cho sinh viên là phòng nào?":
        ["Phòng 101 - Nhà B8."],
    "Khi đăng ký tốt nghiệp đại học, sinh viên được chọn số tín chỉ tích lũy so với yêu cầu của CTĐT như thế nào?":
        ["Chỉ chọn đủ hoặc không nhiều hơn 3 tín chỉ so với yêu cầu của chương trình."],
    "Hệ số học phí áp dụng đối với các lớp học lại tổ chức ngoài kế hoạch theo đề nghị của sinh viên có sĩ số dưới 10 sinh viên là bao nhiêu?":
        ["Hệ số 2,0."],
    'Điểm chữ "W" xuất hiện trong bảng điểm của sinh viên mang ý nghĩa gì?':
        ["Điểm học phần sinh viên đã đăng ký rút thành công trong thời gian quy định."],
    'Theo Quy chế đào tạo 2025, "Lớp học phần rút gọn" dành cho sinh viên học lại được mở khi đáp ứng những điều kiện nào?':
        ["Học lại ít nhất 02 lần chưa đạt, điểm quá trình từ 2,0 trở lên, sinh viên từ năm thứ 3 trở lên."],
    'Sinh viên đạt danh hiệu "Sinh viên 5 tốt" từ cấp Đại học trở lên được cộng bao nhiêu điểm rèn luyện?':
        ["Cộng 4 điểm."],
    "Nếu sinh viên nộp đơn đề nghị rút học phần trong khoảng 7 tuần đầu của học kỳ chính và được giải quyết, mức học phí phải đóng là bao nhiêu?":
        ["Phải đóng 50% học phí của học phần đó."],
    "Theo hướng dẫn Quản lý tài chính cá nhân trong Sổ tay sinh viên, tỷ lệ 20% thu nhập hàng tháng được khuyên dành cho mục đích nào?":
        ["Dành cho tiết kiệm."],
    "Sinh viên không thể dự thi cuối kỳ do bị ốm hoặc tai nạn có hồ sơ hợp lệ được hoãn thi (điểm I) và dự thi bù trong thời hạn tối đa bao lâu?":
        ["Trong thời hạn 2 học kỳ chính tiếp theo."],
    "Chứng chỉ tiếng Anh VSTEP trình độ B1 tương ứng với Bậc mấy trong Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam?":
        ["Bậc 3."],
    "Kết quả xét duyệt Học bổng KKHT được công bố chậm nhất vào tuần học thứ mấy của học kỳ cấp học bổng?":
        ["Chậm nhất vào tuần học thứ 10."],
    "Sinh viên bị buộc thôi học do kết quả học tập yếu kém có quyền đề nghị chuyển sang hình thức đào tạo nào của Nhà trường?":
        ["Chuyển sang hình thức Vừa làm vừa học (VLVH)."],
    "Học bổng Chính phủ cấp cho người học được Nhà trường thực hiện chi trả theo định kỳ nào?":
        ["Chi trả định kỳ theo từng tháng dựa trên số tháng thực học."],
    "Học bổng Trần Đại Nghĩa là học bổng của ĐHBK Hà Nội dành cho đối tượng sinh viên nào?":
        ["Sinh viên có hoàn cảnh kinh tế gia đình đặc biệt khó khăn, có ý chí vươn lên trong học tập."],
    "Việc miễn giảm học phí cho sinh viên diện chế độ chính sách được thực hiện căn cứ theo văn bản quy định nào của Chính phủ?":
        ["Nghị định 238/2025/NĐ-CP."],
    "Theo Quy chế đào tạo 2025 (sửa đổi), điểm liệt đối với học phần đồ án tốt nghiệp/khóa luận tốt nghiệp cử nhân, đồ án tốt nghiệp kỹ sư là bao nhiêu?":
        ["Dưới 5,0."],
    "Sinh viên thuộc diện Cử tuyển nộp và nhận giấy xác nhận được hưởng học bổng chính sách tại đâu và vào thời gian nào?":
        ["Tại Phòng 102 - Nhà C1 vào đầu các học kỳ."],
    "Chuẩn ngoại ngữ đầu ra đối với CTĐT Tiếng Anh Khoa học Kỹ thuật và Công nghệ là gì?":
        ["Ngoại ngữ 1 đạt tối thiểu Bậc 5, Ngoại ngữ 2 đạt tối thiểu Bậc 3."],
    "Chứng chỉ tiếng Pháp TCF quy đổi tương đương Bậc 3 (B1) yêu cầu điểm số TCF nằm trong khoảng nào?":
        ["300 - 399 điểm."],
    "Sinh viên không đáp ứng điều kiện phân loại trình độ ngoại ngữ đầu vào sẽ được xếp học như thế nào?":
        ["Được xếp học từ học phần đầu tiên của khối Ngoại ngữ cơ bản tương ứng."],
    'Học phần "FL1131 Tiếng Anh cơ sở 1" có khối lượng thời lượng là bao nhiêu?':
        ["3(3-0-0-6)."],
    "Sinh viên được cấp Học bổng Chính phủ theo Nghị định 179 có được đồng thời hưởng thêm chính sách học bổng khác từ nguồn ngân sách nhà nước không?":
        ["Không, chỉ được lựa chọn hưởng 01 chính sách học bổng từ nguồn ngân sách nhà nước."],
    "Theo Thông tư số 40/2026/TT-BGDĐT được trích dẫn trong Sổ tay sinh viên, có bao nhiêu hình thức xử lý kỷ luật đối với sinh viên?":
        ["04 hình thức (Khiển trách, Cảnh cáo, Đình chỉ học tập có thời hạn, Buộc thôi học)."],
    'Mức điểm chữ "P" được áp dụng cho loại học phần nào trong chương trình đào tạo?':
        ["Các học phần chỉ yêu cầu đạt, không tính vào điểm trung bình học tập."],
    'Học phí học phần “Giáo dục Quốc phòng - An ninh" được tính toán dựa trên đơn vị nào?':
        ["Tính theo số TCHP quy đổi của các học phần GDQP-AN."],
    "Quy định về việc quản lý và sử dụng Thẻ sinh viên khi vào trường như thế nào?":
        [
            "Phải đeo thẻ sinh viên",
            "Tuyệt đối không cho người khác mượn hoặc mượn thẻ người khác",
            "Không được cầm cố thẻ sinh viên.",
        ],
    "Trường hợp ngoại lệ nào sinh viên đề nghị rút học phần mà KHÔNG phải đóng học phí?":
        ["Đề nghị rút trong tuần đầu tiên của học kỳ thứ 2."],
    "Chuẩn Ngoại ngữ 2 bắt buộc đối với sinh viên ngành Ngôn ngữ Anh hoặc Tiếng Anh KHKT&CN khi xét tốt nghiệp tối thiểu đạt Bậc mấy?":
        ["Bậc 3."],
    "Thời gian nghỉ học tạm thời tối đa cho phép đối với lý do cá nhân thông thường là bao nhiêu học kỳ chính?":
        ["04 học kỳ chính (và được tính vào thời gian chậm tiến độ)."],
    "Thời hạn Giám đốc Đại học ra quyết định công nhận tốt nghiệp và cấp bằng tốt nghiệp Thạc sĩ cho học viên đủ điều kiện là bao lâu?":
        ["Trong thời hạn 02 tháng tính từ thời điểm đáp ứng đủ điều kiện."],
    "Điều kiện về điểm CPA để sinh viên đại học đề nghị xét chuyển vào học Chương trình đào tạo Tài năng sau năm thứ hai là gì?":
        ["CPA ≥ 3,2."],
    "Bài thi kiểm tra trình độ tiếng Anh đầu vào (Placement Test) do ĐHBK Hà Nội tổ chức có giá trị sử dụng trong thời gian bao lâu?":
        ["Chỉ có giá trị để phân loại trình độ đầu vào và xếp lớp học phần NNCB năm thứ nhất."],
    "Chứng chỉ tiếng Trung HSK 6 kết hợp HSKK cao cấp tương ứng Bậc mấy trong Khung năng lực 6 bậc?":
        ["Bậc 6."],
    "Mức phí thực hiện lại 01 chuyên đề tiến sĩ đối với nghiên cứu sinh được quy định cụ thể là bao nhiêu?":
        ["2.200.000 đồng / chuyên đề."],
    "Tân sinh viên K71 đăng ký Học bổng Trần Đại Nghĩa (Nhóm 1) theo điểm thi THPT yêu cầu điểm quy đổi thang 30 tối thiểu là bao nhiêu?":
        ["Từ 24/30 trở lên."],
    "Tân sinh viên đạt điểm bài kiểm tra HUST English Placement Test từ 475 đến dưới 545 điểm được xếp vào Nhóm trình độ nào?":
        ["Nhóm 4."],
    "Sinh viên thực hiện khai báo thông tin liên lạc và nơi cư trú đầy đủ theo yêu cầu của Đại học được cộng bao nhiêu điểm rèn luyện?":
        ["Cộng 4 điểm."],
    "Điều kiện bắt buộc kể từ học kỳ 3 trở đi đối với sinh viên chưa học hoặc chưa được miễn các học phần ngoại ngữ cơ bản (NNCB) để được đăng ký môn khác là gì?":
        ["Bắt buộc phải đăng ký học song hành các học phần NNCB tương ứng ở mỗi kỳ."],
    "Địa chỉ Văn phòng Tổ tư vấn và hỗ trợ sinh viên (SSU) chuyên tư vấn tâm lý và hỗ trợ học tập nằm tại phòng nào?":
        ["Phòng 101 - Nhà C1."],
    "Chứng chỉ tiếng Nhật JLPT trình độ N2 tương đương với Bậc mấy theo Khung 6 bậc?":
        ["Bậc 4."],
    "Sinh viên tham gia đầy đủ Tuần sinh hoạt công dân do Nhà trường tổ chức được cộng bao nhiêu điểm rèn luyện?":
        ["Cộng 6 điểm."],
    "Mức học phí áp dụng đối với sinh viên nước ngoài tự chi trả kinh phí học tập được tính bằng bao nhiêu lần so với quy định chuẩn?":
        ["1,5 lần."],
    "Quyết định ban hành Quy định về phân loại trình độ đầu vào và chuẩn ngoại ngữ K71 do lãnh đạo nào ký phê duyệt?":
        ["Phó Giám đốc GS.TS. Vũ Văn Yêm."],
    "Ứng dụng di động chính thức hỗ trợ sinh viên theo dõi Điểm rèn luyện, cập nhật minh chứng và đăng ký hoạt động ngoại khóa là gì?":
        ["App iCTSV."],
    'Ký hiệu "ĐK" trong bảng danh mục học phần tiếng Anh cơ bản có ý nghĩa gì?':
        ["Sinh viên tự đăng ký học song hành với các học phần của CTĐT tại kỳ tương ứng nếu chưa học hoặc chưa được miễn."],
    "Các phòng Học nhóm dành cho sinh viên tại Thư viện Tạ Quang Bửu nằm từ phòng 501 đến phòng 508 thuộc tầng mấy?":
        ["Tầng 5 Thư viện Tạ Quang Bửu."],
    "Đối với học phần từ 2 tín chỉ trở lên, nếu sinh viên bị điểm quá trình là điểm liệt (dưới 3,0 hoặc dưới 5,0 tùy môn) thì điểm kết thúc học phần được tính ra sao?":
        ["Điểm học phần là điểm F."],
    "Sinh viên có quyền nộp đơn xin tự nguyện thôi học không và sau khi ra quyết định có được tiếp nhận trở lại không?":
        ["Được xin thôi học nhưng không được tiếp nhận trở lại."],
    "Tiêu chuẩn xét Học bổng KKHT loại Khá (loại C) yêu cầu mức GPA và ĐRL tối thiểu là bao nhiêu?":
        ["GPA ≥ 2,5 và ĐRL ≥ 65."],
    "Điều kiện học tập đối với sinh viên từ năm thứ hai trở đi để đăng ký Chương trình Vay vốn tín dụng ưu đãi STEM là gì?":
        ["Kết quả học tập trung bình (GPA) năm học liền trước đạt loại Giỏi trở lên (từ 3,2 trở lên)."],
    'Sinh viên được xét "Miễn học" học phần ngoại ngữ cơ bản sẽ được ghi ký hiệu điểm gì trên hệ thống?':
        ["Điểm R."],
    "Trường hợp hai sinh viên có cùng điểm GPA ở cuối danh sách xét học bổng, tiêu chí ưu tiên nào được sử dụng để xếp hạng?":
        ["Ưu tiên sinh viên có điểm rèn luyện cao hơn."],
    "Khi tham gia các sự kiện, hội họp trong nhà trường, sinh viên phải có mặt trước giờ khai mạc ít nhất bao nhiêu phút?":
        ["Trước 15 phút."],
    "Văn bản pháp lý của Chính phủ quy định về chính sách học phí, miễn giảm học phí áp dụng cho năm học 2026-2027 tại ĐHBK Hà Nội là văn bản nào?":
        ["Nghị định 238/2025/NĐ-CP ngày 03/09/2025."],
    "Sinh viên thuộc Nhóm 6 trong phân loại ngoại ngữ đầu vào sẽ nhận được quyền lợi gì?":
        ["Được miễn học toàn bộ các học phần Tiếng Anh cơ sở (từ FL1131 đến FL1135)."],
    "Sinh viên nghỉ học tạm thời do tai nạn hoặc điều trị bệnh dài ngày sẽ KHÔNG tính vào thời gian chậm tiến độ nếu tổng thời gian nghỉ không vượt quá bao nhiêu học kỳ?":
        ["04 học kỳ chính."],
    "Sau thời gian nào hàng ngày, sinh viên không được tự ý tụ tập tại các khu vực công cộng thuộc khuôn viên Nhà trường nếu không được phép?":
        ["Sau 21h00."],
    "Chuẩn ngoại ngữ đầu ra đối với Chương trình đào tạo Tiếng Hàn Khoa học và Công nghệ quy định ra sao?":
        ["Ngoại ngữ 1 (Tiếng Hàn) đạt tối thiểu Bậc 5, Ngoại ngữ 2 đạt tối thiểu Bậc 3."],
    "Mức Học bổng Chính phủ hỗ trợ hàng tháng cho Học viên Thạc sĩ ngành Vi mạch bán dẫn và các ngành Khoa học cơ bản là bao nhiêu?":
        ["8.400.000 đồng / tháng."],
    "Địa chỉ văn phòng làm việc của Đoàn Thanh niên Đại học Bách khoa Hà Nội nằm tại phòng nào?":
        ["Phòng 208 - Tòa nhà C2."],
    "Sinh viên đã có quyết định buộc thôi học, nếu thi lại và trúng tuyển mới vào trường thì việc công nhận học phần cũ được xử lý ra sao?":
        ["Phải học lại toàn bộ chương trình, ngoại trừ học phần Giáo dục quốc phòng - an ninh đã được cấp chứng chỉ."],
    "Sinh viên nộp chậm học phí học kỳ hè quá thời hạn quy định sẽ bị xử lý như thế nào?":
        ["Bị hủy kết quả đăng ký học phần trong học kỳ hè đó."],
    "Việc xác nhận Giấy vay vốn ngân hàng cho sinh viên được Ban Công tác sinh viên trả kết quả tại địa điểm nào?":
        ["Nhà B8."],
    "Kết quả rèn luyện học kỳ đạt từ 80 điểm đến 89 điểm được xếp loại gì?":
        ["Loại Tốt."],
    "Sau khi bảo vệ thành công luận văn Thạc sĩ, học viên phải nộp quyển luận văn tốt nghiệp cho Thư viện Tạ Quang Bửu trong thời hạn bao nhiêu ngày?":
        ["Trong thời hạn 20 ngày kể từ ngày bảo vệ thành công."],
    "Chứng chỉ IELTS Academic đạt từ 7.0 đến 8.0 được quy đổi tương đương với Bậc mấy theo Phụ lục II Quy định ngoại ngữ K71?":
        ["Bậc 5."],
    "Các học phần Tiếng Anh cơ sở (NNCB) có được tính điểm vào GPA và CPA toàn khóa không?":
        ["Không tính vào GPA và CPA, chỉ ghi nhận điểm đạt (R) hoặc không đạt."],
    "Học phí đối với các lớp Vừa làm vừa học (VLVH) có sĩ số từ 10 đến 14 sinh viên áp dụng hệ số nhân học phí là bao nhiêu?":
        ["Hệ số 1,5."],
    "Nhà trường có công nhận chứng chỉ tiếng Anh thi theo hình thức trực tuyến tại nhà (ví dụ: TOEFL iBT Home Edition) không?":
        ["Không công nhận các chứng chỉ tiếng Anh cấp trên cơ sở thi trực tuyến tại nhà."],
    "Sinh viên học cùng lúc hai chương trình phải đăng ký học chương trình thứ hai muộn nhất trước thời điểm xét tốt nghiệp chương trình thứ nhất là bao lâu?":
        ["Muộn nhất 02 năm trước thời điểm xét tốt nghiệp."],
    "Trụ sở làm việc của Tổ hỗ trợ triển khai hệ thống iCTSV đặt tại vị trí nào trong trường?":
        ["Phòng 102 - Nhà D3-5."],
    "Để đạt Học bổng KKHT loại Xuất sắc (loại A), sinh viên cần đạt tiêu chuẩn GPA và điểm rèn luyện (ĐRL) học kỳ tối thiểu là bao nhiêu?":
        ["GPA ≥ 3,6 và ĐRL ≥ 90."],
    "Đối với Chương trình đào tạo chuẩn có chuẩn đầu ra là tiếng Anh, yêu cầu trình độ tiếng Anh tối thiểu khi xét tốt nghiệp là gì?":
        ["Có chứng chỉ tiếng Anh quy đổi tương đương từ Bậc 3 trở lên."],
    "Pháp lệnh của Ủy ban Thường vụ Quốc hội quy định ưu đãi người có công với cách mạng được áp dụng trong xét miễn giảm học phí là văn bản nào?":
        ["Pháp lệnh số 02/2020/UBTVQH14 ngày 09/12/2020."],
    "Sinh viên xin nghỉ học tạm thời vì lý do cá nhân thông thường (ngoài y tế và nghĩa vụ quân sự) cần đáp ứng điều kiện tối thiểu nào?":
        ["Đã học ít nhất một học kỳ tại trường."],
    "Quỹ học bổng Khuyến khích học tập (KKHT) KHÔNG xét cấp cho sinh viên đăng ký ít hơn bao nhiêu tín chỉ trong học kỳ cấp học bổng?":
        ["Đăng ký ít hơn 12 tín chỉ."],
    "Hồ sơ đăng ký xét Học bổng Trần Đại Nghĩa bắt buộc phải có giấy tờ xác nhận của cơ quan nào?":
        ["Mẫu đơn đăng ký có xác nhận hoàn cảnh khó khăn của Ủy ban nhân dân địa phương nơi gia đình cư trú."],
    "Sinh viên đã hết thời gian học tập tối đa theo quy định nhưng chưa tốt nghiệp do thiếu môn GDQP-AN hoặc GDTC được gia hạn hoàn thiện trong thời gian tối đa bao lâu?":
        ["Trong thời hạn tối đa 03 năm kể từ khi hết thời hạn học tập."],
    "Chính sách hỗ trợ phần chênh lệch học phí cho sinh viên diện Chế độ chính sách (CĐCS) KHÔNG áp dụng cho khối chương trình nào?":
        ["Chương trình thạc sĩ."],
    "Học phí tại Đại học Bách khoa Hà Nội được tính dựa trên đơn vị đo lường nào?":
        ["Số tín chỉ học phí (TCHP) của các học phần đăng ký."],
    "Đối với Chương trình đào tạo Kỹ sư chuyên sâu Thiết kế vi mạch, mức học phí/1 TCHP được tính bằng mức học phí của chương trình cử nhân nào?":
        ["Cử nhân Kỹ thuật Điện tử - Viễn thông."],
    "Điều 22 Luật Giáo dục số 43/2019/QH14 nghiêm cấm các hành vi nào trong cơ sở giáo dục?":
        [
            "Xúc phạm nhân phẩm nhà giáo/người học",
            "Xuyên tạc nội dung giáo dục",
            "Gian lận trong học tập/thi",
            "Hút thuốc, uống rượu bia, gây rối trật tự.",
        ],
    "Sinh viên đoạt giải trong các cuộc thi chính thức cấp Quốc gia hoặc Quốc tế được cộng tối đa bao nhiêu điểm rèn luyện ở Mục 5.3?":
        ["Cộng 20 điểm."],
    "Không gian sinh hoạt chung dành cho sinh viên nội trú Ký túc xá nằm tại tầng mấy của tòa nhà B10?":
        ["Tầng 5 - Tòa nhà B10."],
    "Quy tắc xếp bậc đối với chứng chỉ TOEIC 4 kỹ năng trong quy định công nhận ngoại ngữ K71 được tính dựa trên tiêu chí nào?":
        ["Mức quy đổi được xác định theo kỹ năng có mức quy đổi thấp nhất trong bốn kỹ năng."],
    "Học viên tốt nghiệp đại học ngành phù hợp khi theo học chương trình Thạc sĩ phải học bổ sung tối đa bao nhiêu tín chỉ?":
        ["Học bổ sung tối đa 15 tín chỉ."],
    'Học phần "Tiếng Pháp PFIEV 1" (mã FL1801) có khối lượng thời lượng quy định là bao nhiêu?':
        ["4(2-4-0-8)."],
    "Sau khi có quyết định công nhận tốt nghiệp, Nhà trường sẽ cấp bằng tốt nghiệp cho sinh viên trong thời hạn bao lâu?":
        ["Trong thời hạn 03 tháng."],
    "Theo quy tắc quy đổi từ dải điểm thang 4 sang thang điểm 10 tương đương, điểm CPA từ 2,0 đến cận 2,5 tương ứng với dải điểm thang 10 nào?":
        ["5,5 đến cận 7,0."],
    "Trong buổi bảo vệ Đồ án tốt nghiệp tại hội đồng, nếu có 1 thành viên hội đồng cho điểm dưới 5 thì điểm bảo vệ cuối kỳ của sinh viên được tính như thế nào?":
        ["Bị tính là điểm liệt và chỉ được ghi tối đa là 4,9 điểm."],
    "Theo quy tắc quy đổi, chứng chỉ APTIS ESOL trình độ A2 (chỉ thể hiện 1 mức năng lực) được xếp vào bậc cơ sở nào trong Bảng quy đổi?":
        ["Bậc 2.1."],
    "Địa chỉ phòng Mượn giáo trình học tập tại Thư viện Tạ Quang Bửu là phòng nào?":
        ["Phòng 111 Thư viện Tạ Quang Bửu."],
    "Quy định về phương tiện giao thông di chuyển vào khuôn viên Trường Bách khoa như thế nào?":
        ["Xe đạp, xe máy, ô tô phải giảm tốc độ, quan sát và gửi xe đúng nơi quy định; xe taxi KHÔNG được vào trường."],
    "Nếu trung bình cộng điểm của người hướng dẫn và người phản biện đồ án tốt nghiệp cho dưới 5,0 thì sinh viên sẽ bị xử lýra sao?":
        ["Không được phép tham gia bảo vệ và điểm bảo vệ tại hội đồng tính là 0 điểm."],
    "Sinh viên đăng ký học vượt quá số tín chỉ chuẩn quy định trong một học kỳ có được giảm đơn giá TCHP không?":
        ["Vẫn tính đúng đơn giá TCHP quy định của chương trình đào tạo."],
    'Theo Quy chế đào tạo 2025, điều kiện trùng lặp nội dung chuyên môn tối thiểu giữa hai học phần để được xem là "học phần tương đương" là bao nhiêu?':
        ["80%."],
    "Chuẩn ngoại ngữ đầu ra xét tốt nghiệp đối với các chương trình chất lượng cao ELITECH giảng dạy bằng tiếng Pháp là gì?":
        ["Chứng chỉ tiếng Pháp DELF B2 hoặc TCF tương đương."],
    "Sinh viên đăng ký học lại học phần đã đạt điểm D để cải thiện điểm CPA có phải đóng học phí không?":
        ["Phải đóng 100% học phí theo số TCHP đăng ký."],
    "Chứng chỉ tiếng Hàn TOPIK 4 tương ứng với Bậc mấy trong Khung năng lực 6 bậc?":
        ["Bậc 4."],
    "Mức Học bổng Chính phủ hỗ trợ hàng tháng đối với Học viên Thạc sĩ thuộc Chương trình đào tạo tài năng là bao nhiêu?":
        ["8.400.000 đồng / tháng."],
    "Sinh viên là con đẻ của người hoạt động cách mạng trước ngày 01/01/1945 thuộc đối tượng hưởng chính sách học phí nào?":
        ["Miễn 100% học phí."],
    "Chứng chỉ Aptis ESOL (đủ 4 kỹ năng) đạt trình độ B2 được quy đổi tương đương Bậc mấy?":
        ["Bậc 4."],
    "Học phí các học phần thuộc hệ Vừa làm vừa học hoặc Sau đại học được thực hiện tại cơ sở liên kết ngoài Đại học được tính bằng bao nhiêu % so với chương trình chuẩn?":
        ["Bằng 90% học phí chương trình chuẩn, cộng thêm kinh phí phối hợp đào tạo."],
    'Cơ quan nào chịu trách nhiệm đánh giá khả năng và mức độ ứng dụng thực tế của đề tài ĐATN trong quy trình xét cấp Học bổng "Gắn kết quê hương"?':
        ["Hội đồng chấm Đồ án tốt nghiệp."],
    "Sinh viên mồ côi cả cha lẫn mẹ thuộc Nhóm 3 khi đăng ký Học bổng Trần Đại Nghĩa được hưởng mức học bổng là bao nhiêu?":
        ["100% học phí của các học phần trong chương trình đào tạo tại học kỳ xét."],
    "Sinh viên không hoàn thành chương trình đào tạo Thạc sĩ được quyền đề nghị cấp chứng nhận các học phần đã tích lũy trong thời hạn bao lâu?":
        ["Trong thời hạn 5 năm kể từ ngày khóa học kết thúc."],
    "Sinh viên thuộc Nhóm 3 trong đối tượng xét cấp Học bổng Trần Đại Nghĩa là ai?":
        ["Sinh viên mồ côi cả cha và mẹ, không có nguồn nuôi dưỡng và không thuộc diện miễn 100% HP do quá 22 tuổi."],
    "Sau khi kết quả đánh giá điểm rèn luyện dự kiến được công bố, sinh viên có thời gian tối thiểu bao nhiêu ngày làm việc để nộp kiến nghị nếu có thắc mắc?":
        ["Kết quả dự kiến được công bố ít nhất 05 ngày làm việc trước khi chính thức công nhận để sinh viên kiến nghị."],
    "Tiêu chuẩn về điểm rèn luyện (ĐRL) học kỳ tối thiểu để đạt Học bổng KKHT loại B (Giỏi) là bao nhiêu điểm?":
        ["ĐRL ≥ 80 điểm."],
    "Điểm thay đổi quan trọng về cấu trúc học kỳ chính trong năm học từ Quy chế 2023 sang Quy chế 2025 là gì?":
        ["Bỏ chia đợt A và B, một năm học bao gồm hai học kỳ chính và một học kỳ hè."],
    "Trường hợp nào sau đây KHÔNG thuộc diện xét cấp Học bổng Trần Đại Nghĩa?":
        ["Sinh viên bị kỷ luật từ mức cảnh cáo trở lên hoặc đã nhận học bổng khác trên 10 triệu đồng."],
    "Mức định mức cho vay tối đa theo Chương trình Vay vốn đối với sinh viên có hoàn cảnh khó khăn là bao nhiêu?":
        ["4.000.000đ / sinh viên / tháng."],
    "Sinh viên đang chịu hình thức kỷ luật nào tại thời điểm xét học bổng KKHT sẽ KHÔNG được xét cấp học bổng?":
        ["Chịu hình thức kỷ luật từ mức Khiển trách trở lên."],
    "Nếu sinh viên học một học phần tiếng Anh cơ sở nhưng không đạt điểm kết thúc (bị điểm F), sinh viên phải xử lý ra sao?":
        ["Phải tự đăng ký học lại học phần đó ở các học kỳ tiếp theo."],
    'Trong Bảng đánh giá điểm rèn luyện sinh viên, Tiêu chí 1 "Chấp hành pháp luật và nội quy, quy chế của nhà trường" có điểm cộng tối đa là bao nhiêu?':
        ["Tối đa 30 điểm."],
    "Sinh viên là con đẻ hoặc con nuôi hợp pháp của Người có công với cách mạng được hưởng mức hỗ trợ miễn giảm học phí là bao nhiêu?":
        ["Miễn 100% học phí."],
    "Mức điểm trung bình tích lũy (CPA) tối thiểu sinh viên cần đạt khi xét công nhận tốt nghiệp đại học là bao nhiêu?":
        ["CPA ≥ 2,00."],
    'Học phần "FL1135 Tiếng Anh cơ sở 5" có khối lượng thời lượng quy định là bao nhiêu?':
        ["3(3-0-0-6)."],
    "Chứng chỉ tiếng Anh quốc tế dùng để xét công nhận chuẩn đầu ra phải đảm bảo điều kiện thời hạn như thế nào?":
        ["Cấp trong vòng 2 năm tính đến thời điểm xét chuẩn ngoại ngữ đầu ra và còn hiệu lực."],
    "Hành vi nào sau đây bị NGHIÊM CẤM đối với sinh viên trong giờ học trên lớp?":
        ["Tự ý ghi âm, ghi hình, chụp ảnh trong giờ học khi chưa được sự đồng ý của giáo viên."],
    "Theo Bảng 2.1 Phụ lục II, chứng chỉ IELTS Academic đạt mức điểm 2.0 được quy đổi tương đương Bậc cơ sở nào?":
        ["Không được quy đổi."],
    "Trường hợp sinh viên có đơn xin nghỉ học tạm thời hoặc thôi học được chấp thuận trong 7 tuần đầu của học kỳ chính thì nghĩa vụ học phí là bao nhiêu?":
        ["Phải đóng 50% học phí của học kỳ đó."],
    "Cổng thông tin chính thức hỗ trợ hướng nghiệp, tìm kiếm việc làm thêm và thực tập dành cho sinh viên Bách khoa có tên là gì?":
        ["Cổng thông tin HustWork (hustwork.hust.edu.vn)."],
    "Sinh viên được phép đăng ký học chương trình đào tạo thứ hai (bằng kép) sớm nhất khi nào?":
        ["Khi đã được xếp trình độ năm thứ hai của chương trình thứ nhất."],
    "Trường hợp lớp học phần bị hủy do không đủ sĩ số tối thiểu theo quy định thì số tiền học phí sinh viên đã nộp xử lý ra sao?":
        ["Được hoàn trả hoặc trừ vào nghĩa vụ học phí của học kỳ tiếp theo."],
    "Yêu cầu về các kỹ năng đối với chứng chỉ tiếng Anh quốc tế được sử dụng để xét chuẩn ngoại ngữ đầu ra là gì?":
        ["Phải đánh giá đầy đủ 4 kỹ năng (Nghe, Nói, Đọc, Viết) và còn hiệu lực trong vòng 2 năm."],
    "Mức học phí đối với các học phần học ở học kỳ hè được tính như thế nào so với học kỳ chính?":
        ["Bằng 1,0 lần mức học phí kỳ chính."],
    "Sinh viên xin nghỉ học tạm thời vì lý do cá nhân sẽ bị xét buộc thôi học nếu tổng thời gian nghỉ vượt quá bao nhiêu học kỳ chính?":
        ["Nghỉ quá 04 học kỳ chính."],
    "Chứng chỉ Cambridge English Qualifications trình độ B2 First (FCE) đạt từ 160-179 điểm được quy đổi sang Bậc mấy?":
        ["Bậc 4."],
    "Quy mô lớp học phần tối thiểu đối với chương trình đào tạo thạc sĩ theo Quy chế 2025 được điều chỉnh thành bao nhiêu học viên?":
        ["5 học viên."],
    "Tân sinh viên K71 đăng ký Học bổng Trần Đại Nghĩa (Nhóm 1) theo điểm thi Đánh giá tư duy (TSA) cần đạt điểm xét tuyển tối thiểu là bao nhiêu?":
        ["Từ 60,00/100 trở lên."],
    "Sinh viên là người dân tộc thiểu số rất ít người ở vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn được hưởng mức hỗ trợ học phí ra sao?":
        ["Miễn 100% học phí."],
    'Học phần "FL1132 Tiếng Anh cơ sở 2" có thời lượng và số tín chỉ quy định là bao nhiêu?':
        ["3(3-0-0-6)."],
    "Sinh viên có cha hoặc mẹ bị tai nạn lao động hưởng trợ cấp thường xuyên được hưởng mức giảm học phí là bao nhiêu?":
        ["Giảm 50% học phí."],
    "Sinh viên vi phạm quy chế thi từ mức cảnh cáo trở lên sẽ bị trừ bao nhiêu điểm rèn luyện (ĐRL)?":
        ["Trừ 10 điểm."],
    "Sinh viên nộp hồ sơ văn bản giấy đăng ký Học bổng Trần Đại Nghĩa tại đâu?":
        ["Phòng C1 - 102 (gặp cô Nghiêm Thị Kim Chi)."],
    "Quy định về chương trình ngoại ngữ cơ bản K71 KHÔNG áp dụng cho đối tượng sinh viên nào?":
        ["Sinh viên ngành Ngôn ngữ Anh."],
    "Sinh viên từ K67 đến K70 (Nhóm 2) đăng ký Học bổng Trần Đại Nghĩa cần đạt mức GPA học kỳ 2025.2 tối thiểu là bao nhiêu?":
        ["GPA ≥ 2,0."],
    "Sinh viên tự ý chuyển sang ngành học KHÔNG thuộc danh mục ưu tiên của Nghị định 179 sẽ bị xử lý học bổng ra sao?":
        ["Không tiếp tục được hưởng học bổng và phải hoàn trả kinh phí đã nhận thông qua cơ sở đào tạo."],
    "Đối với chương trình đào tạo Thạc sĩ, lớp học phần có quy mô dưới 5 học viên được xem xét tổ chức dưới hình thức nào?":
        ["Mở lớp dưới hình thức đồ án, khóa luận hoặc tiểu luận chuyên đề thay thế giờ lên lớp."],
    "Địa điểm làm thủ tục và nhận Giấy xác nhận ưu đãi giáo dục đào tạo cho sinh viên diện Chế độ chính sách là phòng nào?":
        ["Phòng 102 - Nhà C1."],
    "Kênh thanh toán học phí trực tuyến chính thức và an toàn dành cho sinh viên ĐHBK Hà Nội là gì?":
        ["Nộp trên Cổng thông tin sinh viên ctt.hust.edu.vn / app eHUST qua tài khoản ngân hàng liên kết."],
    "Khối lượng học tập tối đa được xem xét công nhận và chuyển đổi tín chỉ từ một cơ sở đào tạo khác không được vượt quá bao nhiêu % khối lượng toàn khóa?":
        ["Không vượt quá 50%."],
    "Học viên cao học nghỉ học tạm thời vì lý do cá nhân thông thường được phép nghỉ thời gian tối đa là bao nhiêu?":
        ["Tối đa 12 tháng (và được tính vào thời gian học tập)."],
    "Sinh viên K71 đăng ký học các lớp tiếng Anh tăng cường/dịch vụ ngoài giờ có phải nộp học phí không?":
        ["Phải nộp học phí theo quy định đối với lớp học phần dịch vụ/tăng cường."],
    'Quy định về "Học phần song hành" áp dụng cho hai học phần A và B được hiểu như thế nào?':
        ["Sinh viên phải theo học học phần A trước hoặc học đồng thời với học phần B."],
    "Mức học phí áp dụng cho các lớp học phần tổ chức theo yêu cầu riêng của 01 sinh viên (lớp đặc biệt) do cấp nào quyết định?":
        ["Giám đốc Đại học Bách khoa Hà Nội quyết định."],
    "Sinh viên đang học cùng lúc hai chương trình đào tạo sẽ bị dừng học chương trình thứ hai khi nào?":
        ["Khi bị cảnh báo học tập ở chương trình thứ nhất."],
    "Chứng chỉ tiếng Trung HSK 4 kết hợp HSKK trung cấp được Phụ lục VIII xếp vào Bậc mấy theo Khung 6 bậc?":
        ["Bậc 3."],
    "Quy mô sức chứa tổng cộng của Ký túc xá Bách khoa hiện nay là bao nhiêu chỗ ở?":
        ["4.500 chỗ ở (gồm 8 tòa nhà 4-5 tầng)."],
    'Học phí của các lớp "Học phần rút gọn" (cho sinh viên học lại) được tính bằng bao nhiêu so với lớp bình thường?':
        ["Bằng 50%."],
    "Trọng số của điểm thi cuối kỳ đối với học phần từ 2 tín chỉ trở lên được quy định nằm trong khoảng nào?":
        ["Từ 0,5 đến 0,8."],
    "Giá trị của Học bổng KKHT loại Xuất sắc (loại A) bằng bao nhiêu lần so với loại Khá (loại C)?":
        ["Bằng 1,5 lần."],
    'Quy đổi 1 TCHT học phần "Lý thuyết / Bài tập" hệ đại học chính quy tương ứng bằng bao nhiêu TCHP?':
        ["1,0 TCHP."],
    'Theo Quy chế đào tạo, "Học phần tiên quyết" của một học phần B được hiểu như thế nào?':
        ["Sinh viên phải học xong học phần A và đạt điểm đạt trở lên mới được đăng ký học học phần B."],
    "Mức Học bổng Chính phủ (Nghị định 179/2026/NĐ-CP) hỗ trợ hàng tháng cho sinh viên ngành Kỹ thuật then chốt & Công nghệ chiến lược là bao nhiêu?":
        ["5.500.000 đồng / tháng."],
    "Mức điểm rèn luyện (ĐRL) học kỳ 2025.2 tối thiểu đối với sinh viên Nhóm 2 đăng ký Học bổng Trần Đại Nghĩa là bao nhiêu điểm?":
        ["ĐRL ≥ 70 điểm."],
    "Số điện thoại đường dây nóng (Hotline) chính thức của Tổ tư vấn và hỗ trợ sinh viên (SSU) là số nào?":
        ["024 3869 2942."],
    "Sinh viên có được tự ý hủy lớp học phần ngoại ngữ cơ bản đã đăng ký học song hành trong học kỳ không?":
        ["Không được phép hủy, trừ trường hợp xin rút hoặc chủ động rút toàn bộ đăng ký học tập trong học kỳ."],
    "Văn phòng làm việc của Hội Sinh viên Đại học Bách khoa Hà Nội đặt tại vị trí nào?":
        ["Phòng 106 - Nhà D4."],
    "Kết quả bài thi kiểm tra tiếng Anh đầu khóa (HUST English Placement Test) đối với tân sinh viên K71 được sử dụng để làm gì?":
        ["Phân loại trình độ đầu vào, xếp lớp và xét miễn các học phần ngoại ngữ cơ bản."],
    "Văn phòng Quản lý Ký túc xá Bách khoa và Trung tâm Dịch vụ & Hỗ trợ Bách khoa nằm tại đâu?":
        ["Tầng 1 - Nhà B9."],
    "Theo Quy chế đào tạo 2025, điểm trung bình toàn khóa (CPA tốt nghiệp) cho chương trình Kỹ sư được tính như thế nào?":
        ["Chỉ tính dựa trên các học phần thuộc chương trình đào tạo kỹ sư đăng ký tốt nghiệp."],
    "Quỹ học bổng Khuyến khích học tập (KKHT) được trích từ nguồn nào và chiếm tỷ lệ bao nhiêu?":
        ["Trích từ nguồn học phí, bằng 8% học phí của học kỳ lấy điểm xét cấp học bổng."],
    'Ký hiệu điểm chữ "X" trong hệ thống quản lý học tập đại diện cho trạng thái nào?':
        ["Điểm học phần chưa hoàn thiện do thiếu dữ liệu đánh giá."],
    "Sinh viên có kết quả học tập và rèn luyện của học kỳ trước đó đạt mức Giỏi (GPA ≥ 3.2, ĐRL ≥ 80) được cộng bao nhiêu điểm rèn luyện?":
        ["Cộng 4 điểm."],
    "Trường hợp nào sau đây sinh viên KHÔNG được quyền đề nghị phúc tra hoặc khiếu nại điểm?":
        ["Bài thi trắc nghiệm trên máy tính."],
    "Điều kiện về ngoại ngữ để sinh viên chương trình Việt - Pháp PFIEV được đăng ký nhận Phụ lục văn bằng kỹ sư của phía Pháp là gì?":
        ["Đạt tối thiểu DELF B1 và Chứng chỉ TOEIC quốc tế (Nghe & Đọc) đạt từ 600 điểm trở lên."],
    "Theo Quy chế đào tạo 2025, sinh viên bị hạn chế khối lượng đăng ký học tập khi nào?":
        ["Khi bị cảnh báo học tập mức 1."],
    "Bảng quy đổi chứng chỉ ngoại ngữ ban hành kèm Quy định K71 có áp dụng cho sinh viên các khóa cũ (từ K70 trở về trước) không?":
        ["Áp dụng cho toàn bộ sinh viên các khóa đối với chứng chỉ cấp từ ngày quy định có hiệu lực; nếu mức mới khác cũ thì áp dụng mức cao hơn."],
    "Học viên thuộc chương trình tích hợp Cử nhân - Thạc sĩ được đăng ký học trước tối đa bao nhiêu tín chỉ thuộc CTĐT thạc sĩ khi còn ở giai đoạn cử nhân?":
        ["Tối đa 15 tín chỉ."],
    "Thời gian hưởng Học bổng Chính phủ tối đa cho người học thuộc chương trình đào tạo Cử nhân là bao nhiêu năm?":
        ["Không quá 04 năm."],
    'Quy đổi 1 TCHT học phần "Thực tập tốt nghiệp" hệ đại học chính quy tương ứng bằng bao nhiêu TCHP?':
        ["2,5 TCHP."],
    "Sinh viên có hành vi nộp chứng chỉ ngoại ngữ giả mạo để gian lận chuẩn đầu ra sẽ chịu mức xử lý kỷ luật nào?":
        ["Bị đình chỉ học tập hoặc buộc thôi học tùy mức độ nghiêm trọng."],
    "Sinh viên không nộp đủ học phí đúng thời hạn quy định sẽ bị xử lý như thế nào?":
        ["Bị đình chỉ đăng ký học tập một học kỳ kế tiếp."],
    "Mức điểm đạt đối với các học phần thuộc chương trình đào tạo cử nhân và kỹ sư (ngoại trừ học phần tốt nghiệp) là từ mức điểm chữ nào?":
        ["Từ điểm D trở lên."],
    "Thời gian điều chỉnh đăng ký học phần bổ sung vào các lớp học phần đã mở ở đầu học kỳ chính kéo dài trong bao lâu?":
        ["Kéo dài trong 2 tuần đầu."],
    "Mức học phí áp dụng đối với sinh viên quốc tế học các chương trình đào tạo bằng tiếng Anh được tính như thế nào?":
        ["Bằng 1,5 lần mức học phí quy định tương ứng."],
    'Khung điểm CPA quy đổi sang xếp loại học lực "Giỏi" theo Quy chế đào tạo là bao nhiêu?':
        ["3,20 đến 3,59."],
    "Thời gian Ban Công tác sinh viên thông báo công khai kế hoạch đăng ký xét Học bổng Trao đổi sinh viên tối thiểu là bao lâu để người học chuẩn bị?":
        ["Tối thiểu 02 tuần."],
    "Đối với sinh viên Nhóm 4 (gặp tai nạn, rủi ro đột xuất), Học bổng Trần Đại Nghĩa hỗ trợ các mức tiền mặt cố định là bao nhiêu?":
        ["5 triệu đồng và 10 triệu đồng."],
    "Mức học phí học lại học phần đối với Nghiên cứu sinh trình độ Tiến sĩ được quy định cụ thể là bao nhiêu?":
        ["850.000 đồng / TCHP."],
    "Chuẩn tiếng Anh đầu ra đối với sinh viên chương trình liên kết đào tạo với Đại học TROY (Hoa Kỳ) khi xét tốt nghiệp là gì?":
        ["Chứng chỉ IELTS Academic 6.0 trở lên (hoặc TOEFL iBT tương đương)."],
    "Mức học phí/1 TCHP của Chương trình đào tạo Kỹ sư chuyên sâu Trí tuệ nhân tạo tạo sinh (GenAI) được tính bằng mức học phí của chương trình cử nhân nào?":
        ["Chương trình Khoa học dữ liệu và Trí tuệ nhân tạo (IT-E10)."],
    "Thời gian hưởng Học bổng Chính phủ tối đa cho sinh viên thuộc chương trình đào tạo Kỹ sư (từ 150 tín chỉ trở lên) là bao nhiêu năm?":
        ["Không quá 05 năm."],
    "Sinh viên học cùng lúc hai chương trình đào tạo (bằng kép) cần lưu ý quy định gì về việc đăng ký tốt nghiệp?":
        ["Bắt buộc phải đăng ký tốt nghiệp đồng thời trong cùng một đợt cho cả hai CTĐT."],
    "Sinh viên được điều động vào lực lượng vũ trang nghỉ học tạm thời thì thời gian nghỉ được tính như thế nào?":
        ["Không tính vào thời gian học chậm tiến độ."],
    "Sinh viên phải đăng ký tối thiểu bao nhiêu tín chỉ trong học kỳ lấy điểm xét học bổng để không bị loại (trừ HK1 năm thứ nhất)?":
        ["Tối thiểu 12 tín chỉ."],
    "Sinh viên nghỉ học tạm thời phải nộp đơn đề nghị tiếp nhận trở lại học chậm nhất vào thời điểm nào?":
        ["Chậm nhất 01 tuần trước khi bắt đầu học kỳ mới."],
    "Số đợt xét tốt nghiệp đại học trong một năm theo Quy chế đào tạo 2025 được quy định là bao nhiêu đợt?":
        ["5 đợt."],
    'Khái niệm "Học phần học trước" khác với "Học phần tiên quyết" ở điểm cốt lõi nào?':
        ["Sinh viên chỉ cần đăng ký và học xong học phần A (có thể chưa đạt) là đã đủ điều kiện học học phần B."],
    "Mức điểm IELTS Academic đạt từ 8.5 đến 9.0 được Bảng 2.1 quy đổi tương đương Bậc mấy theo Khung 6 bậc?":
        ["Bậc 6 (CEFR C2)."],
    "Điều kiện học lực để sinh viên hết năm thứ nhất được xem xét chuyển sang học một chương trình đào tạo khác là gì?":
        ["CPA ≥ 2,5 (từ loại khá trở lên) và không bị cảnh báo học tập."],
    // Quy chế 2025.x
    "Đâu là một trong những trách nhiệm của sinh viên được quy định trong Quy chế?":
        [
            "Đóng học phí, bảo hiểm y tế và các khoản phí khác đầy đủ, đúng quy định.",
        ],
    "Sinh viên có quyền khiếu nại về kết quả đánh giá rèn luyện hoặc các hình thức khen thưởng, kỷ luật lên đâu?":
        ["Giám đốc Đại học (qua Ban Công tác sinh viên)."],
    "Nếu sinh viên không tham gia đánh giá điểm rèn luyện tại một học kỳ, kết quả rèn luyện của học kỳ đó sẽ bị xếp loại gì?":
        ["Kém."],
    "Theo số liệu khảo sát, tỷ lệ sinh viên tại ĐHBK Hà Nội bị cảnh báo học tập là khoảng bao nhiêu?":
        ["Khoảng 9%."],
    "Sinh viên bị xếp loại rèn luyện Yếu/Kém trong hai học kỳ liên tiếp sẽ phải đối mặt với hình thức xử lý nào?":
        ["Bị hạn chế đăng ký học tập tương đương cảnh báo học tập mức 2."],
    "Chương trình đào tạo (CTĐT) mới nào được giới thiệu trong Quy chế 2025, thuộc nhóm chương trình ELITECH?":
        ["Chương trình đào tạo Tài năng"],
    'Hành vi "Tổ chức đánh bạc" lần đầu sẽ bị xử lý như thế nào?': [
        "Buộc thôi học và chuyển cơ quan chức năng xử lý theo quy định của pháp luật.",
    ],
    "Cán bộ Quản lý lớp sinh viên (QLLSV) có thể là những ai?": [
        "Cán bộ giảng dạy, cán bộ hành chính hoặc cán bộ kỹ thuật đang công tác tại đơn vị quản ngành.",
    ],
    "Quy định nào về cấu trúc học kỳ chính đã được loại bỏ trong Quy chế 2025?":
        ["Một học kỳ chính có thể được chia thành 2 đợt A và B"],
    "Sinh viên đã nhận học bổng KKHT trong một học kỳ có được xét cấp học bổng Trần Đại Nghĩa trong cùng học kỳ đó không?":
        [
            "Không, sinh viên đã nhận học bổng KKHT sẽ không được xét cấp học bổng Trần Đại Nghĩa",
        ],
    'Tham gia "Sinh hoạt công dân" do nhà trường tổ chức sẽ được ghi nhận bao nhiêu điểm rèn luyện?':
        ["7 điểm"],
    "Vào năm 1967, Chính phủ đã quyết định tách hai khoa nào từ Trường Đại học Bách khoa Hà Nội để thành lập các trường đại học riêng?":
        ["Khoa Xây dựng và Khoa Mỏ - Địa chất"],
    "Mục đích chính của Học bổng Trần Đại Nghĩa là gì?": [
        "Hỗ trợ sinh viên có hoàn cảnh kinh tế đặc biệt khó khăn và có kết quả học tập, rèn luyện tốt",
    ],
    "Việc tham gia khóa đào tạo kỹ năng nghề nghiệp, kỹ năng bổ trợ chuyên môn được cộng tối đa bao nhiêu điểm?":
        ["6 điểm"],
    "Theo thang điểm 100, sinh viên đạt từ 80 đến dưới 90 điểm rèn luyện sẽ được xếp loại gì?":
        ["Tốt"],
    "Việc tham gia hiến máu nhân đạo do Đại học và các tổ chức hợp pháp phát động được cộng bao nhiêu điểm?":
        ["6 điểm"],
    "Tổ tư vấn và hỗ trợ sinh viên, nơi giúp sinh viên giải quyết các khó khăn về học tập và tâm lý, là một bộ phận trực thuộc đơn vị nào?":
        ["Ban Công tác sinh viên"],
    "Quyền lợi nào sau đây KHÔNG phải của Cố vấn học tập?": [
        "Được quyết định miễn giảm các khoản phí cho sinh viên có hoàn cảnh khó khăn",
    ],
    "Quy định nào về việc buộc thôi học do không nộp học phí đã bị loại bỏ trong Quy chế 2025?":
        [
            "Buộc thôi học nếu bị đình chỉ lần thứ 2 liên tiếp do không nộp học phí",
        ],
    "Học phí của lớp học phần rút gọn được tính như thế nào?": [
        "Bằng 50% so với lớp học phần bình thường",
    ],
    'Thay đổi quan trọng nhất tại Điều 17 về "Chuyển chương trình đào tạo" là gì?':
        [
            'Bỏ quy định "Không cho phép chuyển CTĐT đối với sinh viên đã học từ năm thứ hai trở đi"',
        ],
    "Theo Quy chế, vị trí của sinh viên trong Đại học Bách khoa Hà Nội là gì?":
        [
            "Là trung tâm các hoạt động giáo dục, đào tạo, nghiên cứu khoa học, đổi mới sáng tạo và khởi nghiệp.",
        ],
    'Theo khảo sát, nhóm học phần nào được nhiều sinh viên đánh giá là "trở ngại" trong năm học đầu tiên?':
        ["Giải tích 1, Đại số, Triết học."],
    "Đâu là Cổng thông tin việc làm trực tuyến chính thức của Đại học Bách khoa Hà Nội, nơi kết nối sinh viên với các nhà tuyển dụng?":
        ["work.hust.edu.vn"],
    "Thời gian trả lời khiếu nại của sinh viên về kết quả đánh giá rèn luyện không được quá bao nhiêu ngày kể từ ngày nhận đơn?":
        ["7 ngày"],
    "Trường Đại học Bách khoa Hà Nội được thành lập theo nghị định 147/NĐ vào ngày tháng năm nào?":
        ["06/03/1956"],
    "Đâu là một trong các nội dung đánh giá kết quả rèn luyện của sinh viên?": [
        "Phẩm chất công dân, trách nhiệm và quan hệ với cộng đồng.",
    ],
    "Khi có khiếu nại về kết quả rèn luyện, sinh viên có khoảng thời gian khiếu nại tối thiểu là bao nhiêu ngày?":
        ["15 ngày"],
    "Khi cần trao đổi hoặc phản ánh công việc với giáo viên, cán bộ hay các đơn vị trong Trường, sinh viên phải sử dụng loại email nào?":
        ["Email do Đại học BKHN cấp."],
    'Kết quả rèn luyện của sinh viên được phân loại "Xuất sắc" khi đạt mức điểm nào?':
        ["Từ 90 đến 100 điểm."],
    "Công cụ nào được sử dụng để hỗ trợ thực hiện quy trình đánh giá kết quả rèn luyện cho sinh viên?":
        ["Hệ thống sổ tay công tác sinh viên trực tuyến (iCTSV)."],
    'Theo Quy chế đào tạo 2025, đối tượng áp dụng nào được bổ sung rõ ràng vào định nghĩa "người học"?':
        ["Nghiên cứu sinh (NCS)"],
    'Hình thức kỷ luật "Khiển trách" áp dụng đối với trường hợp nào?': [
        "Sinh viên có hành vi vi phạm lần đầu nhưng ở mức độ nhẹ.",
    ],
    "Mức học bổng KKHT loại Giỏi bằng bao nhiêu lần mức học bổng loại Khá?": [
        "1.2 lần",
    ],
    "Triết lý cốt lõi mà mỗi người Bách khoa cần mang theo suốt đời là gì?": [
        '"Trách nhiệm với Đất nước – Cam kết với Cộng đồng"',
    ],
    "Đâu là một trong những hành động được khuyên để nhận diện và phòng tránh lừa đảo tài chính?":
        [
            "Không cung cấp thông tin cá nhân khi chưa xác định chính xác website, ứng dụng và danh tính tư vấn viên.",
        ],
    "Điều kiện để sinh viên được giao đề tài Đồ án/Khóa luận tốt nghiệp (ĐATN) theo Quy chế 2025 là gì?":
        ["Đảm bảo các điều kiện về học phần học trước, tiên quyết, song hành"],
    "Theo Quy chế 2025, hai học phần được coi là tương đương khi có nội dung chuyên môn trùng lặp ở mức nào?":
        ["Tối thiểu 70%"],
    'Tổ tư vấn tâm lý sinh viên, tiền thân của "Điểm tựa yêu thương", được thành lập chính thức vào ngày tháng năm nào?':
        ["26/03/2019"],
    '"Học phần tiên quyết" được định nghĩa như thế nào trong Quy chế 2025?': [
        "Phải hoàn thành học phần A (với mức điểm đạt) mới được dự lớp học phần B",
    ],
    "Thông điệp chính mà Giám đốc Đại học Bách khoa Hà Nội gửi đến sinh viên trong năm học 2025-2026 là gì?":
        ['"Sinh viên Bách khoa sẵn sàng tiến vào kỷ nguyên mới"'],
    "Trong lời kêu gọi gửi đến sinh viên, Giám đốc nhấn mạnh điều gì là nền tảng cho tinh thần sáng tạo và học tập hiệu quả?":
        ["Giữ gìn sức khỏe thể chất"],
    "Theo Quy chế, hành vi nào bị cấm trong khuôn viên Đại học?": [
        "Hút thuốc, uống rượu, bia trong khuôn viên Đại học.",
    ],
    "Quy chế này áp dụng cho đối tượng nào tại Đại học Bách khoa Hà Nội?": [
        "Sinh viên đại học hệ chính quy văn bằng thứ nhất.",
    ],
    "Quy định về công tác CVHT và QLLSV được áp dụng cho đối tượng nào tại ĐHBK Hà Nội?":
        ["Sinh viên hệ đại học chính quy văn bằng thứ nhất."],
    '"BKHUP Coworking Space" được thành lập với mục đích chính là gì?': [
        "Là nơi làm việc, gặp gỡ, kết nối cho các nhóm nghiên cứu trẻ, nhà sáng chế, nhà đầu tư và doanh nghiệp.",
    ],
    "Sinh viên có hành vi uống rượu, bia trong giờ học lần thứ ba sẽ bị xử lý kỷ luật như thế nào?":
        ["Đình chỉ học tập 1 học kỳ."],
    "Hành vi nào sau đây bị nghiêm cấm nhằm bảo vệ cơ sở vật chất và môi trường của Nhà trường?":
        [
            "Tự ý viết vẽ, dán lên tường, bàn ghế trong phòng học, phòng ở ký túc xá và các khu vực khác.",
        ],
    "Theo quy trình, ai là người chấm điểm rèn luyện cho sinh viên dựa trên kết quả tự đánh giá và minh chứng?":
        ["Giảng viên quản lý lớp sinh viên."],
    "Khi cần giải quyết các vấn đề liên quan đến chương trình đào tạo, đăng ký học phần, lịch thi, sinh viên cần liên hệ với đơn vị nào?":
        ["Ban Đào tạo"],
    "Theo quy định, Cố vấn học tập (CVHT) phải đáp ứng tiêu chuẩn nào sau đây?":
        [
            "Là giảng viên đang công tác tại đơn vị quản ngành, có chuyên môn cao, kinh nghiệm giảng dạy và nắm vững quy chế đào tạo.",
        ],
    "Ban nào có chức năng thực hiện chiến lược truyền thông tuyển sinh và tư vấn hướng nghiệp cho học sinh phổ thông?":
        ["Ban Tuyển sinh – Hướng nghiệp"],
    'Một trong những "Tip" được gợi ý để làm tốt vai trò CVHT và QLLSV là gì?':
        [
            "Chủ động lập kênh thông tin online (Zalo, Teams) với lớp và có lịch làm việc riêng với sinh viên học tập kém",
        ],
    "Đơn vị nào chịu trách nhiệm chính trong việc giám sát chung và đánh giá hiệu quả thực hiện công tác CVHT và QLLSV của các đơn vị trong toàn Đại học?":
        ["Ban Công tác sinh viên."],
    "Số tín chỉ tối đa mà sinh viên không thuộc diện cảnh báo học tập được đăng ký trong một học kỳ chính là bao nhiêu?":
        ["24 TC"],
    "Theo quy tắc ứng xử trên mạng xã hội, sinh viên không được đăng tải hay tham gia bình luận về những nội dung nào sau đây?":
        [
            "Các thông tin, hình ảnh ảnh hưởng xấu đến uy tín của Nhà trường.",
            "Các lời lẽ tục tĩu, chửi bậy hoặc kích động tập thể.",
            "Phàn nàn về chính sách, cá nhân với thái độ không xây dựng.",
        ],
    "Quy chế 2025 quy định có bao nhiêu đợt xét tốt nghiệp đại học trong một năm?":
        ["3 đợt"],
    "Học bổng Gắn kết quê hương có giá trị là bao nhiêu cho mỗi Đồ án tốt nghiệp được xét cấp?":
        ["5 triệu đồng"],
    "Nếu GPA kỳ đánh giá cao hơn kỳ trước, sinh viên sẽ được cộng thêm bao nhiêu điểm cho sự nỗ lực trong học tập?":
        ["8 điểm"],
    "Sinh viên xin nghỉ học tạm thời vì lý do cá nhân (không phải ốm đau, tai nạn, quân sự) sẽ bị xét buộc thôi học nếu nghỉ quá bao nhiêu học kỳ chính?":
        ["4 học kỳ chính"],
    "CVHT có quyền nào sau đây để hỗ trợ sinh viên?": [
        "Đề nghị các đơn vị chức năng hỗ trợ giải quyết kịp thời các khó khăn của người học.",
    ],
    "Theo Quy chế 2025, việc hạn chế khối lượng học tập đối với sinh viên bị cảnh báo học tập được áp dụng khi nào?":
        ["Từ mức cảnh báo 2 trở lên và chỉ áp dụng tại học kỳ 1 của năm học"],
    "Một trong những giải pháp được đề xuất đối với sinh viên thuộc diện cảnh báo học tập là gì?":
        ["Việc đăng ký học tập cần có sự phối hợp với cố vấn học tập."],
    'Tổng điểm tối đa cho tiêu chí "Điểm tham gia hoạt động chính trị, xã hội, văn hoá, thể thao" (TC3) là bao nhiêu?':
        ["20 điểm"],
    "Ủy viên thường trực của Hội đồng khen thưởng và Hội đồng kỷ luật sinh viên là ai?":
        ["Trưởng ban Ban Công tác sinh viên."],
    "Bác Hồ đã về thăm Trường Đại học Bách khoa Hà Nội bao nhiêu lần?": [
        "3 lần",
    ],
    "Khi học cùng lúc hai chương trình, các học phần chung giữa hai CTĐT sẽ được xử lý như thế nào cho CTĐT thứ hai?":
        ["Được công nhận và tính điểm cho cả CTĐT thứ hai"],
    "Mức trừ điểm nặng nhất (-50 điểm) áp dụng cho hành vi vi phạm nào?": [
        "Vi phạm pháp luật thuộc nhóm tội danh hình sự.",
    ],
    "Đối với sinh viên bị kỷ luật cảnh cáo, quyết định kỷ luật sẽ chấm dứt hiệu lực sau bao lâu nếu không tái phạm?":
        ["12 tháng."],
    'Theo Quy chế 2025, định nghĩa "Nghỉ học tạm thời" là việc nghỉ học có hiệu lực từ bao lâu?':
        ["Từ 01 học kỳ trở lên"],
    'Đạt danh hiệu "Sinh viên 5 tốt" từ cấp Đại học trở lên sẽ được ghi nhận bao nhiêu điểm?':
        ["4 điểm"],
    "Chức năng chính của Ban Công tác sinh viên là gì?": [
        "Quản lý, tư vấn và hỗ trợ người học, tổ chức các hoạt động xã hội",
    ],
    "Điểm chữ đặc biệt nào đã bị loại bỏ trong Quy chế 2025?": [
        "Điểm K (điểm học phần khi nghỉ học tạm thời)",
    ],
    'Mức điểm tối đa cho tiêu chí "Điểm học tập" (TC1) trong khung đánh giá là bao nhiêu?':
        ["30 điểm"],
    'Tổng điểm tối đa cho tiêu chí "Điểm ý thức công dân trong quan hệ cộng đồng" (TC4) là bao nhiêu?':
        ["25 điểm"],
    'Sinh viên "Hiểu biết và chấp hành pháp luật của Nhà nước, quy định của nhà trường và nơi cư trú" sẽ được cộng bao nhiêu điểm?':
        ["8 điểm"],
    "Một trong các tiêu chí quan trọng để đánh giá hoạt động CVHT và QLLSV của đơn vị quản ngành là gì?":
        ["Mức độ hài lòng của sinh viên đối với công tác này."],
    "Nội dung xử lý vi phạm đối với sinh viên trong Quy chế 2025 (Điều 20) có thay đổi lớn nào so với phiên bản 2023?":
        [
            "Chuyển các quy định chi tiết sang một văn bản riêng (Quy chế công tác sinh viên)",
        ],
    "Ban Khoa học & Công nghệ có nhiệm vụ chính là gì?": [
        "Quản lý, hỗ trợ các đơn vị và cá nhân trong hoạt động nghiên cứu và đổi mới sáng tạo",
    ],
    "Quy định về trang phục khi đến trường của sinh viên Bách khoa là gì?": [
        "Mặc trang phục giản dị, kín đáo, gọn gàng, lịch sự, phù hợp với môi trường học đường.",
    ],
    "Học bổng Trần Đại Nghĩa có mấy mức và giá trị của các mức đó là bao nhiêu?":
        ["2 mức, tương ứng 50% và 100% học phí"],
    "Sinh viên có điểm CPA từ bao nhiêu trở lên có thể đề nghị xét chuyển vào CTĐT Tài năng sau khi kết thúc năm thứ hai?":
        ["3.2"],
    'Theo các nguồn tài liệu, ngoài việc tư vấn cho sinh viên, "Điểm tựa yêu thương" còn hướng đến đối tượng nào sau đây?':
        ["Phụ huynh và những người có liên quan"],
    "Điều kiện tối thiểu để sinh viên được xét cấp Học bổng Trao đổi sinh viên là gì?":
        ["Từ năm thứ 3, CPA ≥ 3.2, ĐRL tích lũy ≥ 80"],
    "Quỹ đầu tư mạo hiểm BKFund được xây dựng từ nguồn lực nào và có sứ mệnh chính là gì?":
        [
            "Từ mạng lưới Cựu sinh viên, nhằm đầu tư, ươm tạo các startup của cán bộ, sinh viên, cựu sinh viên.",
        ],
    "Sinh viên thuộc diện được vay vốn tại Ngân hàng chính sách có thể nhận được định mức vay tối đa là bao nhiêu?":
        ["4.000.000đ/sinh viên/tháng."],
    "Điểm đạt tối thiểu đối với học phần tốt nghiệp (Đồ án/Khóa luận tốt nghiệp Cử nhân) là điểm nào?":
        ["Điểm D+"],
    "Sinh viên tham gia hỗ trợ công tác CVHT cần đáp ứng tiêu chuẩn nào?": [
        "Là sinh viên từ năm thứ 3 trở đi, có kết quả học tập và rèn luyện từ loại giỏi trở lên.",
    ],
    "Cán bộ QLLSV có nhiệm vụ liên hệ với gia đình sinh viên trong trường hợp nào?":
        [
            "Khi sinh viên bị cảnh báo học tập, bị xử lý kỷ luật, đình chỉ hoặc buộc thôi học.",
        ],
    "Hồ sơ quản lý quá trình học tập, rèn luyện của sinh viên KHÔNG bao gồm nội dung nào sau đây?":
        ["Thông tin tài chính cá nhân của gia đình sinh viên."],
    "Theo Quy chế 2025, người học có được thi lại cuối kỳ cho các học phần bị điểm F không?":
        ["Không có lần thi lại đối với tất cả các hình thức đào tạo"],
    "Điểm rèn luyện toàn khóa của sinh viên được tính như thế nào?": [
        "Là trung bình cộng của điểm rèn luyện của tối thiểu 07 học kỳ.",
    ],
    "Nguyên tắc cốt lõi nào trong quản lý ngân sách được nhấn mạnh cho sinh viên?":
        [
            "Luôn giữ cho chi tiêu nhỏ hơn thu nhập và tiết kiệm trước khi chi tiêu.",
        ],
    "Trường hợp nào sau đây sinh viên sẽ KHÔNG được xét cấp học bổng KKHT?": [
        "Đăng ký học 5 tín chỉ tại học kỳ cấp học bổng",
    ],
    "Theo Bộ Quy tắc ứng xử, hành vi nào sau đây sinh viên không được phép thực hiện trong giờ học khi chưa có sự đồng ý của giáo viên?":
        ["Ghi âm, ghi hình, chụp ảnh."],
    "Nội dung giáo dục pháp luật đối với sinh viên tập trung vào các vấn đề nào?":
        [
            "Các quy chế về học tập và rèn luyện; pháp luật về phòng chống tội phạm, tệ nạn xã hội; Luật an ninh mạng; đảm bảo trật tự an toàn giao thông.",
        ],
    "Sinh viên có hành vi đánh bạc lần thứ ba sẽ bị xử lý theo hình thức nào?":
        ["Buộc thôi học."],
    "Hành vi nào sau đây sinh viên KHÔNG được làm?": [
        "Gian lận trong học tập, kiểm tra, thi cử như quay cóp, mang tài liệu không được phép vào phòng thi.",
    ],
    "Theo Giám đốc, đâu KHÔNG phải là một trong bốn giá trị cốt lõi của người Bách khoa?":
        ["Kỷ luật"],
    "Yếu tố nào dùng để giới hạn số tín chỉ đăng ký của sinh viên đã bị loại bỏ trong Quy chế 2025?":
        ["Tình trạng chưa đạt chuẩn ngoại ngữ theo trình độ năm học"],
    "Khi nào sinh viên bị nâng hai mức cảnh báo học tập trong một học kỳ?": [
        "Khi có số TC không đạt trong học kỳ lớn hơn 16 hoặc tự ý bỏ học",
    ],
    "Theo Bộ Quy tắc ứng xử, sinh viên nên có thái độ như thế nào khi bạn bè có quan điểm hoặc lối sống khác biệt?":
        ["Biết lắng nghe và tôn trọng sự khác biệt của nhau."],
    "Sinh viên có ý tưởng về khởi nghiệp và đổi mới sáng tạo có thể tìm kiếm sự hỗ trợ từ đơn vị nào?":
        ["Trung tâm Sáng tạo & Khởi nghiệp sinh viên"],
    "Quy định đánh giá kết quả rèn luyện của sinh viên Đại học Bách khoa Hà Nội áp dụng cho đối tượng nào?":
        [
            "Sinh viên đại học hình thức đào tạo chính quy, không bao gồm lưu học sinh nước ngoài.",
        ],
    "Theo Khung đánh giá năm học 2024-2025, sinh viên có điểm GPA 3.5 sẽ được bao nhiêu điểm rèn luyện ở mục kết quả học tập?":
        ["18 điểm"],
    "Đơn vị nào chịu trách nhiệm cung cấp kết quả điểm học tập và danh sách cảnh báo học tập cho Ban Công tác Sinh viên?":
        ["Ban Đào tạo."],
    "Sinh viên hỗ trợ công tác CVHT được hưởng quyền lợi nào sau đây?": [
        "Được cộng điểm rèn luyện vào cuối học kỳ nếu hoàn thành nhiệm vụ.",
    ],
    "Đơn vị nào chịu trách nhiệm quản lý, vận hành và khai thác cơ sở vật chất, hạ tầng công nghệ thông tin và cảnh quan của Đại học?":
        ["Ban Cơ sở vật chất"],
    "Yêu cầu trọng tâm đối với công tác CVHT và QLLSV là gì?": [
        "Tạo động lực học tập tích cực cho sinh viên.",
    ],
    "Để đạt được Học bổng Khuyến khích học tập (KKHT) loại Xuất sắc, sinh viên cần đáp ứng điều kiện nào?":
        ["GPA ≥ 3.6 và Điểm rèn luyện học kỳ ≥ 90 điểm "],
    "Đại học Bách khoa Hà Nội đã được Nhà nước trao tặng Huân chương Hồ Chí Minh tổng cộng bao nhiêu lần?":
        ["2 lần"],
    'Hình thức kỷ luật "Buộc thôi học" được áp dụng trong trường hợp nào?': [
        "Sinh viên đang trong thời gian bị đình chỉ học tập mà vẫn tiếp tục vi phạm kỷ luật hoặc vi phạm lần đầu nhưng có tính chất và mức độ đặc biệt nghiêm trọng.",
    ],
    "Một sinh viên đang bị cảnh báo học tập mức 3 sẽ được hạ xuống mức 2 nếu đáp ứng điều kiện nào?":
        ["Có số TC nợ đọng từ đầu khóa nhỏ hơn hoặc bằng 24"],
    "Đâu KHÔNG phải là nhiệm vụ của một Cố vấn học tập (CVHT)?": [
        "Chủ trì họp lớp đánh giá kết quả rèn luyện của sinh viên.",
    ],
    "Theo Thông tư 10/2016/TT-BGDĐT, vai trò của CVHT và QLLSV là gì?": [
        "Là cầu nối giữa Sinh viên với Nhà trường và gia đình.",
    ],
    "Kết quả đánh giá rèn luyện của sinh viên được sử dụng vào mục đích nào sau đây?":
        [
            "Xét duyệt học bổng, xét khen thưởng, xét tham gia các hoạt động giao lưu, trao đổi sinh viên quốc tế.",
        ],
    "Sinh viên học cùng lúc hai chương trình phải đăng ký tốt nghiệp như thế nào?":
        ["Phải đăng ký tốt nghiệp cùng đợt cho cả hai CTĐT"],
    "Sinh viên bị buộc thôi học trong trường hợp nào sau đây?": [
        "Bị cảnh báo học tập mức 3 lần thứ hai liên tiếp",
    ],
    "Kết quả đánh giá rèn luyện của sinh viên được công bố công khai bao lâu trước khi ban hành quyết định chính thức?":
        ["14 ngày"],
    "Sinh viên nào được tặng danh hiệu “Sinh viên tốt nghiệp thủ khoa”?": [
        "Sinh viên đạt danh hiệu “Sinh viên tốt nghiệp xuất sắc” có kết quả học tập toàn khóa cao nhất của đơn vị quản ngành và không có học phần không đạt.",
    ],
    "Nhiệm vụ nào sau đây thuộc về cán bộ QLLSV?": [
        "Kịp thời báo cáo lãnh đạo đơn vị về các sinh viên có kết quả học tập và rèn luyện yếu, kém.",
    ],
    "Theo nguyên tắc quản lý chi tiêu hiệu quả được đề cập trong tài liệu, sinh viên nên phân bổ thu nhập của mình theo tỷ lệ nào?":
        ["50% cho chi tiêu thiết yếu, 30% cho hưởng thụ, 20% cho tiết kiệm."],
    "Nhà trường đã đưa ra những cam kết nào để đồng hành cùng sinh viên trong năm học mới?":
        [
            "Đổi mới chương trình đào tạo, nâng cấp cơ sở vật chất, mở rộng hợp tác quốc tế",
        ],
    "Đại học Bách khoa Hà Nội đã vinh dự được Nhà nước trao tặng danh hiệu Anh hùng lao động trong thời kỳ đổi mới vào thời gian nào?":
        ["Tháng 8/2000"],
    "Một cán bộ lớp hoàn thành xuất sắc nhiệm vụ được tập thể công nhận sẽ được cộng bao nhiêu điểm?":
        ["6 điểm"],
    "Sinh viên không bị cấm thi của tất cả các học phần trong kỳ học sẽ được cộng bao nhiêu điểm?":
        ["6 điểm"],
    "Nếu người hướng dẫn hoặc người phản biện cho điểm ĐATN dưới 5, sinh viên sẽ bị xử lý như thế nào?":
        [
            "Không được phép tham gia bảo vệ và điểm bảo vệ tại hội đồng là 0 điểm",
        ],
    "Hành vi nào sau đây bị nghiêm cấm trong ứng xử với bạn bè, đặc biệt trên không gian mạng?":
        ["Sử dụng mạng xã hội để nói xấu, bôi nhọ hoặc kích động hận thù."],
    "Theo sổ tay sinh viên 2025, sinh viên nên xây dựng một quỹ dự phòng với số tiền tối thiểu tương đương bao nhiêu tháng chi tiêu thiết yếu để sử dụng cho các trường hợp khẩn cấp như ốm đau, tai nạn?":
        ["3 tháng."],
    "Trong trường hợp nào sinh viên có thể đề nghị rút học phần mà không phải đóng học phí cho học phần đó?":
        ["Rút học phần trong 7 tuần đầu của học kỳ chính bất kỳ"],
    "Sinh viên vi phạm quy chế thi từ mức cảnh cáo trở lên sẽ bị trừ bao nhiêu điểm?":
        ["-10 điểm"],
    "Quy chế 2025 quy định điểm liệt đối với các học phần thông thường (không phải đồ án/khóa luận tốt nghiệp) là bao nhiêu?":
        ["Dưới 3 điểm"],
    "Đâu là một trong những sứ mệnh chính của Tổ tư vấn và hỗ trợ sinh viên?": [
        "Hỗ trợ sinh viên gặp khó khăn về học tập và tâm lý, cải thiện phương pháp học và kỹ năng sống.",
    ],
    'Việc tham gia chiến dịch tình nguyện "mùa hè xanh" được cộng bao nhiêu điểm?':
        ["6 điểm"],
    "Đại diện cho lớp sinh viên là ai?": [
        "Ban cán sự lớp gồm lớp trưởng và tối đa 2 lớp phó.",
    ],
    'Một trong những điều kiện để được xem xét mở "lớp học phần rút gọn" là gì?':
        ["Sinh viên đã học học phần đó ít nhất 02 lần nhưng chưa đạt"],
    "Trường hợp nào sinh viên không được xét khen thưởng?": [
        "Sinh viên đang trong thời gian xem xét kỷ luật hoặc đang trong thời gian thi hành kỷ luật.",
    ],
    "Đối với sinh viên bị kỷ luật khiển trách, quyết định kỷ luật sẽ chấm dứt hiệu lực sau bao lâu nếu không tái phạm?":
        ["3 tháng."],
    "Hình thức tư vấn nào sau đây KHÔNG được liệt kê trong các chương trình của Tổ tư vấn và hỗ trợ sinh viên?":
        ["Tư vấn: Khởi nghiệp và đầu tư mạo hiểm"],
    "Đơn vị nào là đầu mối, chủ trì hoạt động đánh giá kết quả rèn luyện cho sinh viên?":
        ["Ban Công tác Sinh viên"],
    "Đâu là một trong những khó khăn mà cán bộ làm công tác CVHT và QLLSV thường gặp phải?":
        ["Hạn chế về mặt thời gian do đây là công tác kiêm nhiệm."],
    "Khối lượng học tập tối thiểu đối với chương trình Tiến sĩ (dành cho người đã tốt nghiệp Thạc sĩ) theo Quy chế 2025 là bao nhiêu?":
        ["106 tín chỉ"],
    "Đơn vị quản ngành cần thành lập bộ phận nào để tổ chức và điều phối hoạt động tư vấn cho người học?":
        ["Ban Cố vấn học tập."],
    'Mức điểm tối đa cho tiêu chí "Điểm về ý thức tổ chức kỷ luật" (TC2) là bao nhiêu?':
        ["25 điểm"],
    "Sinh viên đạt chứng chỉ ngoại ngữ tương đương TOEIC 600 điểm trở lên sẽ được cộng bao nhiêu điểm rèn luyện?":
        ["2 điểm"],
    "Theo Phụ lục về khung xử lý kỷ luật, hành vi nhờ người khác vào phòng thi để thi thay hoặc vào phòng thi thay người khác lần đầu sẽ bị xử lý như thế nào?":
        ["Buộc thôi học."],
    "Danh hiệu “Sinh viên xuất sắc năm học” được tặng cho sinh viên đáp ứng điều kiện nào?":
        [
            "Đồng thời có kết quả học tập và kết quả rèn luyện trung bình năm học đạt loại xuất sắc.",
        ],
    "Sinh viên được hưởng quyền lợi nào sau đây theo Quy chế?": [
        "Được sử dụng học liệu, thiết bị và phương tiện phục vụ học tập, nghiên cứu khoa học theo quy định.",
    ],
    "Hành vi thi hộ sẽ bị trừ bao nhiêu điểm rèn luyện?": ["-20 điểm"],
    'Sinh viên có nhu cầu tư vấn trực tiếp có thể tìm đến Tổ tư vấn và hỗ trợ sinh viên ("Điểm tựa yêu thương") tại địa chỉ nào?':
        ["Phòng 101 - Nhà C1"],

    // Đáp án pháp luật 2025.1
    "Theo Luật Giáo dục Đại học 2018, trách nhiệm nào sau đây là bắt buộc đối với sinh viên?":
        [
            "Tôn trọng giảng viên, cán bộ và các sinh viên khác",
            "Được cung cấp đầy đủ thông tin về chương trình đào tạo và quy chế học tập",
        ],
    "Hành vi xúc phạm danh dự giảng viên có thể dẫn đến hậu quả gì?": [
        "Kỷ luật từ cảnh cáo đến buộc thôi học",
    ],
    "Sinh viên bị mất xe máy trong bãi giữ xe của trường, ai chịu trách nhiệm?":
        ["Nhà trường, nếu có hợp đồng gửi xe"],
    "Sinh viên có quyền chuyển trường trong trường hợp nào?": [
        "Đáp ứng điều kiện theo quy định của trường",
    ],
    "Vi phạm quyền sở hữu trí tuệ trong nghiên cứu (như sử dụng dữ liệu trái phép) có thể dẫn đến hậu quả gì đối với sinh viên?":
        ["Bị xử phạt dân sự, hành chính hoặc hình sự tùy mức độ"],
    "Sinh viên có quyền gì khi phát hiện tài khoản giả mạo mình trên mạng?": [
        "Yêu cầu xóa tài khoản giả mạo",
    ],
    "Sinh viên tổ chức đua xe trái phép có thể bị phạt tù tối đa bao lâu?": [
        "7 năm",
    ],
    "Sinh viên lái xe máy không đội mũ bảo hiểm và gây tai nạn có thể bị xử lý theo tội gì?":
        ["Tội vi phạm quy định về giao thông (Điều 261)"],
    "Sinh viên ký hợp đồng mua điện thoại trả góp nhưng không trả được nợ thì sao?":
        ["Phải chịu trách nhiệm dân sự theo hợp đồng"],
    "Sinh viên sử dụng giấy tờ giả để vay tiền có thể bị xử lý theo tội gì?": [
        "Tội làm giả con dấu, tài liệu (Điều 341)",
    ],
    "Hành vi nào sau đây không bị cấm theo Luật An ninh mạng?": [
        "Chia sẻ tài liệu học tập trên Google Drive",
    ],
    "Sinh viên vay tiền ngân hàng để đóng học phí phải chịu lãi suất tối đa bao nhiêu?":
        ["Theo thỏa thuận, nhưng không vượt quá mức luật định"],
    "Sinh viên có thể bị đình chỉ học tập tối đa bao lâu?": ["Vô thời hạn"],
    "Theo Bộ luật Dân sự 2015, quyền nào sau đây thuộc về quyền nhân thân của sinh viên?":
        ["Quyền được bảo vệ danh dự, nhân phẩm"],
    "Hợp đồng thuê nhà trọ giữa sinh viên và chủ nhà có thể chấm dứt khi nào?":
        ["Khi hết thời hạn hợp đồng hoặc theo thỏa thuận"],
    "Theo Luật Phòng, chống tham nhũng 2018, mục tiêu chính của luật là gì?": [
        "Phòng ngừa, phát hiện, xử lý tham nhũng và các hành vi vi phạm pháp luật về phòng, chống tham nhũng",
    ],
    "Sinh viên bị bạn cùng phòng xúc phạm danh dự trên mạng xã hội có quyền gì?":
        ["Yêu cầu bồi thường thiệt hại về tinh thần"],
    "Sinh viên photocopy toàn bộ sách giáo khoa để sử dụng trong học tập có vi phạm Luật Sở hữu trí tuệ không?":
        ["Có vi phạm quyền tác giả nếu không được phép của chủ sở hữu"],
    "Sinh viên tàng trữ một lượng nhỏ ma túy để sử dụng cá nhân có thể bị phạt tù tối đa bao lâu?":
        ["B. 5 năm"],
    // "Ai có quyền quyết định thành lập trường đại học công lập?": [
    //   "Được tôn trọng và bảo vệ danh dự, nhân phẩm"
    // ],
    "Sinh viên ký hợp đồng thuê nhà trọ phải tuân theo hình thức nào?": [
        "Có thể bằng văn bản hoặc lời nói, trừ trường hợp pháp luật yêu cầu công chứng",
    ],
    "Nếu sinh viên vay tiền bạn nhưng không trả đúng hạn, hậu quả pháp lý là gì?":
        ["Phải trả lãi suất theo thỏa thuận hoặc luật định"],
    "Sinh viên uống rượu bia và gây rối ở ký túc xá có thể bị xử lý theo tội gì?":
        ["Tội gây rối trật tự công cộng (Điều 318)"],
    "Sinh viên tốt nghiệp được cấp bằng theo hình thức nào?": [
        "Theo quy định của Bộ Giáo dục và Đào tạo",
    ],
    "Luật An ninh quốc gia 2004 quy định quyền nào của sinh viên khi phát hiện hành vi xâm phạm an ninh quốc gia?":
        ["Báo cáo cho cơ quan chức năng và được bảo vệ danh tính"],
    "Trong nghiên cứu đại học, sáng chế từ đề tài nghiên cứu của sinh viên thuộc quyền sở hữu của ai?":
        ["Thuộc về tổ chức (trường đại học) nếu sử dụng tài nguyên trường"],
    "Theo Luật An ninh mạng, ai có trách nhiệm bảo vệ thông tin cá nhân của sinh viên?":
        ["Nhà cung cấp dịch vụ và sinh viên"],
    "Sinh viên có trách nhiệm gì khi sử dụng mạng xã hội?": [
        "Bảo vệ thông tin cá nhân của mình và người khác",
    ],
    "Sinh viên dưới 18 tuổi sử dụng ma túy trái phép có thể bị xử lý như thế nào?":
        ["Xử lý nhẹ hơn theo quy định cho người dưới 18 tuổi"],
    "Nghĩa vụ nào sau đây là bắt buộc đối với sinh viên?": [
        "Tuân thủ nội quy, quy chế của cơ sở giáo dục",
    ],
    "Luật Giáo dục Đại học quy định gì về nghiên cứu khoa học?": [
        "Là quyền nhưng không bắt buộc đối với sinh viên",
    ],
    "Sinh viên cố ý làm hỏng tài sản của trường (như đập phá bàn ghế) có thể bị xử lý theo tội gì?":
        ["Tội hủy hoại tài sản (Điều 178)"],
    "Sinh viên tải ứng dụng học tập từ nguồn không rõ ràng có nguy cơ gì?": [
        "Bị nhiễm mã độc, vi phạm Luật An ninh mạng",
    ],
    "Sinh viên có thể ủy quyền cho người khác làm gì?": [
        "Thay mặt nộp học phí",
    ],
    "Theo Luật Quốc phòng 2018, trong tình trạng khẩn cấp về quốc phòng, sinh viên có trách nhiệm gì?":
        ["Tham gia bảo vệ Tổ quốc theo lệnh huy động"],
    "Hợp đồng thuê phòng trọ của sinh viên bị vô hiệu khi nào?": [
        "Khi sinh viên chưa đủ 18 tuổi và không có giám hộ đồng ý",
    ],
    "Hành vi nào sau đây của sinh viên bị cấm theo Luật Phòng, chống ma túy?": [
        "Tàng trữ một lượng nhỏ ma túy trong ký túc xá",
    ],
    "Hành vi nào của sinh viên có thể bị xử phạt theo Luật An ninh mạng?": [
        "Hack tài khoản mạng xã hội của bạn cùng lớp",
    ],
    "Theo Luật Phòng, chống tham nhũng, việc công khai thông tin tài sản của Lãnh đạo quản lý nhà trường nhằm mục đích gì?":
        ["Phòng ngừa tham nhũng bằng cách phát hiện tài sản bất minh bạch"],
    "Hành vi nào sau đây vi phạm Luật An ninh mạng?": [
        "Chia sẻ phần mềm lậu trên nhóm sinh viên",
    ],
    "Luật An ninh mạng 2018 được Quốc hội thông qua vào ngày nào?": [
        "12/6/2018",
    ],
    "Sinh viên bị vu khống là gian lận thi cử có thể làm gì?": [
        "Báo công an để xử lý theo Điều 156",
    ],
    "Sinh viên tham gia huấn luyện GDQP&AN có thể được hưởng chính sách gì theo Luật Quốc phòng?":
        ["Ưu tiên xét tuyển việc làm sau tốt nghiệp"],
    "Hành vi nào sau đây của sinh viên bị cấm theo Luật An ninh quốc gia 2004?":
        ["Tiết lộ bí mật nhà nước qua mạng xã hội"],
    "Sinh viên tham gia nhóm chat phát tán thông tin chống phá nhà nước có thể chịu hậu quả gì?":
        ["Bị truy cứu trách nhiệm hình sự"],
    "Sinh viên bị bạn cùng phòng đe dọa giết người có quyền làm gì?": [
        "Báo công an để xử lý theo Điều 133",
    ],
    "Sinh viên sử dụng ma túy bất hợp pháp có thể bị xử lý theo điều luật nào?":
        ["Điều 249 - Tội tàng trữ, sử dụng trái phép chất ma túy"],
    "Sinh viên sử dụng ma túy trái phép có thể bị xử lý như thế nào?": [
        "Bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự",
    ],
    "Hành vi nào sau đây của sinh viên bị cấm theo Luật An ninh mạng?": [
        "Đăng tin sai sự thật gây hoang mang dư luận",
    ],
    "Theo Luật, hành vi lạm dụng chức vụ để ưu tiên đăng ký môn học cho người thân của cán bộ trường là gì?":
        ["Lạm dụng chức vụ, quyền hạn chiếm đoạt tài sản"],
    "Luật Phòng, chống ma túy 2021 được Quốc hội thông qua vào ngày nào?": [
        "30/3/2021",
    ],
    "Ai có thẩm quyền quyết định buộc thôi học sinh viên?": [
        "Hiệu trưởng/Giám đốc cơ sở giáo dục",
    ],
    "Theo Luật Sở hữu trí tuệ 2022, trường đại học có trách nhiệm gì liên quan đến sở hữu trí tuệ của sinh viên?":
        ["Hỗ trợ đăng ký và bảo vệ quyền sở hữu trí tuệ từ nghiên cứu"],
    "Theo Luật Sở hữu trí tuệ 2022, quyền nào của tác giả không thể chuyển nhượng trong quá trình viết bài nghiên cứu khoa học?":
        ["Quyền nhân thân (như quyền đứng tên tác giả)"],
    "Theo Luật An ninh mạng, thông tin cá nhân của sinh viên bao gồm gì?": [
        "Tên, ngày sinh, số CMND/CCCD, thông tin tài khoản ngân hàng",
    ],
    "Sinh viên bị đánh cắp tài khoản mạng xã hội nên làm gì đầu tiên?": [
        "Báo cáo cho nhà cung cấp dịch vụ để khóa tài khoản",
    ],
    "Sinh viên mua hàng trực tuyến nhưng nhận hàng lỗi có quyền gì?": [
        "Yêu cầu đổi hàng hoặc hoàn tiền",
    ],
    "Bộ luật Dân sự 2015 được Quốc hội thông qua vào ngày nào?": ["24/11/2015"],
    "Sinh viên đánh bạn cùng lớp gây thương tích 15% có thể bị truy cứu theo tội gì?":
        ["Tội cố ý gây thương tích (Điều 134)"],
    "Sinh viên có thể bị xử phạt bao nhiêu nếu đăng tin sai sự thật gây hoang mang?":
        ["Từ 10-20 triệu đồng (theo Nghị định 144/2021/NĐ-CP)"],
    "Sinh viên có quyền được cung cấp thông tin gì từ trường?": [
        "Nội dung, chương trình đào tạo",
    ],
    "Luật Giáo dục Đại học 2018 được Quốc hội thông qua vào ngày nào?": [
        "19/11/2018",
    ],
    "Theo sửa đổi 2022 của Luật, quy định mới nào liên quan đến phòng chống tham nhũng trong giáo dục?":
        ["Mở rộng kiểm soát xung đột lợi ích cho cán bộ trường học"],
    "Sinh viên có quyền tham gia hoạt động nào sau đây?": [
        "Tham gia nghiên cứu khoa học, hoạt động xã hội",
    ],
    "Theo Luật Quốc phòng 2018, sinh viên đại học có nghĩa vụ nào sau đây liên quan đến giáo dục quốc phòng?":
        [
            "Tham gia học tập, huấn luyện giáo dục quốc phòng và an ninh theo chương trình đào tạo",
        ],
    "Mục tiêu chính của Luật An ninh mạng 2018 là gì?": [
        "Bảo vệ an ninh quốc gia và quyền lợi người dùng trên không gian mạng",
    ],
    "Sinh viên dưới 18 tuổi phạm tội trộm cắp tài sản có thể bị xử lý như thế nào?":
        ["Xử lý nhẹ hơn theo quy định cho người dưới 18 tuổi"],
    "Sinh viên sử dụng phần mềm học tập lậu trong nghiên cứu có thể bị xử phạt theo Luật Sở hữu trí tuệ như thế nào?":
        ["Phạt hành chính từ 3-5 triệu đồng đối với cá nhân"],
    "Theo Luật Phòng, chống ma túy 2021, ma túy được định nghĩa là gì?": [
        "Chất gây nghiện, hướng thần và tiền chất dùng trái phép",
    ],
    "Sinh viên lừa bán vé sự kiện giả để chiếm đoạt tiền có thể bị xử lý theo tội gì?":
        ["Tội lừa đảo chiếm đoạt tài sản (Điều 174)"],
    "Hình thức đào tạo nào không được quy định trong Luật Giáo dục Đại học?": [
        "Tự học không cần hướng dẫn",
    ],
    "Sinh viên vi phạm nội quy có thể chịu hình thức kỷ luật nào?": [
        "Cảnh cáo, đình chỉ, buộc thôi học",
    ],
    "Hành vi nào sau đây của sinh viên không cấu thành tội phạm?": [
        "Mượn xe máy của bạn và trả đúng hẹn",
    ],
    "Sinh viên sử dụng Wi-Fi trường học phải tuân thủ quy định gì?": [
        "Không thực hiện hành vi tấn công mạng hoặc phát tán mã độc",
    ],
    "Sinh viên có quyền khiếu nại về vấn đề gì?": [
        "Kết quả học tập hoặc kỷ luật",
    ],
    "Sinh viên phát tán video riêng tư của bạn cùng lớp có thể bị xử lý theo tội gì?":
        ["Tội làm nhục người khác (Điều 155)"],
    "Sinh viên làm hỏng thiết bị phòng thí nghiệm phải chịu trách nhiệm gì?": [
        "Bồi thường thiệt hại theo giá trị tài sản",
    ],
    "Hành vi nhận hối lộ từ sinh viên để thay đổi điểm thi của giảng viên được coi là hành vi tham nhũng nào?":
        ["Nhận hối lộ"],
    "Sinh viên phát hiện cán bộ trường cấp học bổng bất chính nên làm gì theo Luật Phòng, chống tham nhũng?":
        ["Báo cáo cho cơ quan có thẩm quyền để được bảo vệ"],
    "Quyền sở hữu nhãn hiệu cho sản phẩm nghiên cứu (như ứng dụng di động học tập) thuộc về ai nếu sinh viên tự phát triển?":
        ["Thuộc sinh viên nếu tự đăng ký"],
    "Theo Luật Phòng, chống ma túy, sinh viên cai nghiện ma túy có quyền gì?": [
        "Được hỗ trợ tư vấn, điều trị và tái hòa nhập cộng đồng",
    ],
    "Theo Luật Giáo dục Đại học, sinh viên có quyền nào liên quan đến học tập?":
        [
            "Được học tập, nghiên cứu trong môi trường bình đẳng, không phân biệt đối xử",
        ],
    "Sinh viên có quyền yêu cầu bảo vệ thông tin cá nhân trong trường hợp nào?":
        ["Khi trường công khai điểm thi mà không được đồng ý"],
    "Sinh viên có quyền gì khi bị bạn cùng lớp vu khống?": [
        "Yêu cầu xin lỗi công khai và bồi thường",
    ],
    "Hành vi nào sau đây bị cấm đối với sinh viên?": [
        "Gian lận trong học tập, thi cử",
    ],
    "Sinh viên vi phạm trách nhiệm chấp hành nội quy có thể đối mặt với hình thức kỷ luật nào?":
        ["Bị cảnh cáo, đình chỉ hoặc buộc thôi học"],
    "Sinh viên dưới 18 tuổi ký hợp đồng mua laptop cần điều kiện gì?": [
        "Phải có sự đồng ý của người giám hộ",
    ],
    "Hành vi sao chép nguyên văn luận văn của bạn để nộp bài có thể bị xử lý theo quy định nào của Luật Sở hữu trí tuệ?":
        ["Vi phạm quyền tác giả (đạo văn)"],
    "Sinh viên làm mất tài liệu mượn của thư viện trường phải làm gì?": [
        "Bồi thường theo giá trị tài liệu",
    ],
    "Sinh viên tổ chức cờ bạc trong ký túc xá có thể bị xử lý theo tội gì?": [
        "Tội tổ chức đánh bạc (Điều 321)",
    ],
    "Sinh viên bị lừa đảo khi mua hàng trực tuyến nên làm gì?": [
        "Báo cáo cơ quan chức năng để xử lý",
    ],
    "Theo Luật Giáo dục Đại học, mục tiêu của giáo dục đại học là gì?": [
        "Đào tạo nguồn nhân lực chất lượng cao, nâng cao dân trí, bồi dưỡng nhân tài",
    ],
    "Sinh viên có quyền yêu cầu nhà cung cấp dịch vụ mạng làm gì?": [
        "Xóa thông tin sai sự thật về mình",
    ],
    "Theo Luật, cơ sở giáo dục đại học phải công khai thông tin gì?": [
        "Chất lượng đào tạo và điều kiện cơ sở vật chất",
    ],
    "Sinh viên tổ chức sử dụng ma túy trong ký túc xá có thể bị phạt tù tối đa bao lâu?":
        ["7 năm"],
    "Sinh viên đăng ký bằng sáng chế cho ý tưởng nghiên cứu cá nhân cần đáp ứng điều kiện gì theo Luật?":
        ["Ý tưởng phải mới, có tính sáng tạo và áp dụng công nghiệp"],
    "Sinh viên tham gia đánh nhau trong ký túc xá gây rối trật tự có thể bị xử lý theo tội gì?":
        ["Tội gây rối trật tự công cộng (Điều 318)"],
    "Sinh viên có trách nhiệm gì trong phòng, chống tham nhũng theo Luật Phòng, chống tham nhũng 2018?":
        [
            "Tuyên truyền, giáo dục và báo cáo hành vi tham nhũng trong môi trường học tập",
        ],
    "Hậu quả pháp lý đối với sinh viên tham gia hối lộ giảng viên để qua môn là gì?":
        [
            "Có thể bị xử lý hình sự theo Bộ luật Hình sự nếu cấu thành tội đưa hối lộ",
        ],
    "Ai có quyền quyết định thành lập trường đại học công lập?": [
        "Thủ tướng Chính phủ",
        "Được tôn trọng và bảo vệ danh dự, nhân phẩm",
    ],
    "Hành vi gian lận thi cử của sinh viên có thể bị xử lý theo điều luật nào?":
        ["Điều 356 - Hành vi gian lận trong thi cử"],
    "Hành vi nào sau đây của sinh viên vi phạm Bộ luật Dân sự?": [
        "Đăng thông tin sai sự thật về giảng viên",
    ],
    "Sinh viên trộm cắp laptop của bạn cùng phòng có thể bị phạt tù tối đa bao lâu?":
        ["3 năm"],
    "Sinh viên tham gia Đoàn Thanh niên có vai trò gì trong phòng chống tham nhũng theo Luật?":
        ["Tuyên truyền, giám sát và báo cáo tham nhũng trong trường học"],
    "Sinh viên bị lộ thông tin cá nhân trên mạng có quyền gì?": [
        "Yêu cầu xóa thông tin cá nhân bị sử dụng trái phép",
    ],
    "Sinh viên phát hiện bạn cùng phòng sử dụng ma túy nên làm gì?": [
        "Báo cáo cho cơ quan công an hoặc nhà trường",
    ],
    "Sinh viên sử dụng mạng xã hội phải tuân thủ nguyên tắc nào?": [
        "Tôn trọng quyền, lợi ích hợp pháp của người khác",
    ],
    "Trách nhiệm nào sau đây của sinh viên liên quan đến việc bảo vệ tài sản trường học?":
        ["Sử dụng và bảo vệ tài sản công của cơ sở giáo dục đại học"],
    "Sinh viên đăng bài xúc phạm danh dự giảng viên trên mạng có thể chịu hậu quả gì?":
        ["Bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự"],
    "Ai có trách nhiệm ban hành quy chế đào tạo của trường?": [
        "Hiệu trưởng/Giám đốc",
    ],
    "Sinh viên được hưởng chính sách miễn, giảm học phí trong trường hợp nào?":
        ["Thuộc đối tượng chính sách theo quy định"],
    "Sinh viên bị chủ nhà trọ giữ chứng minh nhân dân trái phép có thể làm gì?":
        ["Yêu cầu trả lại và bồi thường thiệt hại"],
    "Sinh viên mua ma túy qua mạng xã hội có thể bị xử lý theo tội gì?": [
        "Tội mua bán trái phép chất ma túy (Điều 251)",
    ],
    "Theo Luật Sở hữu trí tuệ 2022, ngoại lệ nào cho phép giảng viên trích dẫn tài liệu nghiên cứu mà không cần xin phép?":
        [
            "Trích dẫn với mục đích giảng dạy, nghiên cứu, không vì mục đích thương mại",
        ],
    // "Theo Luật Giáo dục Đại học 2018, trách nhiệm nào sau đây là bắt buộc đối với sinh viên?": [
    //   "Được cung cấp đầy đủ thông tin về chương trình đào tạo và quy chế học tập"
    // ],
    "Sinh viên có thương tật nặng có được miễn học GDQP&AN theo Luật Quốc phòng không?":
        ["Được miễn nếu có giấy xác nhận y tế"],
    "Sinh viên đăng bài xúc phạm danh dự giảng viên trên mạng có thể bị xử lý theo tội gì?":
        ["Tội làm nhục người khác (Điều 155)"],
    "Theo Luật Phòng, chống ma túy, sinh viên có trách nhiệm gì trong phòng, chống ma túy?":
        ["Tuyên truyền, nâng cao nhận thức về tác hại ma túy"],
    "Sinh viên có quyền từ chối giao dịch nào?": [
        "Giao dịch lừa đảo, không rõ ràng",
    ],
    "Sinh viên có quyền nào sau đây theo Luật Giáo dục Đại học?": [
        "Được tôn trọng và bảo vệ danh dự, nhân phẩm",
    ],
};


const ESSAY_ANSWER =
    "Thượng tôn pháp luật là việc coi pháp luật là chuẩn mực cao nhất trong xã hội, mọi người đều bình đẳng và phải tuân thủ pháp luật, không ai được đứng trên pháp luật. Là sinh viên, để trở thành công dân tốt, chúng ta cần học tập, rèn luyện ý thức chấp hành pháp luật, tôn trọng quyền và lợi ích hợp pháp của người khác, sống trung thực, có trách nhiệm, tích cực tham gia các hoạt động vì cộng đồng và góp phần xây dựng một xã hội văn minh, công bằng, kỷ cương.";

const ESSAY_QUESTION_HINTS = [
    "thượng tôn pháp luật",
    "thuong ton phap luat",
];

function normalizeText(text) {
    return String(text || "")
        .replace(/\u00a0/g, " ")
        .trim()
        .replace(/\s+/g, " ");
}

// Loose comparison key: tolerant to case, quote style, Unicode form and
// trailing punctuation, which often differ between the answer doc and the form.
function matchKey(text) {
    return normalizeText(text)
        .normalize("NFC")
        .toLowerCase()
        .replace(/[“”„]/g, '"')
        .replace(/[‘’]/g, "'")
        .replace(/[\s.;:?!]+$/, "");
}

// Questions may be shuffled and numbered differently, so drop any leading
// "12." / "Câu 12:" ordinal before looking the question up.
function questionKey(text) {
    return matchKey(text).replace(/^(câu\s*)?\d+\s*[.):-]\s*/, "");
}

const answerIndex = new Map(
    Object.entries(answers).map(([question, entry]) => [
        questionKey(question),
        entry,
    ]),
);

function setNativeValue(el, value) {
    const proto =
        el instanceof HTMLTextAreaElement
            ? window.HTMLTextAreaElement.prototype
            : window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(proto, "value");
    if (descriptor && descriptor.set) {
        descriptor.set.call(el, value);
    } else {
        el.value = value;
    }
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
    el.dispatchEvent(
        new InputEvent("input", { bubbles: true, data: value, inputType: "insertText" }),
    );
}

function pageLooksLikeEssayTarget() {
    const blobs = [
        ...document.querySelectorAll(
            '.text-format-content, [data-automation-id="questionItem"]',
        ),
    ].map((el) => normalizeText(el.innerText).toLowerCase());
    return blobs.some((text) =>
        ESSAY_QUESTION_HINTS.some((hint) => text.includes(hint)),
    );
}

function tryFillEssay() {
    if (!pageLooksLikeEssayTarget()) {
        return { filled: false, reason: "not-target-form" };
    }

    const textarea = document.querySelector(
        'textarea[placeholder="Nhập câu trả lời của bạn"], textarea[placeholder="Enter your answer"]',
    );
    if (!textarea) {
        return { filled: false, reason: "no-textarea" };
    }

    setNativeValue(textarea, ESSAY_ANSWER);
    return { filled: true, reason: "ok" };
}

/**
 * Find and click option by comparing value/label text in JS
 * (avoids CSS selector breakage with quotes/spaces).
 */
function clickOptionByAnswer(questionRoot, answerText) {
    const want = matchKey(answerText);
    if (!want || !questionRoot) return false;

    const inputs = questionRoot.querySelectorAll(
        'input[type="radio"], input[type="checkbox"], input[value]',
    );

    for (const input of inputs) {
        const valueText = matchKey(input.value);
        if (valueText && valueText === want) {
            if (!input.checked) input.click();
            return true;
        }
    }

    const labelled = [...inputs]
        .map((input) => {
            const label =
                (input.id && document.querySelector(`label[for="${CSS.escape(input.id)}"]`)) ||
                input.closest("label") ||
                input.parentElement;
            return { input, labelText: matchKey(label?.innerText || "") };
        })
        .filter((item) => item.labelText);

    // Exact label first, so "5 đợt" never loses to "15 đợt"
    const byLabel =
        labelled.find(({ labelText }) => labelText === want) ||
        labelled.find(({ labelText }) => labelText.includes(want));
    if (byLabel) {
        if (!byLabel.input.checked) byLabel.input.click();
        return true;
    }

    // Last resort: click any clickable node whose text matches the answer
    const candidates = questionRoot.querySelectorAll(
        "label, span, div, [role='radio'], [role='checkbox']",
    );
    for (const node of candidates) {
        if (node.querySelector("input")) continue; // prefer clicking the input path above
        const text = matchKey(node.innerText);
        if (text === want) {
            node.click();
            return true;
        }
    }

    // The answer doc sometimes adds an explanation after the option text,
    // e.g. "Bậc 6 (CEFR C2)" for option "Bậc 6": pick the longest option
    // contained in the answer.
    const contained = labelled
        .filter(({ labelText }) => labelText.length >= 4 && want.includes(labelText))
        .sort((a, b) => b.labelText.length - a.labelText.length);
    if (contained.length) {
        if (!contained[0].input.checked) contained[0].input.click();
        return true;
    }

    return false;
}

function autoFillFormBasedOnQuestion() {
    const matched = [];
    const failed = [];
    const unknown = [];

    const essay = tryFillEssay();

    const spans = document.querySelectorAll(".text-format-content");
    const seenQuestions = new Set();

    spans.forEach((span) => {
        const questionText = normalizeText(span.innerText);
        if (!questionText || seenQuestions.has(questionText)) return;
        seenQuestions.add(questionText);

        const questionRoot = span.closest(
            'div[data-automation-id="questionItem"]',
        );
        // Only the first .text-format-content in a question item is its title;
        // the rest are option labels, form title, description...
        const isQuestionTitle =
            questionRoot &&
            questionRoot.querySelector(".text-format-content") === span;

        const answerEntry = answerIndex.get(questionKey(questionText));
        if (!answerEntry) {
            const isEssay = ESSAY_QUESTION_HINTS.some((hint) =>
                questionText.toLowerCase().includes(hint),
            );
            if (isQuestionTitle && !isEssay) unknown.push(questionText);
            return;
        }

        const answersList = Array.isArray(answerEntry)
            ? answerEntry
            : [answerEntry];
        if (!questionRoot) {
            failed.push(questionText);
            return;
        }

        let anyClicked = false;
        answersList.forEach((answer) => {
            if (clickOptionByAnswer(questionRoot, answer)) {
                anyClicked = true;
                console.log(`Filled "${questionText}" with "${normalizeText(answer)}"`);
            }
        });

        if (anyClicked) matched.push(questionText);
        else failed.push(questionText);
    });

    const status =
        matched.length > 0 || essay.filled
            ? failed.length > 0
                ? "partial"
                : "ok"
            : spans.length === 0
              ? "error"
              : "partial";

    return {
        status,
        bankSize: Object.keys(answers).length,
        questionsOnPage: document.querySelectorAll(
            'div[data-automation-id="questionItem"]',
        ).length,
        matchedCount: matched.length,
        failedCount: failed.length,
        matched,
        failed,
        unknown,
        essayFilled: essay.filled,
        essayReason: essay.reason,
        message:
            spans.length === 0
                ? "Không thấy câu hỏi trên trang. Hãy mở đúng Microsoft Forms rồi thử lại."
                : matched.length === 0 && !essay.filled
                  ? "Không khớp được câu nào. Form có thể đã đổi đề."
                  : `Đã điền ${matched.length} câu, bỏ qua ${unknown.length} câu không có trong ngân hàng.`,
    };
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.action !== "fillForm") return false;

    try {
        const result = autoFillFormBasedOnQuestion();
        sendResponse(result);
    } catch (error) {
        console.error("Error filling the form:", error);
        sendResponse({
            status: "error",
            message: error instanceof Error ? error.message : "Lỗi không xác định",
            matchedCount: 0,
            failedCount: 0,
            matched: [],
            failed: [],
            unknown: [],
            essayFilled: false,
        });
    }

    return false;
});
})();
