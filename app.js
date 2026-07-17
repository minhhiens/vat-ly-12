/* ============================================
   VẬT LÝ 12 — BÀI 1: CẤU TRÚC CỦA CHẤT & SỰ CHUYỂN THỂ
   Quiz Engine + UI Interactions
   ============================================ */

// ========== QUIZ DATA — 20 CÂU, CHIA ĐỀU 4 MỨC ĐỘ ==========

const quizData = [
    // ========================
    // MỨC 1: NHẬN BIẾT (5 câu)
    // ========================
    {
        id: 1,
        level: 'nhanbiết',
        levelLabel: 'Nhận biết',
        question: 'Theo thuyết động học phân tử, vật chất được cấu tạo từ:',
        options: [
            'Các nguyên tử và phân tử riêng biệt',
            'Các hạt nhân nguyên tử',
            'Các electron tự do',
            'Các ion dương và ion âm'
        ],
        correct: 0,
        explanation: `Đây là luận điểm thứ nhất và cơ bản nhất của thuyết động học phân tử:

🔹 Mọi vật chất (rắn, lỏng, khí) đều được cấu tạo từ các hạt riêng biệt gọi là PHÂN TỬ hoặc NGUYÊN TỬ.
🔹 Giữa các phân tử/nguyên tử có KHOẢNG CÁCH — chúng không dính liền nhau.
🔹 Kích thước phân tử rất nhỏ, cỡ 10⁻¹⁰ m (0,1 nanomet).

❌ Tại sao các đáp án khác sai?
• B — Hạt nhân nguyên tử chỉ là một phần bên trong nguyên tử, không phải đơn vị cấu tạo vật chất.
• C — Electron tự do chỉ có trong kim loại, không phải mọi vật chất.
• D — Ion chỉ xuất hiện trong dung dịch điện li hoặc chất điện phân, không phải dạng cấu tạo chung.`
    },
    {
        id: 2,
        level: 'nhanbiết',
        levelLabel: 'Nhận biết',
        question: 'Chuyển động Brown là:',
        options: [
            'Chuyển động thẳng đều của phân tử',
            'Chuyển động hỗn loạn không ngừng của các hạt nhỏ trong chất lỏng hoặc khí',
            'Chuyển động tròn đều của phân tử',
            'Chuyển động dao động của phân tử trong chất rắn'
        ],
        correct: 1,
        explanation: `Chuyển động Brown được nhà thực vật học Robert Brown phát hiện năm 1827:

🔹 Brown quan sát các HẠT PHẤN HOA rất nhỏ lơ lửng trong nước dưới kính hiển vi → thấy chúng chuyển động HỖN LOẠN, KHÔNG NGỪNG, không theo quy luật nào.

🔹 Nguyên nhân: Các phân tử nước (mắt thường không thấy) liên tục VA CHẠM vào hạt phấn hoa từ mọi phía. Vì số va chạm từ các hướng không đều nhau nên hạt phấn hoa bị đẩy qua đẩy lại liên tục.

⚠️ LƯU Ý RẤT QUAN TRỌNG (hay ra đề):
• Chuyển động Brown là chuyển động của HẠT PHẤN HOA (hạt lớn), KHÔNG PHẢI chuyển động của phân tử nước.
• Nó là BẰNG CHỨNG THỰC NGHIỆM gián tiếp chứng tỏ các phân tử đang chuyển động nhiệt.
• Nhiệt độ càng cao → chuyển động Brown càng mạnh (vì phân tử va chạm mạnh hơn).`
    },
    {
        id: 3,
        level: 'nhanbiết',
        levelLabel: 'Nhận biết',
        question: 'Quá trình chuyển từ thể rắn sang thể lỏng gọi là:',
        options: [
            'Đông đặc',
            'Bay hơi',
            'Nóng chảy',
            'Ngưng tụ'
        ],
        correct: 2,
        explanation: `Có 6 quá trình chuyển thể, cần nhớ CẶP ĐÔI đối nghịch:

🔹 RẮN → LỎNG: NÓNG CHẢY (thu nhiệt) ← đáp án đúng
🔹 LỎNG → RẮN: ĐÔNG ĐẶC (tỏa nhiệt) — quá trình ngược lại

🔹 LỎNG → KHÍ: BAY HƠI hoặc SÔI (thu nhiệt)
🔹 KHÍ → LỎNG: NGƯNG TỤ (tỏa nhiệt)

🔹 RẮN → KHÍ: THĂNG HOA (thu nhiệt) — bỏ qua thể lỏng
🔹 KHÍ → RẮN: NGƯNG KẾT (tỏa nhiệt)

💡 Mẹo nhớ: Chiều đi (rắn→lỏng→khí) luôn THU NHIỆT. Chiều ngược (khí→lỏng→rắn) luôn TỎA NHIỆT.
Ví dụ đời thường: Viên đá lạnh để ngoài → tan chảy thành nước = nóng chảy.`
    },
    {
        id: 4,
        level: 'nhanbiết',
        levelLabel: 'Nhận biết',
        question: 'Ở thể khí, các phân tử chuyển động:',
        options: [
            'Dao động quanh vị trí cân bằng cố định',
            'Dao động quanh vị trí cân bằng thay đổi',
            'Chuyển động tự do, hỗn loạn',
            'Đứng yên hoàn toàn'
        ],
        correct: 2,
        explanation: `Mỗi thể có kiểu chuyển động phân tử khác nhau — đây là điểm cốt lõi cần nhớ:

🧊 THỂ RẮN → Đáp án A: Phân tử DAO ĐỘNG quanh vị trí cân bằng CỐ ĐỊNH. Lực liên kết rất mạnh giữ chúng tại chỗ.

💧 THỂ LỎNG → Đáp án B: Phân tử DAO ĐỘNG quanh vị trí cân bằng nhưng vị trí này THAY ĐỔI. Phân tử có thể di chuyển chậm → nên chất lỏng chảy được.

💨 THỂ KHÍ → Đáp án C (đúng): Phân tử CHUYỂN ĐỘNG TỰ DO, HỖN LOẠN. Lực liên kết gần bằng 0, khoảng cách phân tử rất lớn (>> kích thước phân tử). Vì vậy chất khí không có hình dạng, không có thể tích riêng — chiếm toàn bộ bình chứa.

❌ Đáp án D sai: Không có phân tử nào đứng yên (ở nhiệt độ > 0 K).`
    },
    {
        id: 5,
        level: 'nhanbiết',
        levelLabel: 'Nhận biết',
        question: 'Đơn vị của nhiệt nóng chảy riêng (λ) là:',
        options: [
            'J/(kg.K)',
            'J/kg',
            'J.kg',
            'K/J'
        ],
        correct: 1,
        explanation: `Cần phân biệt rõ 2 đại lượng hay bị nhầm:

🔹 NHIỆT NÓNG CHẢY RIÊNG (λ) — đơn vị: J/kg ← đáp án đúng
   • Ý nghĩa: Nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn 1 kg chất rắn TẠI NHIỆT ĐỘ NÓNG CHẢY.
   • Công thức: Q = λ × m
   • Không liên quan đến thay đổi nhiệt độ → không có K (Kelvin) trong đơn vị.

🔹 NHIỆT DUNG RIÊNG (c) — đơn vị: J/(kg.K)
   • Ý nghĩa: Nhiệt lượng cần cung cấp để 1 kg chất TĂNG thêm 1 K (hoặc 1°C).
   • Công thức: Q = m × c × ΔT
   • Có liên quan đến thay đổi nhiệt độ → CÓ K trong đơn vị.

💡 Mẹo nhớ: λ và L (nhiệt hóa hơi riêng) cùng đơn vị J/kg vì chúng mô tả quá trình chuyển thể (nhiệt độ không đổi). Còn c có thêm K vì mô tả quá trình thay đổi nhiệt độ.`
    },

    // ========================
    // MỨC 2: THÔNG HIỂU (5 câu)
    // ========================
    {
        id: 6,
        level: 'thonghieu',
        levelLabel: 'Thông hiểu',
        question: 'Khi nhiệt độ tăng, hiện tượng khuếch tán xảy ra nhanh hơn vì:',
        options: [
            'Khoảng cách giữa các phân tử giảm',
            'Lực hút giữa các phân tử tăng',
            'Tốc độ chuyển động nhiệt của các phân tử tăng',
            'Khối lượng phân tử giảm'
        ],
        correct: 2,
        explanation: `Trước hết cần hiểu KHUẾCH TÁN là gì:
🔹 Khuếch tán = hiện tượng các chất TỰ HÒA TRỘN vào nhau. VD: nhỏ mực vào nước → mực tự lan ra khắp ly.

Tại sao nhiệt độ cao → khuếch tán nhanh hơn?

🔹 Khuếch tán xảy ra nhờ CHUYỂN ĐỘNG NHIỆT của phân tử (phân tử di chuyển ngẫu nhiên và va chạm nhau).
🔹 Nhiệt độ tăng → phân tử chuyển động NHANH hơn → va chạm MẠNH hơn → phân tử mực bị đẩy đi XA hơn trong cùng thời gian → khuếch tán nhanh hơn.

❌ Tại sao đáp án khác sai?
• A — Khoảng cách phân tử TĂNG (chứ không giảm) khi nhiệt độ tăng.
• B — Lực hút phân tử phụ thuộc khoảng cách, không phụ thuộc nhiệt độ.
• D — Khối lượng phân tử là hằng số, không thay đổi theo nhiệt độ.

🧪 Thí nghiệm kiểm chứng: Nhỏ mực vào 2 ly nước (1 nóng, 1 lạnh) → ly nóng mực loang nhanh hơn rõ rệt!`
    },
    {
        id: 7,
        level: 'thonghieu',
        levelLabel: 'Thông hiểu',
        question: 'Chất rắn có hình dạng xác định vì:',
        options: [
            'Các phân tử đứng yên hoàn toàn',
            'Các phân tử dao động quanh vị trí cân bằng cố định, lực liên kết rất mạnh',
            'Các phân tử chuyển động tự do nhưng rất chậm',
            'Khoảng cách giữa các phân tử rất lớn'
        ],
        correct: 1,
        explanation: `Để hiểu tại sao chất rắn giữ được hình dạng, cần nắm 2 yếu tố:

🔹 Yếu tố 1 — LỰC LIÊN KẾT RẤT MẠNH:
   Các phân tử trong chất rắn liên kết với nhau rất chặt chẽ, giống như bị "khóa" tại vị trí. Lực này giữ cho cấu trúc không bị biến dạng.

🔹 Yếu tố 2 — VỊ TRÍ CÂN BẰNG CỐ ĐỊNH:
   Mỗi phân tử chỉ DAO ĐỘNG nhẹ (rung lắc) quanh MỘT VỊ TRÍ CỐ ĐỊNH, không dịch chuyển sang chỗ khác. → Hình dạng vật được giữ nguyên.

❌ Tại sao đáp án khác sai?
• A — Sai! Phân tử chất rắn KHÔNG đứng yên, chúng vẫn DAO ĐỘNG (chỉ là dao động tại chỗ). Chỉ ở 0 K (−273°C) phân tử mới gần như đứng yên.
• C — "Chuyển động tự do" là đặc điểm của thể KHÍ, không phải rắn.
• D — "Khoảng cách rất lớn" là đặc điểm của thể KHÍ. Chất rắn có khoảng cách phân tử RẤT NHỎ.

📌 Chính vì vậy chất rắn vừa có HÌNH DẠNG xác định, vừa có THỂ TÍCH xác định.`
    },
    {
        id: 8,
        level: 'thonghieu',
        levelLabel: 'Thông hiểu',
        question: 'Sự khác biệt cơ bản giữa bay hơi và sôi là:',
        options: [
            'Bay hơi xảy ra ở mọi nhiệt độ, chỉ ở bề mặt; sôi xảy ra ở nhiệt độ sôi, trong toàn bộ khối chất lỏng',
            'Bay hơi thu nhiệt, sôi tỏa nhiệt',
            'Bay hơi xảy ra trong chân không, sôi xảy ra ở áp suất khí quyển',
            'Bay hơi là quá trình thuận nghịch, sôi thì không'
        ],
        correct: 0,
        explanation: `Cả bay hơi và sôi đều là quá trình Lỏng → Khí, nhưng khác nhau hoàn toàn:

💨 BAY HƠI:
   • Xảy ra ở MỌI NHIỆT ĐỘ (ngay cả khi nước chưa nóng, quần áo phơi vẫn khô)
   • Chỉ xảy ra ở BỀ MẶT thoáng của chất lỏng
   • Tốc độ bay hơi phụ thuộc: nhiệt độ, gió, diện tích bề mặt

🫧 SÔI:
   • Chỉ xảy ra ở NHIỆT ĐỘ SÔI xác định (nước: 100°C ở 1 atm)
   • Xảy ra đồng thời TRONG LÒNG và TRÊN BỀ MẶT chất lỏng (nên mới thấy bọt khí sủi lên)
   • Khi đang sôi, nhiệt độ KHÔNG ĐỔI dù tiếp tục đun

🔹 Điểm GIỐNG nhau: Cả hai đều THU NHIỆT (chất lỏng cần hấp thụ năng lượng để phân tử thoát ra thành hơi).

❌ B sai: Cả bay hơi và sôi đều thu nhiệt.
❌ C sai: Bay hơi xảy ra ở mọi áp suất, sôi cũng vậy (chỉ là nhiệt độ sôi thay đổi theo áp suất).`
    },
    {
        id: 9,
        level: 'thonghieu',
        levelLabel: 'Thông hiểu',
        question: 'Trong quá trình nóng chảy của chất rắn kết tinh, nhiệt độ không đổi vì:',
        options: [
            'Chất rắn không nhận thêm nhiệt nữa',
            'Nhiệt lượng cung cấp được dùng để phá vỡ cấu trúc mạng tinh thể',
            'Các phân tử đã ngừng chuyển động',
            'Nhiệt độ đã đạt giá trị cực đại'
        ],
        correct: 1,
        explanation: `Đây là điểm RẤT HAY RA ĐỀ THI. Cần hiểu rõ bản chất:

🔹 Khi đun chất rắn kết tinh đến nhiệt độ nóng chảy (VD: nước đá ở 0°C):
   → Vẫn tiếp tục CẤP NHIỆT (đáp án A sai — chất rắn VẪN nhận nhiệt!)
   → Nhưng nhiệt độ KHÔNG TĂNG. Tại sao?

🔹 Vì toàn bộ nhiệt lượng nhận được được dùng để:
   ✅ PHÁ VỠ các liên kết giữa phân tử trong MẠNG TINH THỂ
   ✅ Chuyển đổi CẤU TRÚC từ trật tự (rắn) sang kém trật tự hơn (lỏng)
   ✅ KHÔNG dùng để tăng động năng phân tử → nhiệt độ không tăng

🔹 Nhiệt lượng này chính là Q = λ × m (nhiệt nóng chảy).

⚠️ Lưu ý: Điều này chỉ đúng với CHẤT RẮN KẾT TINH (muối, kim cương, kim loại...) vì chúng có mạng tinh thể. Chất rắn VÔ ĐỊNH HÌNH (thủy tinh, nhựa) KHÔNG có nhiệt độ nóng chảy xác định — chúng mềm dần khi nóng lên.

📊 Trên đồ thị nhiệt độ-thời gian: đoạn nằm ngang chính là lúc đang nóng chảy.`
    },
    {
        id: 10,
        level: 'thonghieu',
        levelLabel: 'Thông hiểu',
        question: 'Thủy tinh (chất rắn vô định hình) khi bị nung nóng sẽ:',
        options: [
            'Nóng chảy đột ngột ở một nhiệt độ xác định',
            'Mềm dần rồi chảy dẻo, không có nhiệt độ nóng chảy xác định',
            'Không bao giờ nóng chảy',
            'Thăng hoa trực tiếp thành khí'
        ],
        correct: 1,
        explanation: `Câu này kiểm tra sự khác biệt giữa 2 loại chất rắn:

💎 CHẤT RẮN KẾT TINH (muối, kim cương, sắt, đồng, nước đá...):
   • Phân tử xếp theo CẤU TRÚC MẠNG TINH THỂ trật tự
   • Có nhiệt độ nóng chảy XÁC ĐỊNH (VD: nước đá luôn chảy ở 0°C, sắt ở 1538°C)
   • Khi nóng chảy: chuyển đổi ĐỒNG LOẠT từ rắn sang lỏng tại 1 nhiệt độ

🔮 CHẤT RẮN VÔ ĐỊNH HÌNH (thủy tinh, nhựa, cao su, sáp nến...):
   • KHÔNG có cấu trúc mạng tinh thể → phân tử sắp xếp HỖN ĐỘN
   • KHÔNG có nhiệt độ nóng chảy xác định
   • Khi nung: MỀM DẦN → dẻo → chảy lỏng (quá trình từ từ, không đột ngột)
   → Đó là lý do thợ thổi thủy tinh có thể uốn nắn thủy tinh khi nóng!

💡 Ứng dụng thực tế: Chính vì thủy tinh mềm dần nên mới có nghề THỔI THỦY TINH — tạo hình khi nó ở trạng thái dẻo.`
    },

    // ========================
    // MỨC 3: VẬN DỤNG (5 câu)
    // ========================
    {
        id: 11,
        level: 'vandung',
        levelLabel: 'Vận dụng',
        question: 'Tính nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn 2 kg nước đá ở 0°C. Biết λ(đá) = 3,34×10⁵ J/kg.',
        options: [
            '167 000 J',
            '334 000 J',
            '668 000 J',
            '1 336 000 J'
        ],
        correct: 2,
        explanation: `GIẢI CHI TIẾT:

📌 Bước 1 — Xác định dạng bài:
   Đề hỏi "nóng chảy" → quá trình Rắn → Lỏng → dùng công thức Q = λ × m

📌 Bước 2 — Liệt kê dữ kiện:
   • m = 2 kg (khối lượng đá)
   • λ = 3,34 × 10⁵ J/kg = 334 000 J/kg (nhiệt nóng chảy riêng của nước đá)
   • Đá đang ở 0°C (đúng nhiệt độ nóng chảy → áp dụng được công thức)

📌 Bước 3 — Tính:
   Q = λ × m = 334 000 × 2 = 668 000 J = 668 kJ

✅ Đáp án: C. 668 000 J

⚠️ Lưu ý quan trọng:
• Công thức Q = λ.m chỉ áp dụng khi đá ĐANG Ở NHIỆT ĐỘ NÓNG CHẢY (0°C).
• Nếu đá ở −10°C thì phải đun lên 0°C trước (dùng Q = m.c.ΔT) rồi mới tính nhiệt nóng chảy.
• 668 000 J ≈ 668 kJ — tương đương năng lượng đun sôi khoảng 1,6 lít nước từ 0°C lên 100°C.`
    },
    {
        id: 12,
        level: 'vandung',
        levelLabel: 'Vận dụng',
        question: 'Cho 0,4 kg nước ở 100°C bay hơi hoàn toàn. Biết L(nước) = 2,26×10⁶ J/kg. Nhiệt lượng cần cung cấp là:',
        options: [
            '452 000 J',
            '565 000 J',
            '904 000 J',
            '2 260 000 J'
        ],
        correct: 2,
        explanation: `GIẢI CHI TIẾT:

📌 Bước 1 — Xác định dạng bài:
   Đề hỏi "bay hơi hoàn toàn" → quá trình Lỏng → Khí → dùng công thức Q = L × m

📌 Bước 2 — Liệt kê dữ kiện:
   • m = 0,4 kg
   • L = 2,26 × 10⁶ J/kg = 2 260 000 J/kg (nhiệt hóa hơi riêng của nước)
   • Nước đang ở 100°C (đúng nhiệt độ sôi → áp dụng được)

📌 Bước 3 — Tính:
   Q = L × m = 2 260 000 × 0,4 = 904 000 J = 904 kJ

✅ Đáp án: C. 904 000 J

💡 Nhận xét hay:
• Chỉ 0,4 kg nước thôi mà cần tới 904 kJ để hóa hơi!
• So sánh: Đun 0,4 kg nước từ 0°C → 100°C chỉ cần Q = 0,4 × 4200 × 100 = 168 000 J = 168 kJ
• Vậy nhiệt hóa hơi GẤP hơn 5 LẦN nhiệt đun sôi! → Đó là lý do bị bỏng hơi nước NẶNG hơn bỏng nước sôi (hơi nước ngưng tụ trên da tỏa ra rất nhiều nhiệt).`
    },
    {
        id: 13,
        level: 'vandung',
        levelLabel: 'Vận dụng',
        question: 'Khi để một cốc nước đá lạnh trên bàn, bên ngoài cốc xuất hiện những giọt nước. Hiện tượng này xảy ra do:',
        options: [
            'Nước thấm qua thành cốc ra ngoài',
            'Hơi nước trong không khí ngưng tụ khi tiếp xúc bề mặt lạnh của cốc',
            'Cốc bị nứt nên nước rỉ ra',
            'Do hiện tượng mao dẫn trong thành cốc'
        ],
        correct: 1,
        explanation: `Đây là bài vận dụng kiến thức chuyển thể vào giải thích hiện tượng thực tế:

🔹 Trong không khí xung quanh luôn có HƠI NƯỚC (ở thể khí, mắt thường không nhìn thấy).

🔹 Khi hơi nước tiếp xúc với BỀ MẶT LẠNH của cốc (do nước đá bên trong làm lạnh thành cốc):
   → Nhiệt độ hơi nước giảm đột ngột
   → Hơi nước NGƯNG TỤ: chuyển từ thể KHÍ → thể LỎNG
   → Tạo thành các GIỌT NƯỚC nhỏ bám bên ngoài cốc

🔹 Quá trình này là NGƯNG TỤ — tỏa nhiệt ra môi trường.

❌ Tại sao đáp án khác sai?
• A — Thành cốc thủy tinh/nhựa KHÔNG cho nước thấm qua.
• C — Cốc nguyên vẹn, không nứt.
• D — Mao dẫn chỉ xảy ra trong ống nhỏ hoặc vật liệu xốp, không liên quan.

💡 Các hiện tượng tương tự: Sương mù buổi sáng, giọt sương trên lá, kính xe bị mờ khi trời lạnh — đều là ngưng tụ!`
    },
    {
        id: 14,
        level: 'vandung',
        levelLabel: 'Vận dụng',
        question: 'Viên băng khô (CO₂ rắn) để ngoài không khí sẽ "bốc khói" rồi biến mất mà không để lại chất lỏng. Đây là hiện tượng:',
        options: [
            'Nóng chảy',
            'Bay hơi',
            'Thăng hoa',
            'Ngưng kết'
        ],
        correct: 2,
        explanation: `PHÂN TÍCH HIỆN TƯỢNG:

🔹 Băng khô = CO₂ ở thể RẮN (nhiệt độ −78,5°C).
🔹 Khi để ở áp suất thường, nó BIẾN MẤT mà KHÔNG ĐỂ LẠI CHẤT LỎNG.
🔹 Điều này có nghĩa: RẮN → KHÍ trực tiếp, bỏ qua thể lỏng.

→ Đây là quá trình THĂNG HOA.

📚 Phân biệt rõ:
• Nóng chảy: RẮN → LỎNG (có chất lỏng) → Sai vì không thấy nước
• Bay hơi: LỎNG → KHÍ → Sai vì không qua giai đoạn lỏng
• Thăng hoa: RẮN → KHÍ trực tiếp → ĐÚNG! ✅
• Ngưng kết: KHÍ → RẮN → Ngược chiều, sai

💡 Các ví dụ thăng hoa khác:
• Long não (naphthalene) để trong tủ quần áo lâu ngày → biến mất
• Tuyết/đá biến mất trong ngày nắng khô mà không thấy nước chảy
• Đá khô dùng trong sân khấu tạo "khói" (thực ra là CO₂ khí làm lạnh hơi nước xung quanh)`
    },
    {
        id: 15,
        level: 'vandung',
        levelLabel: 'Vận dụng',
        question: 'Cần cung cấp bao nhiêu nhiệt lượng để đun 0,5 kg nước từ 25°C lên 100°C? Biết c(nước) = 4200 J/(kg.K).',
        options: [
            '105 000 J',
            '157 500 J',
            '210 000 J',
            '315 000 J'
        ],
        correct: 1,
        explanation: `GIẢI CHI TIẾT:

📌 Bước 1 — Xác định dạng bài:
   Đề hỏi "đun từ 25°C lên 100°C" → THAY ĐỔI NHIỆT ĐỘ (không chuyển thể) → dùng Q = m × c × ΔT

📌 Bước 2 — Liệt kê dữ kiện:
   • m = 0,5 kg
   • c = 4200 J/(kg.K) (nhiệt dung riêng của nước)
   • ΔT = T₂ − T₁ = 100 − 25 = 75°C = 75 K

📌 Bước 3 — Tính:
   Q = m × c × ΔT
   Q = 0,5 × 4200 × 75
   Q = 0,5 × 315 000
   Q = 157 500 J ≈ 157,5 kJ

✅ Đáp án: B. 157 500 J

⚠️ Chú ý bẫy thường gặp:
• ΔT = 75 (chênh lệch), KHÔNG phải 100 hay 25!
• Nếu đề hỏi "đun đến sôi hoàn toàn (thành hơi)" thì phải tính THÊM nhiệt hóa hơi Q = L.m nữa.
• 1°C thay đổi = 1 K thay đổi (chỉ khác nhau ở mốc 0, không khác nhau ở ΔT).`
    },

    // ========================
    // MỨC 4: VẬN DỤNG CAO (5 câu)
    // ========================
    {
        id: 16,
        level: 'vandungcao',
        levelLabel: 'Vận dụng cao',
        question: 'Tính tổng nhiệt lượng cần cung cấp để biến 0,2 kg nước đá ở 0°C thành hơi nước ở 100°C. Cho: λ = 3,34×10⁵ J/kg; c = 4200 J/(kg.K); L = 2,26×10⁶ J/kg.',
        options: [
            '150 800 J',
            '518 800 J',
            '535 800 J',
            '602 800 J'
        ],
        correct: 3,
        explanation: `GIẢI CHI TIẾT — BÀI TOÁN TỔNG HỢP 3 GIAI ĐOẠN:

Phải chia quá trình thành 3 giai đoạn riêng biệt:

📌 GIAI ĐOẠN 1: Nóng chảy đá ở 0°C → Nước ở 0°C
   Công thức: Q₁ = λ × m
   Q₁ = 3,34 × 10⁵ × 0,2 = 66 800 J

📌 GIAI ĐOẠN 2: Đun nước từ 0°C → 100°C
   Công thức: Q₂ = m × c × ΔT
   Q₂ = 0,2 × 4200 × (100 − 0) = 0,2 × 4200 × 100 = 84 000 J

📌 GIAI ĐOẠN 3: Hóa hơi nước ở 100°C → Hơi ở 100°C
   Công thức: Q₃ = L × m
   Q₃ = 2,26 × 10⁶ × 0,2 = 452 000 J

📌 TỔNG:
   Q = Q₁ + Q₂ + Q₃
   Q = 66 800 + 84 000 + 452 000
   Q = 602 800 J ≈ 603 kJ

✅ Đáp án: D. 602 800 J

💡 NHẬN XÉT QUAN TRỌNG:
   • Q₃ (452 000 J) >> Q₂ (84 000 J) > Q₁ (66 800 J)
   • Giai đoạn hóa hơi chiếm tới 75% tổng nhiệt lượng!
   • Đây là lý do bỏng hơi nước nguy hiểm hơn bỏng nước sôi rất nhiều.`
    },
    {
        id: 17,
        level: 'vandungcao',
        levelLabel: 'Vận dụng cao',
        question: `Cho đồ thị nhiệt độ - thời gian (T-t) dưới đây, mô tả quá trình đun nóng một chất rắn kết tinh. Đoạn nằm ngang (BC) trên đồ thị ứng với quá trình nào?
<div style="display:flex;justify-content:center;margin:1.2rem 0;">
<svg viewBox="0 0 420 260" width="400" height="250" style="background:#f8f9ff;border-radius:12px;border:1px solid #e0e4f0;">
  <!-- Grid lines -->
  <line x1="60" y1="30" x2="60" y2="220" stroke="#ccc" stroke-width="1"/>
  <line x1="60" y1="220" x2="390" y2="220" stroke="#ccc" stroke-width="1"/>
  <line x1="60" y1="170" x2="390" y2="170" stroke="#e8e8e8" stroke-width="0.5" stroke-dasharray="4,3"/>
  <line x1="60" y1="120" x2="390" y2="120" stroke="#e8e8e8" stroke-width="0.5" stroke-dasharray="4,3"/>
  <line x1="60" y1="70" x2="390" y2="70" stroke="#e8e8e8" stroke-width="0.5" stroke-dasharray="4,3"/>
  <!-- Axes -->
  <line x1="60" y1="220" x2="390" y2="220" stroke="#333" stroke-width="2"/>
  <line x1="60" y1="220" x2="60" y2="25" stroke="#333" stroke-width="2"/>
  <!-- Arrow heads -->
  <polygon points="390,220 383,216 383,224" fill="#333"/>
  <polygon points="60,25 56,32 64,32" fill="#333"/>
  <!-- Axis labels -->
  <text x="395" y="225" font-size="14" fill="#333" font-weight="600">t</text>
  <text x="45" y="22" font-size="14" fill="#333" font-weight="600">T</text>
  <!-- The heating curve -->
  <polyline points="70,200 130,140 230,140 290,80 360,80" fill="none" stroke="#6C5CE7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Points -->
  <circle cx="70" cy="200" r="5" fill="#6C5CE7"/>
  <circle cx="130" cy="140" r="5" fill="#E17055"/>
  <circle cx="230" cy="140" r="5" fill="#E17055"/>
  <circle cx="290" cy="80" r="5" fill="#00B894"/>
  <circle cx="360" cy="80" r="5" fill="#00B894"/>
  <!-- Point labels -->
  <text x="62" y="215" font-size="13" fill="#6C5CE7" font-weight="700">A</text>
  <text x="123" y="157" font-size="13" fill="#E17055" font-weight="700">B</text>
  <text x="232" y="157" font-size="13" fill="#E17055" font-weight="700">C</text>
  <text x="283" y="97" font-size="13" fill="#00B894" font-weight="700">D</text>
  <text x="352" y="97" font-size="13" fill="#00B894" font-weight="700">E</text>
  <!-- Segment labels -->
  <text x="82" y="178" font-size="10" fill="#6C5CE7" font-style="italic">Đun rắn</text>
  <text x="155" y="134" font-size="11" fill="#E17055" font-weight="700">Nóng chảy?</text>
  <text x="245" y="115" font-size="10" fill="#00B894" font-style="italic">Đun lỏng</text>
  <text x="310" y="74" font-size="11" fill="#00B894" font-weight="700">Sôi?</text>
  <!-- Dashed lines to axis -->
  <line x1="130" y1="140" x2="60" y2="140" stroke="#E17055" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="25" y="144" font-size="11" fill="#E17055" font-weight="600">T₁</text>
  <line x1="290" y1="80" x2="60" y2="80" stroke="#00B894" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="25" y="84" font-size="11" fill="#00B894" font-weight="600">T₂</text>
</svg>
</div>`,
        options: [
            'Chất rắn đang được đun nóng, nhiệt độ tăng đều',
            'Chất rắn đang nóng chảy, nhiệt lượng dùng để phá vỡ mạng tinh thể',
            'Chất lỏng đang nguội dần, nhiệt độ giảm đều',
            'Không có quá trình nào xảy ra, hệ ở trạng thái cân bằng'
        ],
        correct: 1,
        explanation: `ĐỌC ĐỒ THỊ T-t (nhiệt độ - thời gian) — DẠNG HAY RA THI:

📊 Phân tích từng đoạn trên đồ thị:

   📈 Đoạn AB (xiên lên): Nhiệt độ TĂNG từ A → B
      → Chất RẮN đang được đun nóng
      → Công thức: Q = m.c(rắn).ΔT

   ➡️ Đoạn BC (NẰM NGANG): Nhiệt độ KHÔNG ĐỔI = T₁ ← ĐÂY LÀ ĐÁP ÁN!
      → Chất rắn đang NÓNG CHẢY (rắn → lỏng)
      → Nhiệt lượng dùng để PHÁ VỠ mạng tinh thể
      → Công thức: Q = λ.m
      → Tại B: bắt đầu chảy (hỗn hợp rắn-lỏng)
      → Tại C: chảy xong hoàn toàn (100% lỏng)

   📈 Đoạn CD (xiên lên): Nhiệt độ TĂNG từ T₁ → T₂
      → Chất LỎNG đang được đun nóng
      → Công thức: Q = m.c(lỏng).ΔT

   ➡️ Đoạn DE (nằm ngang): Nhiệt độ KHÔNG ĐỔI = T₂
      → Chất lỏng đang SÔI (lỏng → khí)
      → Công thức: Q = L.m

✅ Đáp án: B — Đoạn BC nằm ngang = đang nóng chảy.

💡 MẸO NHỚ:
   • Đoạn XIÊN = thay đổi nhiệt độ (đun nóng/làm lạnh)
   • Đoạn NGANG = CHUYỂN THỂ (nhiệt độ không đổi)
   • Đoạn ngang thứ 1 (BC): NÓNG CHẢY
   • Đoạn ngang thứ 2 (DE): SÔI

❌ A sai: Khi đun nóng, nhiệt độ tăng → đoạn XIÊN, không nằm ngang.
❌ C sai: Đề nói "đun nóng" → đồ thị đi LÊN, không phải đi xuống.
❌ D sai: Vẫn CÓ quá trình xảy ra — chuyển thể nóng chảy.`
    },
    {
        id: 18,
        level: 'vandungcao',
        levelLabel: 'Vận dụng cao',
        question: 'So sánh nhiệt lượng cần cung cấp cho 3 giai đoạn: (1) nóng chảy 1 kg đá ở 0°C, (2) đun 1 kg nước từ 0°C lên 100°C, (3) hóa hơi 1 kg nước ở 100°C. Cho λ = 3,34×10⁵ J/kg, c = 4200 J/(kg.K), L = 2,26×10⁶ J/kg. Thứ tự đúng là:',
        options: [
            'Q₁ > Q₂ > Q₃',
            'Q₃ > Q₂ > Q₁',
            'Q₂ > Q₃ > Q₁',
            'Q₃ > Q₁ > Q₂'
        ],
        correct: 1,
        explanation: `GIẢI CHI TIẾT — SO SÁNH NĂNG LƯỢNG 3 GIAI ĐOẠN:

📌 Tính từng giai đoạn (m = 1 kg):

   GIAI ĐOẠN 1 — Nóng chảy:
   Q₁ = λ × m = 3,34 × 10⁵ × 1 = 334 000 J = 334 kJ

   GIAI ĐOẠN 2 — Đun nước 0°C → 100°C:
   Q₂ = m × c × ΔT = 1 × 4200 × 100 = 420 000 J = 420 kJ

   GIAI ĐOẠN 3 — Hóa hơi:
   Q₃ = L × m = 2,26 × 10⁶ × 1 = 2 260 000 J = 2260 kJ

📌 So sánh:
   Q₃ (2260 kJ) >> Q₂ (420 kJ) > Q₁ (334 kJ)

   → Thứ tự: Q₃ > Q₂ > Q₁

✅ Đáp án: B

💡 Ý NGHĨA THỰC TẾ:
   • Hóa hơi cần năng lượng GẤP gần 7 LẦN nóng chảy!
   • Đây là lý do nấu nước: đợi sôi thì nhanh, nhưng đợi cạn thì rất lâu.
   • Cũng là lý do bỏng hơi nước nguy hiểm hơn bỏng nước sôi: khi hơi nước ngưng tụ trên da, nó tỏa ra năng lượng khổng lồ (L rất lớn).`
    },
    {
        id: 19,
        level: 'vandungcao',
        levelLabel: 'Vận dụng cao',
        question: 'Một bình kín chứa nước ở 100°C và hơi nước bão hòa. Nếu tiếp tục cung cấp nhiệt cho bình, điều gì sẽ xảy ra?',
        options: [
            'Nước sôi mãnh liệt và hơi thoát ra ngoài',
            'Nhiệt độ và áp suất trong bình tăng, nước sôi ở nhiệt độ cao hơn 100°C',
            'Nước ngừng bay hơi vì đã đạt trạng thái cân bằng',
            'Nhiệt độ không đổi vì nước đang sôi'
        ],
        correct: 1,
        explanation: `BÀI TOÁN TƯ DUY — LIÊN HỆ THỰC TẾ NỒI ÁP SUẤT:

🔹 Trong bình HỞ (nồi thường):
   • Hơi nước thoát ra ngoài → áp suất không đổi (= áp suất khí quyển)
   • Nước sôi ở 100°C, nhiệt độ không tăng dù đun tiếp
   → Đáp án D đúng cho trường hợp này

🔹 Nhưng đề nói bình KÍN:
   • Hơi nước KHÔNG thoát ra được → tích tụ trong bình
   • Áp suất hơi nước TĂNG
   • Mà nhiệt độ sôi PHỤ THUỘC áp suất: áp suất cao → nhiệt độ sôi cao
   • → Nước NGỪNG SÔI ở 100°C (vì áp suất đã tăng, nhiệt độ sôi mới cao hơn 100°C)
   • Tiếp tục cấp nhiệt → nhiệt độ TĂNG vượt 100°C → đến nhiệt độ sôi mới → lại sôi

✅ Đáp án: B — Nhiệt độ và áp suất tăng, nước sôi ở nhiệt độ > 100°C.

💡 ỨNG DỤNG THỰC TẾ:
   • NỒI ÁP SUẤT hoạt động theo nguyên lý này: bình kín → áp suất tăng → nước sôi ở 120-130°C → thức ăn chín nhanh hơn.
   • Van an toàn trên nồi áp suất: xả hơi khi áp suất quá cao → tránh nổ.`
    },
    {
        id: 20,
        level: 'vandungcao',
        levelLabel: 'Vận dụng cao',
        question: 'Cần ít nhất bao nhiêu nhiệt lượng để biến 0,1 kg nước đá ở −10°C thành hơi nước ở 100°C? Cho: c(đá) = 2100 J/(kg.K); λ = 3,34×10⁵ J/kg; c(nước) = 4200 J/(kg.K); L = 2,26×10⁶ J/kg.',
        options: [
            '228 900 J',
            '300 900 J',
            '303 500 J',
            '308 900 J'
        ],
        correct: 2,
        explanation: `GIẢI CHI TIẾT — BÀI TOÁN TỔNG HỢP 4 GIAI ĐOẠN (DẠNG KHÓ NHẤT):

Phải chia thành 4 giai đoạn, mỗi giai đoạn dùng công thức khác nhau:

📌 GIAI ĐOẠN 1: Đun đá từ −10°C → 0°C (chưa chảy, chỉ tăng nhiệt độ)
   Công thức: Q₁ = m × c(đá) × ΔT
   Q₁ = 0,1 × 2100 × [0 − (−10)] = 0,1 × 2100 × 10
   Q₁ = 2 100 J

📌 GIAI ĐOẠN 2: Nóng chảy đá ở 0°C → Nước ở 0°C
   Công thức: Q₂ = λ × m
   Q₂ = 3,34 × 10⁵ × 0,1 = 33 400 J

📌 GIAI ĐOẠN 3: Đun nước từ 0°C → 100°C
   Công thức: Q₃ = m × c(nước) × ΔT
   Q₃ = 0,1 × 4200 × (100 − 0) = 0,1 × 4200 × 100
   Q₃ = 42 000 J

📌 GIAI ĐOẠN 4: Hóa hơi nước ở 100°C → Hơi ở 100°C
   Công thức: Q₄ = L × m
   Q₄ = 2,26 × 10⁶ × 0,1 = 226 000 J

📌 TỔNG:
   Q = Q₁ + Q₂ + Q₃ + Q₄
   Q = 2 100 + 33 400 + 42 000 + 226 000
   Q = 303 500 J ≈ 303,5 kJ

✅ Đáp án: C. 303 500 J

💡 LƯU Ý KHI LÀM DẠNG NÀY:
   1. Luôn vẽ "hành trình" trên giấy nháp: −10°C → 0°C → 0°C(lỏng) → 100°C → 100°C(hơi)
   2. Mỗi mũi tên → 1 công thức riêng
   3. Giai đoạn ĐỔI NHIỆT ĐỘ: dùng Q = m.c.ΔT
   4. Giai đoạn CHUYỂN THỂ: dùng Q = λ.m hoặc Q = L.m
   5. Chú ý: c(đá) ≠ c(nước) — đá có nhiệt dung riêng KHÁC nước!`
    }
];

