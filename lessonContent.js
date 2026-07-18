// ═══════════════════════════════════════════════════════════════
// LESSON CONTENT — Bài giảng lý thuyết chuyên sâu
// Hỗ trợ làm bài vận dụng & vận dụng cao
// ═══════════════════════════════════════════════════════════════

const LESSON_CONTENT = {
    1: `
<h3>🔬 Chủ đề 1: Cấu trúc của chất – Sự chuyển thể</h3>

<h4>I. TÓM TẮT LÝ THUYẾT TRỌNG TÂM</h4>

<h4>1. Mô hình động học phân tử về cấu tạo chất</h4>
<ul>
    <li><strong>Các chất</strong> được cấu tạo từ các hạt riêng biệt là <strong>phân tử</strong> (nguyên tử, ion).</li>
    <li>Các phân tử <strong>chuyển động hỗn loạn, không ngừng</strong> → gọi là <strong>chuyển động nhiệt</strong>.</li>
    <li><strong>Nhiệt độ càng cao</strong> → tốc độ chuyển động của phân tử <strong>càng lớn</strong>.</li>
    <li>Giữa các phân tử có <strong>lực hút và đẩy</strong> (lực liên kết phân tử):
        <ul>
            <li>Khi khoảng cách giữa các phân tử <strong>nhỏ hơn</strong> khoảng cách cân bằng → lực <strong>đẩy</strong> chiếm ưu thế</li>
            <li>Khi khoảng cách <strong>lớn hơn</strong> khoảng cách cân bằng → lực <strong>hút</strong> chiếm ưu thế</li>
            <li>Khi khoảng cách <strong>rất lớn</strong> → lực tương tác <strong>không đáng kể</strong></li>
        </ul>
    </li>
</ul>

<div class="note-box">⚠️ <strong>BẪY ĐỀ THI:</strong> "Tốc độ chuyển động phân tử càng lớn thì thể tích càng lớn" → <strong>SAI!</strong> Nhiệt độ cao → tốc độ lớn, nhưng thể tích phụ thuộc bình chứa (đối với khí).</div>

<h4>2. Cấu trúc chất rắn, lỏng, khí</h4>
<table>
    <tr><th>Đặc điểm</th><th>Thể rắn</th><th>Thể lỏng</th><th>Thể khí</th></tr>
    <tr><td>Khoảng cách PT</td><td>Rất gần (≈ kích thước PT)</td><td>Xa hơn thể rắn</td><td>Rất xa (hàng chục lần kích thước)</td></tr>
    <tr><td>Sắp xếp</td><td>Có trật tự (mạng tinh thể)</td><td>Kém trật tự</td><td>Không trật tự</td></tr>
    <tr><td>Chuyển động</td><td>Dao động quanh VTCB <strong>cố định</strong></td><td>Dao động quanh VTCB <strong>luôn thay đổi</strong></td><td>Chuyển động <strong>hỗn loạn</strong></td></tr>
    <tr><td>Hình dạng</td><td>Xác định</td><td>Phụ thuộc bình chứa</td><td>Phụ thuộc bình chứa</td></tr>
    <tr><td>Thể tích</td><td>Xác định</td><td>Xác định</td><td>Phụ thuộc bình chứa</td></tr>
    <tr><td>Lực liên kết</td><td><strong>Mạnh nhất</strong></td><td>Yếu hơn rắn</td><td><strong>Yếu nhất</strong></td></tr>
</table>

<h4>3. Sự chuyển thể (Chuyển pha)</h4>
<ul>
    <li><strong>Nóng chảy</strong>: rắn → lỏng (thu nhiệt) | <strong>Đông đặc</strong>: lỏng → rắn (tỏa nhiệt)</li>
    <li><strong>Hóa hơi</strong>: lỏng → khí (thu nhiệt) | <strong>Ngưng tụ</strong>: khí → lỏng (tỏa nhiệt)</li>
    <li><strong>Thăng hoa</strong>: rắn → khí (thu nhiệt) | <strong>Ngưng kết</strong>: khí → rắn (tỏa nhiệt)</li>
</ul>

<div class="note-box">💡 <strong>PHÂN BIỆT QUAN TRỌNG:</strong><br>
• <strong>Bay hơi</strong>: xảy ra ở <strong>mặt thoáng</strong>, ở mọi nhiệt độ, tốc độ bay hơi tăng khi: nhiệt độ tăng, gió mạnh, diện tích mặt thoáng lớn.<br>
• <strong>Sôi</strong>: xảy ra trong <strong>toàn bộ khối chất lỏng</strong>, ở nhiệt độ sôi xác định (phụ thuộc áp suất).</div>

<h4>4. Chất rắn kết tinh và vô định hình</h4>
<table>
    <tr><th>Tiêu chí</th><th>Chất rắn kết tinh</th><th>Chất rắn vô định hình</th></tr>
    <tr><td>Cấu trúc</td><td>Có mạng tinh thể</td><td>Không có mạng tinh thể</td></tr>
    <tr><td>Nhiệt độ nóng chảy</td><td><strong>Xác định</strong></td><td><strong>Không xác định</strong> (mềm dần)</td></tr>
    <tr><td>Tính chất</td><td>Đơn tinh thể: <strong>dị hướng</strong><br>Đa tinh thể: <strong>đẳng hướng</strong></td><td><strong>Đẳng hướng</strong></td></tr>
    <tr><td>Ví dụ</td><td>Muối, thạch anh, kim cương, kim loại</td><td>Thủy tinh, nhựa, cao su, sáp nến</td></tr>
</table>

<div class="note-box">⚠️ <strong>HAY THI:</strong> Đơn tinh thể (1 tinh thể lớn) → tính <strong>dị hướng</strong> (tính chất khác nhau theo các phương). Đa tinh thể (nhiều tinh thể nhỏ sắp xếp lộn xộn) → tính <strong>đẳng hướng</strong> (như vô định hình).</div>

<h4>II. CÁC DẠNG BÀI TẬP & VÍ DỤ MẪU</h4>

<h4>Dạng 1: Nhận biết đặc điểm thể rắn/lỏng/khí</h4>
<div class="example-box">
<strong>Ví dụ:</strong> Phát biểu nào sau đây là <strong>sai</strong>?<br>
A. Ở thể khí, các phân tử chuyển động hỗn loạn.<br>
B. Ở thể rắn, các phân tử dao động quanh VTCB cố định.<br>
C. Ở thể lỏng, các phân tử dao động quanh VTCB luôn thay đổi.<br>
D. Ở thể khí, khoảng cách giữa các phân tử nhỏ hơn kích thước phân tử.<br>
<strong>→ Đáp án: D</strong> (Ở thể khí, khoảng cách giữa các phân tử <strong>rất lớn</strong>, gấp hàng chục lần kích thước).
</div>

<h4>Dạng 2: Phân biệt hiện tượng chuyển thể</h4>
<div class="example-box">
<strong>Ví dụ (THPTQG):</strong> Khi lấy chai nước ra khỏi tủ lạnh, bề mặt chai xuất hiện lớp nước. Đây là hiện tượng gì?<br>
<strong>→ Đáp án: Ngưng tụ</strong> (Hơi nước trong không khí gặp bề mặt lạnh → ngưng tụ thành giọt nước).<br>
⚠️ Không phải "nóng chảy" (nóng chảy là rắn→lỏng). Không phải "ngưng kết" (ngưng kết là khí→rắn).
</div>

<h4>Dạng 3: Giải thích hiện tượng thực tế</h4>
<div class="example-box">
<strong>Ví dụ:</strong> Quả bóng bàn bị móp (chưa thủng) khi thả vào nước nóng sẽ phồng trở lại vì:<br>
<strong>→ Nội năng của khí trong bóng tăng lên</strong> → phân tử khí chuyển động mạnh hơn → thực hiện công đẩy vỏ bóng → bóng phồng lại.<br>
📌 Đây là ví dụ về thay đổi nội năng bằng <strong>truyền nhiệt</strong>.
</div>

<h4>Dạng 4: Đọc đồ thị chuyển thể</h4>
<div class="example-box">
<strong>Mẹo đọc đồ thị T-t (nhiệt độ - thời gian):</strong><br>
• Đoạn <strong>nằm ngang</strong> → đang chuyển thể (nóng chảy hoặc sôi), nhiệt độ <strong>không đổi</strong>.<br>
• Đoạn <strong>đi lên</strong> → đang tăng nhiệt độ (chưa/đã chuyển thể xong).<br>
• Điểm bắt đầu nằm ngang = <strong>nhiệt độ nóng chảy</strong> (hoặc nhiệt độ sôi).
</div>
    `,
    2: `
<h3>⚡ Chủ đề 2: Nội năng – Định luật I Nhiệt động lực học</h3>

<h4>I. TÓM TẮT LÝ THUYẾT TRỌNG TÂM</h4>

<h4>1. Nội năng</h4>
<ul>
    <li><strong>Nội năng</strong> (U) của vật là <strong>tổng động năng</strong> chuyển động nhiệt của các phân tử và <strong>thế năng tương tác</strong> giữa các phân tử cấu tạo nên vật.</li>
    <li>Nội năng phụ thuộc vào <strong>nhiệt độ</strong> và <strong>thể tích</strong> của vật.</li>
    <li>Đối với <strong>khí lí tưởng</strong>: nội năng <strong>chỉ phụ thuộc nhiệt độ</strong> (vì lực tương tác phân tử = 0).</li>
</ul>

<div class="note-box">⚠️ <strong>BẪY ĐỀ THI:</strong> "Nội năng không đổi khi thể tích không đổi" → <strong>SAI!</strong> Nội năng phụ thuộc <strong>cả nhiệt độ VÀ thể tích</strong>. Nội năng không đổi khi <strong>cả nhiệt độ VÀ thể tích đều không đổi</strong>.</div>

<h4>2. Hai cách làm thay đổi nội năng</h4>
<table>
    <tr><th>Cách</th><th>Bản chất</th><th>Ví dụ</th></tr>
    <tr><td><strong>Thực hiện công</strong></td><td>Năng lượng truyền qua lực cơ học</td><td>Cọ xát tay → nóng, nén khí → khí nóng, bơm xe đạp → đầu bơm nóng</td></tr>
    <tr><td><strong>Truyền nhiệt</strong></td><td>Năng lượng truyền trực tiếp từ vật nóng sang vật lạnh</td><td>Nhúng thìa lạnh vào nước nóng, phơi nắng</td></tr>
</table>

<div class="note-box">💡 <strong>3 hình thức truyền nhiệt:</strong><br>
• <strong>Dẫn nhiệt</strong>: truyền qua tiếp xúc (chủ yếu trong chất rắn)<br>
• <strong>Đối lưu</strong>: truyền qua dòng chất lỏng/khí<br>
• <strong>Bức xạ nhiệt</strong>: truyền qua sóng điện từ (không cần môi trường)</div>

<h4>3. Định luật I Nhiệt động lực học</h4>
<div class="formula-box">ΔU = A + Q</div>
<ul>
    <li><strong>ΔU</strong>: độ biến thiên nội năng (J)</li>
    <li><strong>A</strong>: công mà vật <strong>nhận được</strong></li>
    <li><strong>Q</strong>: nhiệt lượng mà vật <strong>nhận được</strong></li>
</ul>

<h4>4. QUY ƯỚC DẤU — SIÊU QUAN TRỌNG</h4>
<table>
    <tr><th>Đại lượng</th><th>Dương (+)</th><th>Âm (−)</th></tr>
    <tr><td><strong>A</strong></td><td>Vật <strong>nhận công</strong> (bị nén)</td><td>Vật <strong>sinh công</strong> (giãn nở)</td></tr>
    <tr><td><strong>Q</strong></td><td>Vật <strong>nhận nhiệt</strong> (thu nhiệt)</td><td>Vật <strong>tỏa nhiệt</strong></td></tr>
    <tr><td><strong>ΔU</strong></td><td>Nội năng <strong>tăng</strong></td><td>Nội năng <strong>giảm</strong></td></tr>
</table>

<h4>5. Các trường hợp đặc biệt</h4>
<table>
    <tr><th>Trường hợp</th><th>Điều kiện</th><th>Công thức</th><th>Ý nghĩa</th></tr>
    <tr><td>Chỉ truyền nhiệt</td><td>A = 0</td><td>ΔU = Q</td><td>Hệ không thực hiện/nhận công</td></tr>
    <tr><td>Chỉ thực hiện công</td><td>Q = 0</td><td>ΔU = A</td><td>Hệ cách nhiệt hoàn toàn</td></tr>
    <tr><td>Hệ cô lập</td><td>A = 0, Q = 0</td><td>ΔU = 0</td><td>Nội năng bảo toàn</td></tr>
    <tr><td>Quá trình đẳng nhiệt</td><td>ΔU = 0</td><td>A = −Q</td><td>Công nhận = nhiệt tỏa</td></tr>
</table>

<h4>II. CÁC DẠNG BÀI TẬP & VÍ DỤ MẪU</h4>

<h4>Dạng 1: Xác định dấu của A, Q, ΔU</h4>
<div class="example-box">
<strong>Ví dụ:</strong> Người ta thực hiện công 100 J để nén khí trong xilanh và khí tỏa ra nhiệt lượng 20 J. Nội năng của khí thay đổi bao nhiêu?<br><br>
<strong>Giải:</strong><br>
• Khí <strong>nhận công</strong> (bị nén) → A = +100 J<br>
• Khí <strong>tỏa nhiệt</strong> → Q = −20 J<br>
• ΔU = A + Q = 100 + (−20) = <strong>+80 J</strong><br>
→ Nội năng <strong>tăng</strong> 80 J. ✅
</div>

<h4>Dạng 2: Động cơ nhiệt</h4>
<div class="example-box">
<strong>Ví dụ:</strong> Khí trong xilanh nhận nhiệt lượng 1500 J và giãn nở sinh công 600 J. Tính ΔU.<br><br>
<strong>Giải:</strong><br>
• Q = +1500 J (nhận nhiệt)<br>
• A = −600 J (sinh công = giãn nở = công âm)<br>
• ΔU = A + Q = −600 + 1500 = <strong>+900 J</strong>
</div>

<div class="note-box">🎯 <strong>MẸO GIẢI NHANH:</strong><br>
1. Đọc đề → xác định vật đang xét là gì (khí, nước, kim loại...)<br>
2. Xác định A: nhận công (+) hay sinh công (−)?<br>
3. Xác định Q: nhận nhiệt (+) hay tỏa nhiệt (−)?<br>
4. Áp dụng ΔU = A + Q → xác định nội năng tăng hay giảm.</div>

<h4>Dạng 3: Bài toán ngược — Tìm A hoặc Q</h4>
<div class="example-box">
<strong>Ví dụ (Vận dụng cao):</strong> Một bình kín chứa khí được đun nóng, nội năng tăng 500 J. Biết khí giãn nở sinh công 200 J. Tính nhiệt lượng khí nhận được.<br><br>
<strong>Giải:</strong><br>
• ΔU = +500 J<br>
• A = −200 J (sinh công)<br>
• ΔU = A + Q → 500 = −200 + Q → Q = <strong>700 J</strong><br>
→ Khí nhận nhiệt lượng 700 J.
</div>
    `,
    3: `
<h3>🌡️ Chủ đề 3: Nhiệt độ – Thang nhiệt độ – Nhiệt kế</h3>

<h4>I. TÓM TẮT LÝ THUYẾT TRỌNG TÂM</h4>

<h4>1. Nhiệt độ</h4>
<ul>
    <li><strong>Nhiệt độ</strong> là đại lượng vật lý đặc trưng cho <strong>mức độ chuyển động nhiệt</strong> của các phân tử.</li>
    <li>Vật nóng hơn → nhiệt độ cao hơn → phân tử chuyển động nhanh hơn.</li>
    <li>Nhiệt độ là <strong>đại lượng vô hướng</strong>, có giá trị thấp nhất (0 K).</li>
</ul>

<h4>2. Ba thang nhiệt độ</h4>
<table>
    <tr><th>Thang</th><th>Đơn vị</th><th>Đóng băng nước</th><th>Sôi nước</th><th>Đặc điểm</th></tr>
    <tr><td>Celsius</td><td>°C</td><td>0°C</td><td>100°C</td><td>Phổ biến nhất</td></tr>
    <tr><td>Fahrenheit</td><td>°F</td><td>32°F</td><td>212°F</td><td>Dùng ở Mỹ, Anh</td></tr>
    <tr><td>Kelvin</td><td>K</td><td>273 K</td><td>373 K</td><td>Thang SI, không có số âm</td></tr>
</table>

<h4>3. Công thức chuyển đổi — PHẢI THUỘC</h4>
<div class="formula-box">T(K) = t(°C) + 273</div>
<div class="formula-box">t(°F) = 1,8 × t(°C) + 32</div>
<div class="formula-box">t(°C) = (t(°F) − 32) / 1,8</div>

<div class="note-box">💡 <strong>LƯU Ý QUAN TRỌNG:</strong><br>
• <strong>Độ biến thiên nhiệt độ</strong>: ΔT(K) = Δt(°C) → <strong>bằng nhau!</strong><br>
• Nhưng ΔT(K) ≠ Δt(°F). Phải cẩn thận khi đề cho Fahrenheit.<br>
• 1 K = 1°C về <strong>khoảng cách</strong> trên thang đo.</div>

<h4>4. Nhiệt kế</h4>
<ul>
    <li>Nguyên tắc: dựa trên <strong>sự giãn nở vì nhiệt</strong> hoặc tính chất điện.</li>
    <li>Các loại: nhiệt kế thủy ngân, nhiệt kế rượu, nhiệt kế điện tử, nhiệt kế hồng ngoại.</li>
    <li>Nhiệt kế y tế: thang 35°C–42°C, độ chia nhỏ nhất 0,1°C.</li>
</ul>

<div class="note-box">⚠️ <strong>ĐỘ KHÔNG TUYỆT ĐỐI:</strong> 0 K = −273,15°C ≈ −273°C. Đây là nhiệt độ thấp nhất trong tự nhiên. Tại 0 K, phân tử ngừng chuyển động nhiệt.</div>

<h4>II. CÁC DẠNG BÀI TẬP & VÍ DỤ MẪU</h4>

<h4>Dạng 1: Chuyển đổi thang nhiệt độ</h4>
<div class="example-box">
<strong>Ví dụ 1:</strong> Đổi 37°C sang K và °F.<br>
• T = 37 + 273 = <strong>310 K</strong><br>
• t(°F) = 1,8 × 37 + 32 = 66,6 + 32 = <strong>98,6°F</strong> (nhiệt độ cơ thể người)
</div>

<div class="example-box">
<strong>Ví dụ 2 (Vận dụng):</strong> Nhiệt độ một vật thay đổi từ 20°C lên 80°C. Tính ΔT theo K và °F.<br>
• ΔT(K) = Δt(°C) = 80 − 20 = <strong>60 K</strong><br>
• Δt(°F) = 1,8 × 60 = <strong>108°F</strong><br>
⚠️ Chú ý: ΔT(°F) ≠ 1,8 × ΔT(°C) + 32. Công thức +32 chỉ dùng cho <strong>giá trị nhiệt độ</strong>, không dùng cho <strong>độ biến thiên</strong>!
</div>

<h4>Dạng 2: Tìm nhiệt độ khi hai thang bằng nhau</h4>
<div class="example-box">
<strong>Ví dụ (Vận dụng cao):</strong> Tìm nhiệt độ mà giá trị °C bằng giá trị °F.<br>
<strong>Giải:</strong> Đặt t(°C) = t(°F) = x<br>
x = 1,8x + 32 → x − 1,8x = 32 → −0,8x = 32 → x = <strong>−40</strong><br>
→ −40°C = −40°F. ✅
</div>

<h4>Dạng 3: Bài toán nhiệt kế</h4>
<div class="example-box">
<strong>Ví dụ:</strong> Một nhiệt kế rượu chỉ 20°C trong phòng. Nhúng vào nước nóng, chỉ 80°C. Rượu trong ống đã dãn ra chiều dài gấp bao nhiêu lần so với ban đầu?<br>
<strong>Hướng dẫn:</strong> Cần dùng tỉ lệ tuyến tính — chiều dài rượu tỉ lệ thuận với nhiệt độ (trên thang đo).
</div>
    `,
    4: `
<h3>🔥 Chủ đề 4: Nhiệt dung riêng</h3>

<h4>I. TÓM TẮT LÝ THUYẾT TRỌNG TÂM</h4>

<h4>1. Định nghĩa</h4>
<ul>
    <li><strong>Nhiệt dung riêng</strong> (c) là nhiệt lượng cần truyền cho <strong>1 kg</strong> chất đó để nhiệt độ tăng thêm <strong>1 K</strong> (hoặc 1°C) mà không có chuyển thể.</li>
    <li>Đơn vị: <strong>J/(kg·K)</strong> hoặc J/(kg·°C)</li>
    <li>Nhiệt dung riêng là <strong>đặc trưng cho từng chất</strong>, không phụ thuộc khối lượng hay nhiệt độ.</li>
</ul>

<h4>2. Công thức tính nhiệt lượng</h4>
<div class="formula-box">Q = m · c · Δt = m · c · |t₂ − t₁|</div>
<ul>
    <li><strong>Q</strong>: nhiệt lượng (J)</li>
    <li><strong>m</strong>: khối lượng (kg) — ⚠️ Đề thường cho g, phải đổi!</li>
    <li><strong>c</strong>: nhiệt dung riêng J/(kg·K)</li>
    <li><strong>Δt</strong>: độ tăng (hoặc giảm) nhiệt độ</li>
</ul>

<div class="formula-box">c = Q / (m · Δt)</div>

<h4>3. Bảng nhiệt dung riêng — PHẢI NHỚ</h4>
<table>
    <tr><th>Chất</th><th>c [J/(kg·K)]</th><th>Ghi nhớ</th></tr>
    <tr><td>Nước</td><td><strong>4 200</strong></td><td>Lớn nhất! Giữ nhiệt tốt</td></tr>
    <tr><td>Nước đá</td><td>2 090</td><td>≈ nửa nước lỏng</td></tr>
    <tr><td>Nhôm</td><td>880</td><td></td></tr>
    <tr><td>Sắt/Thép</td><td>460</td><td></td></tr>
    <tr><td>Đồng</td><td>380</td><td></td></tr>
    <tr><td>Chì</td><td>126</td><td>Nhỏ nhất trong bảng</td></tr>
    <tr><td>Rượu</td><td>2 500</td><td></td></tr>
    <tr><td>Thủy ngân</td><td>140</td><td></td></tr>
</table>

<h4>4. Phương trình cân bằng nhiệt</h4>
<div class="formula-box">Q<sub>tỏa</sub> = Q<sub>thu</sub></div>
<div class="formula-box">m₁·c₁·(t₁ − t<sub>cb</sub>) = m₂·c₂·(t<sub>cb</sub> − t₂)</div>
<p>Trong đó t₁ > t<sub>cb</sub> > t₂ (vật nóng → tỏa nhiệt, vật lạnh → thu nhiệt).</p>

<div class="note-box">💡 <strong>NGUYÊN TẮC:</strong> Vật nóng hơn tỏa nhiệt, vật lạnh hơn thu nhiệt cho đến khi đạt <strong>cân bằng nhiệt</strong> (cùng nhiệt độ t<sub>cb</sub>).</div>

<h4>II. CÁC DẠNG BÀI TẬP & VÍ DỤ MẪU</h4>

<h4>Dạng 1: Tính nhiệt lượng</h4>
<div class="example-box">
<strong>Ví dụ:</strong> Tính nhiệt lượng cần cung cấp để đun nóng 2 kg nước từ 25°C lên 100°C.<br>
Q = m·c·Δt = 2 × 4200 × (100 − 25) = 2 × 4200 × 75 = <strong>630 000 J = 630 kJ</strong>
</div>

<h4>Dạng 2: Tìm nhiệt dung riêng</h4>
<div class="example-box">
<strong>Ví dụ:</strong> Cung cấp 4400 J cho 500 g kim loại, nhiệt độ tăng từ 20°C lên 30°C. Tìm c và xác định kim loại.<br>
c = Q/(m·Δt) = 4400/(0,5 × 10) = <strong>880 J/(kg·K)</strong> → Kim loại là <strong>nhôm</strong>.
</div>

<h4>Dạng 3: Cân bằng nhiệt — HAY THI NHẤT</h4>
<div class="example-box">
<strong>Ví dụ (Vận dụng):</strong> Thả miếng đồng 500 g ở 120°C vào 2 kg nước ở 25°C. Tìm t<sub>cb</sub>. Cho c<sub>đồng</sub> = 380, c<sub>nước</sub> = 4200.<br><br>
<strong>Giải:</strong><br>
Q<sub>tỏa</sub> = Q<sub>thu</sub><br>
m₁·c₁·(t₁ − t<sub>cb</sub>) = m₂·c₂·(t<sub>cb</sub> − t₂)<br>
0,5 × 380 × (120 − t<sub>cb</sub>) = 2 × 4200 × (t<sub>cb</sub> − 25)<br>
190 × (120 − t<sub>cb</sub>) = 8400 × (t<sub>cb</sub> − 25)<br>
22 800 − 190t<sub>cb</sub> = 8400t<sub>cb</sub> − 210 000<br>
232 800 = 8590t<sub>cb</sub><br>
t<sub>cb</sub> ≈ <strong>27,1°C</strong>
</div>

<h4>Dạng 4: Cân bằng nhiệt có nhiều vật</h4>
<div class="example-box">
<strong>Ví dụ (Vận dụng cao):</strong> Thả 200 g nhôm ở 100°C vào cốc chứa 500 g nước ở 20°C. Cốc bằng thủy tinh 100 g, c<sub>thủy tinh</sub> = 840. Tìm t<sub>cb</sub>.<br><br>
<strong>Giải:</strong> Nhôm tỏa nhiệt, nước + cốc thu nhiệt:<br>
m<sub>Al</sub>·c<sub>Al</sub>·(100 − t) = m<sub>nước</sub>·c<sub>nước</sub>·(t − 20) + m<sub>cốc</sub>·c<sub>cốc</sub>·(t − 20)<br>
0,2×880×(100−t) = 0,5×4200×(t−20) + 0,1×840×(t−20)<br>
176(100−t) = 2100(t−20) + 84(t−20)<br>
17600 − 176t = 2184t − 43680<br>
61280 = 2360t → t ≈ <strong>26°C</strong>
</div>

<div class="note-box">🎯 <strong>MẸO GIẢI NHANH CÂN BẰNG NHIỆT:</strong><br>
1. Xác định vật nào nóng nhất → tỏa nhiệt<br>
2. Các vật còn lại → thu nhiệt<br>
3. Viết: Σ Q<sub>tỏa</sub> = Σ Q<sub>thu</sub><br>
4. Đừng quên: <strong>cốc, bình, thìa</strong> cũng thu nhiệt nếu đề cho!<br>
5. Đổi đơn vị: g → kg trước khi tính!</div>

<h4>Dạng 5: Thí nghiệm đo nhiệt dung riêng</h4>
<div class="example-box">
<strong>Công thức thí nghiệm:</strong><br>
c = P·τ / (m·ΔT)<br>
Trong đó: P = công suất điện trở (W), τ = thời gian đun (s), m = khối lượng (kg), ΔT = độ tăng nhiệt.<br>
⚠️ Giá trị đo được thường <strong>lớn hơn</strong> giá trị thực do nhiệt tỏa ra môi trường.
</div>
    `,
    5: `
<h3>❄️ Chủ đề 5: Nhiệt nóng chảy riêng</h3>

<h4>I. TÓM TẮT LÝ THUYẾT TRỌNG TÂM</h4>

<h4>1. Định nghĩa</h4>
<ul>
    <li><strong>Nhiệt nóng chảy riêng</strong> (λ — lambda) là nhiệt lượng cần để <strong>1 kg</strong> chất rắn chuyển <strong>hoàn toàn</strong> sang thể lỏng ở <strong>nhiệt độ nóng chảy</strong>.</li>
    <li>Đơn vị: <strong>J/kg</strong></li>
    <li>λ phụ thuộc bản chất chất rắn và áp suất môi trường.</li>
</ul>

<h4>2. Công thức</h4>
<div class="formula-box">Q = m · λ</div>
<div class="formula-box">λ = Q / m</div>

<h4>3. Bảng nhiệt nóng chảy riêng — CẦN NHỚ</h4>
<table>
    <tr><th>Chất</th><th>λ (J/kg)</th><th>Nhiệt độ nóng chảy</th></tr>
    <tr><td>Nước đá</td><td><strong>3,4 × 10⁵</strong></td><td>0°C</td></tr>
    <tr><td>Chì</td><td>0,25 × 10⁵</td><td>327°C</td></tr>
    <tr><td>Nhôm</td><td>3,97 × 10⁵</td><td>660°C</td></tr>
    <tr><td>Đồng</td><td>1,80 × 10⁵</td><td>1 083°C</td></tr>
    <tr><td>Sắt</td><td>2,77 × 10⁵</td><td>1 535°C</td></tr>
</table>

<div class="note-box">💡 <strong>ĐẶC ĐIỂM QUAN TRỌNG:</strong><br>
• Trong suốt quá trình nóng chảy (rắn→lỏng), nhiệt độ <strong>KHÔNG ĐỔI</strong> = nhiệt độ nóng chảy.<br>
• Toàn bộ nhiệt lượng dùng để <strong>phá vỡ liên kết tinh thể</strong>, chứ không phải tăng nhiệt độ.<br>
• Quá trình <strong>đông đặc</strong> (ngược lại) cũng ở nhiệt độ không đổi và <strong>tỏa ra</strong> nhiệt lượng Q = m·λ.<br>
• Chất rắn <strong>vô định hình</strong> (thủy tinh, nhựa) KHÔNG có nhiệt nóng chảy riêng vì không có nhiệt độ nóng chảy xác định.</div>

<h4>II. CÁC DẠNG BÀI TẬP & VÍ DỤ MẪU</h4>

<h4>Dạng 1: Tính nhiệt lượng nóng chảy</h4>
<div class="example-box">
<strong>Ví dụ:</strong> Nhiệt lượng cần để làm nóng chảy hoàn toàn 5 kg nước đá ở 0°C?<br>
Q = m·λ = 5 × 3,4×10⁵ = <strong>1,7×10⁶ J = 1,7 MJ</strong>
</div>

<h4>Dạng 2: So sánh nhiệt nóng chảy giữa các chất</h4>
<div class="example-box">
<strong>Ví dụ:</strong> Dùng nhiệt lượng nóng chảy 1 kg nhôm có thể nóng chảy bao nhiêu kg chì?<br>
Q<sub>Al</sub> = 1 × 3,97×10⁵ = 3,97×10⁵ J<br>
m<sub>Pb</sub> = Q / λ<sub>Pb</sub> = 3,97×10⁵ / 0,25×10⁵ = <strong>15,88 kg</strong>
</div>

<h4>Dạng 3: BÀI TOÁN TỔNG HỢP — VẬN DỤNG CAO</h4>
<div class="example-box">
<strong>Ví dụ:</strong> Đun nước đá từ −10°C cho đến tan hết thành nước ở 0°C. Cho m = 2 kg, c<sub>đá</sub> = 2090, λ = 3,4×10⁵.<br><br>
<strong>Giải — 2 giai đoạn:</strong><br>
<strong>GĐ 1:</strong> Đun nóng đá từ −10°C → 0°C:<br>
Q₁ = m·c<sub>đá</sub>·Δt = 2 × 2090 × 10 = 41 800 J<br><br>
<strong>GĐ 2:</strong> Nóng chảy đá ở 0°C:<br>
Q₂ = m·λ = 2 × 3,4×10⁵ = 680 000 J<br><br>
<strong>Tổng:</strong> Q = Q₁ + Q₂ = 41 800 + 680 000 = <strong>721 800 J ≈ 722 kJ</strong>
</div>

<h4>Dạng 4: Bài toán NHIỀU GIAI ĐOẠN — SIÊU VẬN DỤNG CAO</h4>
<div class="example-box">
<strong>Ví dụ:</strong> Đun 500 g nước đá từ −20°C cho đến khi sôi hết. Cho c<sub>đá</sub> = 2090, c<sub>nước</sub> = 4200, λ = 3,4×10⁵, L = 2,26×10⁶.<br><br>
<strong>Giải — 4 giai đoạn:</strong><br>
<strong>GĐ 1:</strong> Đun đá: −20°C → 0°C<br>
Q₁ = 0,5 × 2090 × 20 = 20 900 J<br><br>
<strong>GĐ 2:</strong> Nóng chảy đá ở 0°C<br>
Q₂ = 0,5 × 3,4×10⁵ = 170 000 J<br><br>
<strong>GĐ 3:</strong> Đun nước: 0°C → 100°C<br>
Q₃ = 0,5 × 4200 × 100 = 210 000 J<br><br>
<strong>GĐ 4:</strong> Hóa hơi nước ở 100°C<br>
Q₄ = 0,5 × 2,26×10⁶ = 1 130 000 J<br><br>
<strong>Tổng:</strong> Q = Q₁+Q₂+Q₃+Q₄ = <strong>1 530 900 J ≈ 1,53 MJ</strong>
</div>

<div class="note-box">🎯 <strong>CÔNG THỨC TỔNG QUÁT — RẮN ĐẾN HƠI:</strong><br>
Q = m·c<sub>rắn</sub>·(t<sub>nc</sub> − t₁) + m·λ + m·c<sub>lỏng</sub>·(t<sub>sôi</sub> − t<sub>nc</sub>) + m·L<br><br>
📌 Phải kiểm tra: Nhiệt lượng đủ để hoàn thành giai đoạn nào? Nếu Q cho trước không đủ để nóng chảy hết → vật ở trạng thái <strong>hỗn hợp rắn-lỏng</strong> tại nhiệt độ nóng chảy!</div>

<h4>Dạng 5: Cân bằng nhiệt CÓ chuyển thể</h4>
<div class="example-box">
<strong>Ví dụ (Vận dụng cao):</strong> Thả 100 g nước đá ở 0°C vào 500 g nước ở 40°C. Nước đá có tan hết không? Nếu có, tìm t<sub>cb</sub>.<br><br>
<strong>Bước 1: Kiểm tra đá có tan hết không?</strong><br>
• Q cần để đá tan hết: Q<sub>tan</sub> = 0,1 × 3,4×10⁵ = 34 000 J<br>
• Q nước có thể tỏa tối đa (hạ về 0°C): Q<sub>max</sub> = 0,5 × 4200 × 40 = 84 000 J<br>
• Q<sub>max</sub> = 84 000 > Q<sub>tan</sub> = 34 000 → <strong>đá tan hết!</strong><br><br>
<strong>Bước 2: Tìm t<sub>cb</sub></strong><br>
Q<sub>tỏa</sub> = Q<sub>thu</sub><br>
0,5 × 4200 × (40 − t) = 0,1 × 3,4×10⁵ + 0,1 × 4200 × (t − 0)<br>
2100(40 − t) = 34000 + 420t<br>
84000 − 2100t = 34000 + 420t<br>
50000 = 2520t → t<sub>cb</sub> ≈ <strong>19,8°C</strong>
</div>
    `,
    6: `
<h3>💨 Chủ đề 6: Nhiệt hóa hơi riêng</h3>

<h4>I. TÓM TẮT LÝ THUYẾT TRỌNG TÂM</h4>

<h4>1. Định nghĩa</h4>
<ul>
    <li><strong>Nhiệt hóa hơi riêng</strong> (L) là nhiệt lượng cần cung cấp để <strong>1 kg</strong> chất lỏng hóa hơi hoàn toàn ở <strong>nhiệt độ sôi</strong>.</li>
    <li>Đơn vị: <strong>J/kg</strong></li>
    <li>L phụ thuộc bản chất chất lỏng và áp suất.</li>
</ul>

<h4>2. Công thức</h4>
<div class="formula-box">Q = m · L</div>
<div class="formula-box">L = Q / m</div>

<h4>3. Bảng nhiệt hóa hơi riêng</h4>
<table>
    <tr><th>Chất</th><th>L (J/kg)</th><th>Nhiệt độ sôi</th></tr>
    <tr><td>Nước</td><td><strong>2,26 × 10⁶</strong></td><td>100°C</td></tr>
    <tr><td>Rượu</td><td>0,85 × 10⁶</td><td>78°C</td></tr>
    <tr><td>Ête</td><td>0,40 × 10⁶</td><td>35°C</td></tr>
    <tr><td>Amoniac</td><td>1,37 × 10⁶</td><td>−33°C</td></tr>
</table>

<div class="note-box">💡 <strong>SO SÁNH QUAN TRỌNG:</strong><br>
• L (nhiệt hóa hơi riêng) >> λ (nhiệt nóng chảy riêng)<br>
• Ví dụ: Nước: L = 2,26×10⁶ >> λ = 3,4×10⁵ (gấp ~6,6 lần)<br>
→ Hóa hơi cần NHIỀU năng lượng hơn nóng chảy rất nhiều!<br>
→ Đó là lý do <strong>bỏng hơi nước nguy hiểm hơn bỏng nước sôi</strong>.</div>

<h4>4. Phân biệt bay hơi và sôi</h4>
<table>
    <tr><th>Bay hơi</th><th>Sôi</th></tr>
    <tr><td>Xảy ra ở <strong>mặt thoáng</strong></td><td>Xảy ra trong <strong>toàn bộ khối chất lỏng</strong></td></tr>
    <tr><td>Xảy ra ở <strong>mọi nhiệt độ</strong></td><td>Chỉ xảy ra ở <strong>nhiệt độ sôi</strong></td></tr>
    <tr><td>Tốc độ phụ thuộc: nhiệt độ, gió, diện tích mặt thoáng</td><td>Nhiệt độ không đổi trong suốt quá trình sôi</td></tr>
</table>

<h4>II. CÁC DẠNG BÀI TẬP & VÍ DỤ MẪU</h4>

<h4>Dạng 1: Tính nhiệt lượng hóa hơi</h4>
<div class="example-box">
<strong>Ví dụ:</strong> Nhiệt lượng cần để hóa hơi hoàn toàn 2 kg nước ở 100°C?<br>
Q = m·L = 2 × 2,26×10⁶ = <strong>4,52×10⁶ J = 4,52 MJ</strong>
</div>

<h4>Dạng 2: Đun nước từ t₁ đến sôi hết</h4>
<div class="example-box">
<strong>Ví dụ:</strong> Đun 1,5 kg nước từ 25°C cho đến khi sôi hết. Tính Q.<br>
Q₁ = m·c·(100−25) = 1,5 × 4200 × 75 = 472 500 J<br>
Q₂ = m·L = 1,5 × 2,26×10⁶ = 3 390 000 J<br>
Q = Q₁ + Q₂ = <strong>3 862 500 J ≈ 3,86 MJ</strong>
</div>

<h4>Dạng 3: Bài toán ngưng tụ hơi nước</h4>
<div class="example-box">
<strong>Ví dụ (Vận dụng cao):</strong> Dẫn 50 g hơi nước ở 100°C vào 1 kg nước ở 20°C. Tìm t<sub>cb</sub>.<br><br>
<strong>Giải:</strong> Hơi nước ngưng tụ → tỏa nhiệt, rồi nước ngưng tụ hạ nhiệt → tỏa thêm.<br>
Q<sub>tỏa</sub> = m<sub>hơi</sub>·L + m<sub>hơi</sub>·c·(100 − t)<br>
Q<sub>thu</sub> = m<sub>nước</sub>·c·(t − 20)<br><br>
0,05 × 2,26×10⁶ + 0,05 × 4200 × (100 − t) = 1 × 4200 × (t − 20)<br>
113000 + 210(100 − t) = 4200(t − 20)<br>
113000 + 21000 − 210t = 4200t − 84000<br>
218000 = 4410t → t<sub>cb</sub> ≈ <strong>49,4°C</strong>
</div>

<div class="note-box">⚠️ <strong>BẪY THƯỜNG GẶP:</strong><br>
• Quên tính nhiệt ngưng tụ (Q = m·L) khi hơi nước biến thành nước lỏng!<br>
• Sau khi ngưng tụ, nước lỏng mới tạo ra TIẾP TỤC tỏa nhiệt khi hạ từ 100°C xuống t<sub>cb</sub>.<br>
→ Phải tính <strong>2 phần nhiệt tỏa</strong>: ngưng tụ + hạ nhiệt.</div>

<h4>Dạng 4: Thí nghiệm đo nhiệt hóa hơi riêng</h4>
<div class="example-box">
<strong>Công thức:</strong> L = P·Δτ / Δm<br>
Trong đó: P = công suất (W), Δτ = thời gian đun khi nước đang sôi (s), Δm = khối lượng nước bay hơi (kg).<br>
⚠️ Chỉ tính thời gian và khối lượng <strong>trong giai đoạn sôi</strong> (nhiệt độ không đổi ở 100°C).
</div>
    `,
    7: `
<h3>📊 Chủ đề 7: Bài tập tổng hợp Vật lí nhiệt</h3>

<h4>I. TỔNG HỢP TẤT CẢ CÔNG THỨC</h4>
<table>
    <tr><th>Công thức</th><th>Ý nghĩa</th><th>Khi nào dùng</th></tr>
    <tr><td><strong>Q = m·c·Δt</strong></td><td>Nhiệt lượng trao đổi</td><td>Khi vật <strong>thay đổi nhiệt độ</strong> (không chuyển thể)</td></tr>
    <tr><td><strong>Q = m·λ</strong></td><td>Nhiệt nóng chảy/đông đặc</td><td>Khi vật <strong>chuyển thể rắn ↔ lỏng</strong> (nhiệt độ không đổi)</td></tr>
    <tr><td><strong>Q = m·L</strong></td><td>Nhiệt hóa hơi/ngưng tụ</td><td>Khi vật <strong>chuyển thể lỏng ↔ khí</strong> (nhiệt độ không đổi)</td></tr>
    <tr><td><strong>ΔU = A + Q</strong></td><td>Định luật I NĐLH</td><td>Khi có cả công và nhiệt</td></tr>
    <tr><td><strong>T = t + 273</strong></td><td>Celsius → Kelvin</td><td>Đổi đơn vị</td></tr>
    <tr><td><strong>Q<sub>tỏa</sub> = Q<sub>thu</sub></strong></td><td>Cân bằng nhiệt</td><td>Khi nhiều vật trao đổi nhiệt</td></tr>
    <tr><td><strong>H = Q<sub>ích</sub>/Q<sub>tp</sub></strong></td><td>Hiệu suất</td><td>Bài toán có hao phí</td></tr>
</table>

<h4>II. PHƯƠNG PHÁP GIẢI BÀI TOÁN NHIỆT — 5 BƯỚC</h4>
<ol>
    <li><strong>Bước 1:</strong> Liệt kê các vật, xác định m, c, t ban đầu, λ, L (nếu có).</li>
    <li><strong>Bước 2:</strong> Xác định vật tỏa nhiệt (nóng hơn) và vật thu nhiệt (lạnh hơn).</li>
    <li><strong>Bước 3:</strong> <strong>KIỂM TRA CHUYỂN THỂ!</strong> Đây là bước quan trọng nhất.
        <ul>
            <li>Nếu vật lạnh là nước đá → có tan không?</li>
            <li>Nếu đun nước → có sôi không?</li>
            <li>Tính Q<sub>max</sub> vật nóng tỏa ra, so sánh với Q cần để chuyển thể.</li>
        </ul>
    </li>
    <li><strong>Bước 4:</strong> Viết phương trình: Q<sub>tỏa</sub> = Q<sub>thu</sub> (bao gồm cả Q chuyển thể nếu có).</li>
    <li><strong>Bước 5:</strong> Giải PT, kiểm tra kết quả có hợp lý (t<sub>cb</sub> phải nằm giữa t nóng và t lạnh).</li>
</ol>

<div class="note-box">⚠️ <strong>4 SAI LẦM PHỔ BIẾN NHẤT:</strong><br>
❌ <strong>Sai lầm 1:</strong> Quên đổi đơn vị g → kg, phút → giây, cal → J<br>
❌ <strong>Sai lầm 2:</strong> Quên kiểm tra chuyển thể (đá có tan hết? nước có sôi?)<br>
❌ <strong>Sai lầm 3:</strong> Nhầm dấu trong ΔU = A + Q (nhận công/sinh công)<br>
❌ <strong>Sai lầm 4:</strong> Dùng sai nhiệt dung riêng (c<sub>đá</sub> ≠ c<sub>nước</sub> ≠ c<sub>hơi</sub>)</div>

<h4>III. CÁC BÀI MẪU VẬN DỤNG CAO</h4>

<h4>Bài mẫu 1: Bài toán đá + nước nóng (kiểm tra chuyển thể)</h4>
<div class="example-box">
<strong>Đề:</strong> Thả 200 g nước đá ở −15°C vào 400 g nước ở 60°C. Tìm t<sub>cb</sub>.<br>
c<sub>đá</sub> = 2090, c<sub>nước</sub> = 4200, λ = 3,4×10⁵.<br><br>
<strong>Bước 1:</strong> Kiểm tra đá có tan hết không?<br>
• Q để đá lên 0°C: Q₁ = 0,2 × 2090 × 15 = 6 270 J<br>
• Q để đá tan hết: Q₂ = 0,2 × 3,4×10⁵ = 68 000 J<br>
• Tổng cần: Q₁ + Q₂ = 74 270 J<br>
• Q nước tỏa tối đa (hạ về 0°C): Q<sub>max</sub> = 0,4 × 4200 × 60 = 100 800 J<br>
• 100 800 > 74 270 → <strong>Đá tan hết!</strong> t<sub>cb</sub> > 0°C.<br><br>
<strong>Bước 2:</strong> Viết phương trình<br>
Q<sub>tỏa nước</sub> = Q<sub>đá lên 0°C</sub> + Q<sub>tan đá</sub> + Q<sub>nước đá nóng lên</sub><br>
0,4×4200×(60−t) = 6270 + 68000 + 0,2×4200×(t−0)<br>
1680(60−t) = 74270 + 840t<br>
100800 − 1680t = 74270 + 840t<br>
26530 = 2520t → t<sub>cb</sub> ≈ <strong>10,5°C</strong> ✅
</div>

<h4>Bài mẫu 2: Bài toán đá KHÔNG tan hết</h4>
<div class="example-box">
<strong>Đề:</strong> Thả 500 g nước đá ở 0°C vào 200 g nước ở 50°C. Hỏi trạng thái cuối cùng?<br><br>
<strong>Kiểm tra:</strong><br>
• Q cần để đá tan hết: 0,5 × 3,4×10⁵ = 170 000 J<br>
• Q nước tỏa tối đa: 0,2 × 4200 × 50 = 42 000 J<br>
• 42 000 < 170 000 → <strong>Đá KHÔNG tan hết!</strong><br><br>
<strong>→ t<sub>cb</sub> = 0°C</strong>, hỗn hợp gồm đá + nước ở 0°C.<br>
Khối lượng đá tan: m = Q<sub>nước tỏa</sub>/λ = 42000/340000 = <strong>0,124 kg = 124 g</strong>
</div>

<h4>Bài mẫu 3: Hiệu suất</h4>
<div class="example-box">
<strong>Đề:</strong> Bếp ga có hiệu suất 40%. Cần đốt bao nhiêu g gas (q = 44×10⁶ J/kg) để đun 2 kg nước từ 25°C lên sôi?<br><br>
Q<sub>ích</sub> = 2 × 4200 × 75 = 630 000 J<br>
H = Q<sub>ích</sub>/Q<sub>tp</sub> → Q<sub>tp</sub> = Q<sub>ích</sub>/H = 630000/0,4 = 1 575 000 J<br>
Q<sub>tp</sub> = m·q → m = 1575000/44000000 ≈ <strong>0,036 kg ≈ 36 g gas</strong>
</div>

<h4>Bài mẫu 4: Hơi nước ngưng tụ + cân bằng nhiệt</h4>
<div class="example-box">
<strong>Đề:</strong> Dẫn m (g) hơi nước 100°C vào bình chứa 2 kg nước ở 10°C. Sau cân bằng, nhiệt độ là 50°C. Tìm m.<br><br>
Q<sub>tỏa</sub> = Q<sub>thu</sub><br>
m·L + m·c·(100−50) = 2 × 4200 × (50−10)<br>
m×2260000 + m×4200×50 = 2×4200×40<br>
m(2260000 + 210000) = 336000<br>
m × 2470000 = 336000<br>
m ≈ 0,136 kg ≈ <strong>136 g</strong>
</div>
    `,
    8: `
<h3>📝 Chủ đề 8: Đề ôn tập Chương I — Tổng ôn</h3>

<h4>I. TÓM TẮT TOÀN BỘ KIẾN THỨC CHƯƠNG I</h4>

<h4>1. Sơ đồ kiến thức tổng quan</h4>
<table>
    <tr><th>Chủ đề</th><th>Nội dung chính</th><th>Công thức quan trọng</th></tr>
    <tr><td>CĐ1</td><td>Cấu trúc chất, chuyển thể</td><td>Bảng rắn/lỏng/khí, 6 loại chuyển thể</td></tr>
    <tr><td>CĐ2</td><td>Nội năng, ĐL I NĐLH</td><td>ΔU = A + Q</td></tr>
    <tr><td>CĐ3</td><td>Nhiệt độ, thang đo</td><td>T=t+273, t(°F)=1,8t(°C)+32</td></tr>
    <tr><td>CĐ4</td><td>Nhiệt dung riêng</td><td>Q = m·c·Δt</td></tr>
    <tr><td>CĐ5</td><td>Nhiệt nóng chảy riêng</td><td>Q = m·λ</td></tr>
    <tr><td>CĐ6</td><td>Nhiệt hóa hơi riêng</td><td>Q = m·L</td></tr>
    <tr><td>CĐ7</td><td>Bài tập tổng hợp</td><td>Cân bằng nhiệt + Hiệu suất</td></tr>
</table>

<h4>2. CẨM NANG ĐỐI PHÓ ĐỀ THI — TỪNG DẠNG</h4>

<h4>📋 Dạng LÝ THUYẾT (Nhận biết, Thông hiểu)</h4>
<div class="note-box">
<strong>Các câu hỏi hay thi:</strong><br>
1. Phân biệt thể rắn/lỏng/khí (VTCB cố định vs thay đổi)<br>
2. Nội năng phụ thuộc những yếu tố nào? (nhiệt độ VÀ thể tích)<br>
3. Nội năng khí lí tưởng chỉ phụ thuộc nhiệt độ<br>
4. Đơn/đa tinh thể → dị hướng/đẳng hướng<br>
5. Bay hơi (mặt thoáng, mọi t°) vs Sôi (toàn bộ, t° sôi)<br>
6. Quy ước dấu A, Q trong ΔU = A + Q<br>
7. Nhiệt độ KHÔNG ĐỔI khi nóng chảy và khi sôi
</div>

<h4>📋 Dạng VẬN DỤNG (Tính toán đơn giản)</h4>
<div class="note-box">
<strong>Các dạng phổ biến:</strong><br>
1. Tính Q = m·c·Δt (nhớ đổi đơn vị!)<br>
2. Tính Q = m·λ hoặc Q = m·L<br>
3. Đổi thang nhiệt độ (°C ↔ K ↔ °F)<br>
4. Tìm c, tìm m, tìm Δt từ công thức<br>
5. Áp dụng ΔU = A + Q (xác định dấu đúng)
</div>

<h4>📋 Dạng VẬN DỤNG CAO (Tính toán phức tạp)</h4>
<div class="note-box">
<strong>Các dạng khó:</strong><br>
1. <strong>Cân bằng nhiệt CÓ chuyển thể</strong>: kiểm tra đá tan hết? nước sôi?<br>
2. <strong>Bài toán nhiều giai đoạn</strong>: rắn → lỏng → sôi → hơi<br>
3. <strong>Hơi nước ngưng tụ</strong>: tỏa 2 lần (ngưng tụ + hạ nhiệt)<br>
4. <strong>Hiệu suất</strong>: H = Q<sub>ích</sub>/Q<sub>tp</sub><br>
5. <strong>Công suất</strong>: P = Q/t → tìm thời gian đun<br>
6. <strong>Bài toán đá không tan hết</strong>: t<sub>cb</sub> = 0°C, tìm m đá tan
</div>

<h4>III. BÀI TẬP MẪU TỔNG HỢP</h4>

<h4>Bài 1: Tổng hợp nhiều công thức</h4>
<div class="example-box">
<strong>Đề:</strong> Một bếp điện có công suất P = 1000 W, hiệu suất 80%. Tính thời gian đun 3 lít nước từ 20°C đến sôi.<br><br>
Q<sub>ích</sub> = m·c·Δt = 3 × 4200 × 80 = 1 008 000 J<br>
Q<sub>tp</sub> = Q<sub>ích</sub>/H = 1008000/0,8 = 1 260 000 J<br>
t = Q<sub>tp</sub>/P = 1260000/1000 = <strong>1260 s = 21 phút</strong>
</div>

<h4>Bài 2: Siêu tổng hợp</h4>
<div class="example-box">
<strong>Đề:</strong> Thả m₁ = 200 g đồng ở 300°C vào bình chứa m₂ = 300 g nước đá ở −10°C. Bình cách nhiệt. Tìm trạng thái cuối.<br>
c<sub>Cu</sub> = 380, c<sub>đá</sub> = 2090, c<sub>nước</sub> = 4200, λ = 3,4×10⁵.<br><br>
<strong>Bước 1:</strong> Q đồng tỏa tối đa (hạ về 0°C):<br>
Q<sub>Cu</sub> = 0,2 × 380 × 300 = 22 800 J<br><br>
<strong>Bước 2:</strong> Q đá cần để lên 0°C:<br>
Q₁ = 0,3 × 2090 × 10 = 6 270 J<br><br>
<strong>Bước 3:</strong> Q cần để đá tan hết:<br>
Q₂ = 0,3 × 3,4×10⁵ = 102 000 J<br><br>
<strong>So sánh:</strong> Q<sub>Cu</sub> = 22 800 > Q₁ = 6 270 → Đá lên được 0°C ✅<br>
Còn lại: 22 800 − 6 270 = 16 530 J < 102 000 J → Đá <strong>KHÔNG tan hết!</strong><br><br>
<strong>→ t<sub>cb</sub> = 0°C</strong><br>
Khối lượng đá tan: m = 16530/340000 = <strong>0,049 kg ≈ 49 g</strong><br>
Hỗn hợp: 49 g nước + 251 g đá + 200 g đồng, tất cả ở 0°C.
</div>

<h4>IV. CHECKLIST TRƯỚC KHI NỘP BÀI</h4>
<div class="note-box">
✅ Đã đổi hết đơn vị sang SI (kg, J, K)?<br>
✅ Đã xác định đúng dấu A, Q?<br>
✅ Đã kiểm tra chuyển thể khi cần?<br>
✅ Kết quả t<sub>cb</sub> nằm giữa t<sub>nóng</sub> và t<sub>lạnh</sub>?<br>
✅ Đã tính đủ nhiệt tỏa khi ngưng tụ hơi nước (2 phần)?<br>
✅ Đã dùng đúng c cho từng trạng thái (c<sub>đá</sub> ≠ c<sub>nước</sub>)?
</div>
    `
};