// ========== QUIZ ENGINE ==========

let currentQuestion = 0;
let userAnswers = [];
let quizStarted = false;
let quizSubmitted = false;
let reviewMode = false;

function initQuiz() {
    document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
    document.getElementById('retryQuizBtn').addEventListener('click', retryQuiz);
    document.getElementById('reviewQuizBtn').addEventListener('click', startReview);
    document.getElementById('prevQuestionBtn').addEventListener('click', () => goToQuestion(currentQuestion - 1));
    document.getElementById('nextQuestionBtn2').addEventListener('click', () => goToQuestion(currentQuestion + 1));
    document.getElementById('submitQuizBtn').addEventListener('click', handleSubmit);
    document.getElementById('warningGoBack').addEventListener('click', closeWarning);
    document.getElementById('warningSubmit').addEventListener('click', forceSubmit);
    document.getElementById('resultsTotalScore').textContent = quizData.length;
}

function startQuiz() {
    quizStarted = true;
    quizSubmitted = false;
    reviewMode = false;
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(-1);

    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizNavigator').style.display = 'block';
    document.getElementById('quizContainer').classList.add('active');
    document.getElementById('quizBottomNav').style.display = 'flex';
    document.getElementById('submitQuizBtn').style.display = 'none';

    buildNavigator();
    showQuestion();
}

function buildNavigator() {
    const grid = document.getElementById('quizNavGrid');
    grid.innerHTML = '';
    for (let i = 0; i < quizData.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'quiz-nav-btn';
        btn.textContent = i + 1;
        btn.dataset.index = i;
        btn.addEventListener('click', () => goToQuestion(i));
        grid.appendChild(btn);
    }
    updateNavigator();
}

function updateNavigator() {
    const btns = document.querySelectorAll('.quiz-nav-btn');
    const answeredCount = userAnswers.filter(a => a !== -1).length;

    btns.forEach((btn, i) => {
        btn.classList.remove('nav-current', 'nav-answered');
        if (i === currentQuestion) btn.classList.add('nav-current');
        if (userAnswers[i] !== -1) btn.classList.add('nav-answered');
    });

    document.getElementById('quizNavCount').textContent = answeredCount + '/' + quizData.length + ' đã làm';

    const submitBtn = document.getElementById('submitQuizBtn');
    if (answeredCount === quizData.length && !quizSubmitted && !reviewMode) {
        submitBtn.style.display = 'inline-flex';
    } else if (!quizSubmitted) {
        submitBtn.style.display = 'none';
    }

    document.getElementById('prevQuestionBtn').disabled = currentQuestion === 0;
    document.getElementById('nextQuestionBtn2').disabled = currentQuestion === quizData.length - 1;
}

function goToQuestion(index) {
    if (index < 0 || index >= quizData.length) return;
    currentQuestion = index;
    showQuestion();
    document.getElementById('quizNavigator').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showQuestion() {
    const q = quizData[currentQuestion];
    const container = document.getElementById('quizContainer');
    const hasAnswered = userAnswers[currentQuestion] !== -1;
    const showFeedback = hasAnswered && (quizSubmitted || reviewMode || hasAnswered);
    const levelClass = 'level-' + q.level;

    let optionsHtml = q.options.map((opt, i) => {
        let extraClass = '';
        if (hasAnswered) {
            extraClass = ' disabled';
            if (i === q.correct) extraClass += ' correct';
            if (i === userAnswers[currentQuestion] && i !== q.correct) extraClass += ' incorrect';
        }
        return '<button class="quiz-option' + extraClass + '" data-index="' + i + '" ' + (hasAnswered ? 'disabled' : '') + '>' +
            '<span class="quiz-option-letter">' + String.fromCharCode(65 + i) + '</span>' +
            '<span class="quiz-option-text">' + opt + '</span>' +
            '</button>';
    }).join('');

    let feedbackHtml = '';
    if (showFeedback) {
        const isCorrect = userAnswers[currentQuestion] === q.correct;
        const explanationText = q.explanation.replace(/\n/g, '<br>');
        feedbackHtml = '<div class="quiz-feedback" style="display:block;">' +
            '<div class="feedback-result ' + (isCorrect ? 'feedback-correct' : 'feedback-incorrect') + '">' +
            '<div class="feedback-icon">' + (isCorrect ? '✅' : '❌') + '</div>' +
            '<div class="feedback-text"><strong>' + (isCorrect ? 'Chính xác!' : 'Chưa đúng!') + '</strong>' +
            (!isCorrect ? '<br>Đáp án đúng: <strong>' + String.fromCharCode(65 + q.correct) + '. ' + q.options[q.correct] + '</strong>' : '') +
            '</div></div>' +
            '<div class="feedback-explanation"><strong>💡 GIẢI THÍCH CHI TIẾT:</strong><br><br>' + explanationText + '</div>' +
            '</div>';
    }

    container.innerHTML = '<div class="quiz-question">' +
        '<div class="quiz-level-badge ' + levelClass + '">' + q.levelLabel + '</div>' +
        '<div class="quiz-question-header"><span class="quiz-question-num">Câu ' + (currentQuestion + 1) + '/' + quizData.length + '</span></div>' +
        '<h3 class="quiz-question-text">' + q.question + '</h3>' +
        '<div class="quiz-options">' + optionsHtml + '</div>' +
        feedbackHtml +
        '</div>';

    if (!hasAnswered && !quizSubmitted) {
        container.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
        });
    }

    updateNavigator();
}

function handleAnswer(selectedIndex) {
    if (userAnswers[currentQuestion] !== -1 || quizSubmitted) return;
    userAnswers[currentQuestion] = selectedIndex;
    showQuestion();

    const feedback = document.querySelector('.quiz-feedback');
    if (feedback) {
        setTimeout(() => feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
    }
}

function handleSubmit() {
    const unanswered = [];
    userAnswers.forEach((a, i) => { if (a === -1) unanswered.push(i); });

    if (unanswered.length > 0) {
        showWarning(unanswered);
    } else {
        submitQuiz();
    }
}

function showWarning(unansweredIndices) {
    const overlay = document.getElementById('quizWarningOverlay');
    document.getElementById('quizWarningText').textContent = 'Bạn còn ' + unansweredIndices.length + ' câu chưa trả lời:';

    const list = document.getElementById('quizWarningList');
    list.innerHTML = unansweredIndices.map(i =>
        '<span class="warning-num" data-index="' + i + '">' + (i + 1) + '</span>'
    ).join('');

    list.querySelectorAll('.warning-num').forEach(num => {
        num.addEventListener('click', () => {
            closeWarning();
            goToQuestion(parseInt(num.dataset.index));
        });
    });

    overlay.style.display = 'flex';
}

function closeWarning() {
    document.getElementById('quizWarningOverlay').style.display = 'none';
}

function forceSubmit() {
    closeWarning();
    submitQuiz();
}

function submitQuiz() {
    quizSubmitted = true;

    let score = 0;
    const levelScores = {
        'nhanbiết': { correct: 0, total: 0 },
        'thonghieu': { correct: 0, total: 0 },
        'vandung': { correct: 0, total: 0 },
        'vandungcao': { correct: 0, total: 0 }
    };

    quizData.forEach((q, i) => {
        if (levelScores[q.level]) levelScores[q.level].total++;
        if (userAnswers[i] === q.correct) {
            score++;
            if (levelScores[q.level]) levelScores[q.level].correct++;
        }
    });

    document.getElementById('quizContainer').innerHTML = '';
    document.getElementById('quizContainer').classList.remove('active');
    document.getElementById('quizNavigator').style.display = 'none';
    document.getElementById('quizBottomNav').style.display = 'none';

    const percent = (score / quizData.length) * 100;
    let icon, title, message;

    if (percent >= 90) {
        icon = '🏆'; title = 'Xuất sắc!';
        message = 'Nắm vững toàn bộ kiến thức Bài 1. Sẵn sàng cho kiểm tra!';
    } else if (percent >= 75) {
        icon = '🎉'; title = 'Giỏi lắm!';
        message = 'Hiểu tốt phần lớn. Xem lại các câu sai nhé!';
    } else if (percent >= 50) {
        icon = '📚'; title = 'Khá ổn!';
        message = 'Cần ôn lại lý thuyết và luyện thêm bài tập.';
    } else {
        icon = '💪'; title = 'Cần cố gắng thêm!';
        message = 'Đọc lại lý thuyết rồi làm lại nhé!';
    }

    document.getElementById('resultsIcon').textContent = icon;
    document.getElementById('resultsTitle').textContent = title;
    document.getElementById('resultsScore').textContent = score;
    document.getElementById('resultsMessage').textContent = message;

    const levelNames = {
        'nhanbiết': '🟢 Nhận biết',
        'thonghieu': '🔵 Thông hiểu',
        'vandung': '🟠 Vận dụng',
        'vandungcao': '🔴 Vận dụng cao'
    };

    let html = '<div class="results-level-breakdown">';
    Object.entries(levelScores).forEach(([key, val]) => {
        html += '<div class="results-level-item"><span>' + levelNames[key] + '</span><span class="level-score">' + val.correct + '/' + val.total + '</span></div>';
    });
    html += '</div>';
    document.getElementById('resultsBreakdown').innerHTML = html;

    document.getElementById('quizResults').style.display = 'block';
    document.getElementById('quizResults').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function startReview() {
    reviewMode = true;
    currentQuestion = 0;

    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizNavigator').style.display = 'block';
    document.getElementById('quizContainer').classList.add('active');
    document.getElementById('quizBottomNav').style.display = 'flex';
    document.getElementById('submitQuizBtn').style.display = 'none';

    buildNavigator();
    const btns = document.querySelectorAll('.quiz-nav-btn');
    btns.forEach((btn, i) => {
        btn.style.borderColor = userAnswers[i] === quizData[i].correct ? 'var(--success)' : 'var(--error)';
        btn.style.background = userAnswers[i] === quizData[i].correct ? 'var(--success-bg)' : 'var(--error-light, #ffe5e5)';
        btn.style.color = userAnswers[i] === quizData[i].correct ? 'var(--success)' : 'var(--error)';
    });

    showQuestion();
    document.getElementById('quizNavigator').scrollIntoView({ behavior: 'smooth' });
}

function retryQuiz() {
    startQuiz();
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
}

// ========== LESSON ACCORDION ==========

function initLessons() {
    document.querySelectorAll('.lesson-header').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.lesson-card');
            const content = card.querySelector('.lesson-content');
            const isOpen = header.getAttribute('aria-expanded') === 'true';

            document.querySelectorAll('.lesson-card').forEach(c => {
                c.querySelector('.lesson-header').setAttribute('aria-expanded', 'false');
                c.querySelector('.lesson-content').style.maxHeight = null;
                c.classList.remove('open');
            });

            if (!isOpen) {
                header.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
                card.classList.add('open');
                setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
        });
    });
}

// ========== NAVIGATION ==========

function initNav() {
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    window.addEventListener('scroll', () => nav.classList.toggle('nav-scrolled', window.scrollY > 50));

    if (toggle) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('active');
            toggle.classList.remove('active');
        });
    });
}

// ========== READING PROGRESS ==========

function initProgress() {
    const bar = document.getElementById('readingProgress');
    window.addEventListener('scroll', () => {
        bar.style.width = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100) + '%';
    });
}

// ========== BACK TO TOP ==========

function initBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 500));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ========== PARTICLES ==========

function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = 'left:' + (Math.random()*100) + '%;top:' + (Math.random()*100) + '%;width:' + (4+Math.random()*6) + 'px;height:' + (4+Math.random()*6) + 'px;animation-delay:' + (Math.random()*8) + 's;animation-duration:' + (10+Math.random()*15) + 's;opacity:' + (0.15+Math.random()*0.25);
        container.appendChild(p);
    }
}

// ========== INIT ==========

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initLessons();
    initQuiz();
    initProgress();
    initBackToTop();
    initParticles();
});
