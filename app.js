// ═══════════════════════════════════════════════════════════════
// VẬT LÝ 12 — QUIZ ENGINE V3
// Multi-topic, hints, wrong answer review, localStorage progress
// ═══════════════════════════════════════════════════════════════

// ─── Lesson Content (Theory for each topic) ───────────────────
const LESSON_CONTENT = {
    1: `
<h3>🔬 Chủ đề 1: Cấu trúc của chất – Sự chuyển thể</h3>

<h4>1. Mô hình động học phân tử về cấu tạo chất</h4>
<ul>
    <li><strong>Các chất</strong> được cấu tạo từ các hạt riêng biệt là <strong>phân tử</strong>.</li>
    <li>Các phân tử <strong>chuyển động hỗn loạn, không ngừng</strong>. Nhiệt độ càng cao → tốc độ chuyển động càng lớn.</li>
    <li>Giữa các phân tử có <strong>lực hút và đẩy</strong> (lực liên kết phân tử):
        <ul>
            <li>Khi <strong>gần nhau</strong> → lực <strong>đẩy</strong> chiếm ưu thế</li>
            <li>Khi <strong>xa nhau</strong> → lực <strong>hút</strong> chiếm ưu thế</li>
        </ul>
    </li>
</ul>

<h4>2. Cấu trúc chất rắn, lỏng, khí</h4>
<table>
    <tr><th>Đặc điểm</th><th>Thể rắn</th><th>Thể lỏng</th><th>Thể khí</th></tr>
    <tr><td>Khoảng cách</td><td>Rất gần (≈ kích thước phân tử)</td><td>Xa nhau</td><td>Rất xa (hàng chục lần kích thước)</td></tr>
    <tr><td>Sắp xếp</td><td>Có trật tự</td><td>Kém trật tự</td><td>Không trật tự</td></tr>
    <tr><td>Chuyển động</td><td>Dao động quanh VTCB <strong>cố định</strong></td><td>Dao động quanh VTCB <strong>luôn thay đổi</strong></td><td>Chuyển động <strong>hỗn loạn</strong></td></tr>
    <tr><td>Hình dạng</td><td>Xác định</td><td>Phụ thuộc bình chứa</td><td>Phụ thuộc bình chứa</td></tr>
    <tr><td>Thể tích</td><td>Xác định</td><td>Xác định</td><td>Phụ thuộc bình chứa</td></tr>
</table>

<h4>3. Sự chuyển thể</h4>
<ul>
    <li><strong>Nóng chảy</strong>: rắn → lỏng | <strong>Đông đặc</strong>: lỏng → rắn</li>
    <li><strong>Hóa hơi</strong>: lỏng → khí | <strong>Ngưng tụ</strong>: khí → lỏng</li>
    <li><strong>Thăng hoa</strong>: rắn → khí | <strong>Ngưng kết</strong>: khí → rắn</li>
</ul>
<div class="note-box">💡 Bay hơi xảy ra ở mặt thoáng. Sôi xảy ra trong toàn bộ khối chất lỏng.</div>

<h4>4. Chất rắn kết tinh và vô định hình</h4>
<table>
    <tr><th>Chất rắn kết tinh</th><th>Chất rắn vô định hình</th></tr>
    <tr><td>Có cấu trúc mạng tinh thể</td><td>Không có cấu trúc mạng tinh thể</td></tr>
    <tr><td>Có nhiệt độ nóng chảy xác định</td><td>Không có nhiệt độ nóng chảy xác định</td></tr>
    <tr><td>Đơn tinh thể: tính dị hướng<br>Đa tinh thể: tính đẳng hướng</td><td>Tính đẳng hướng</td></tr>
    <tr><td>VD: muối, thạch anh, kim cương, kim loại</td><td>VD: thủy tinh, nhựa, cao su, sáp</td></tr>
</table>
    `,
    2: `
<h3>⚡ Chủ đề 2: Nội năng – Định luật I Nhiệt động lực học</h3>

<h4>1. Khái niệm nội năng</h4>
<ul>
    <li><strong>Nội năng</strong> của vật là tổng động năng và thế năng tương tác của các phân tử cấu tạo nên vật.</li>
    <li>Nội năng phụ thuộc vào <strong>nhiệt độ</strong> và <strong>thể tích</strong>.</li>
</ul>

<h4>2. Hai cách làm thay đổi nội năng</h4>
<ul>
    <li><strong>Thực hiện công</strong>: năng lượng truyền qua lực cơ học (cọ xát, nén khí...)</li>
    <li><strong>Truyền nhiệt</strong>: năng lượng truyền trực tiếp giữa các vật có nhiệt độ khác nhau</li>
</ul>

<h4>3. Định luật I Nhiệt động lực học</h4>
<div class="formula-box">ΔU = A + Q</div>
<ul>
    <li><strong>ΔU</strong>: độ biến thiên nội năng (J)</li>
    <li><strong>A</strong>: công do vật nhận (A > 0: nhận công, A < 0: sinh công)</li>
    <li><strong>Q</strong>: nhiệt lượng (Q > 0: nhận nhiệt, Q < 0: tỏa nhiệt)</li>
</ul>

<div class="note-box">💡 Quy ước dấu: Vật NHẬN → dương (+), Vật TRUYỀN/SINH → âm (-)</div>

<h4>4. Các trường hợp đặc biệt</h4>
<table>
    <tr><th>Trường hợp</th><th>Điều kiện</th><th>Công thức</th></tr>
    <tr><td>Chỉ truyền nhiệt</td><td>A = 0</td><td>ΔU = Q</td></tr>
    <tr><td>Chỉ thực hiện công</td><td>Q = 0</td><td>ΔU = A</td></tr>
    <tr><td>Hệ cô lập</td><td>A = 0, Q = 0</td><td>ΔU = 0 (nội năng không đổi)</td></tr>
</table>
    `,
    3: `
<h3>🌡️ Chủ đề 3: Nhiệt độ – Thang nhiệt độ – Nhiệt kế</h3>

<h4>1. Nhiệt độ</h4>
<ul>
    <li><strong>Nhiệt độ</strong> là đại lượng vật lý đặc trưng cho mức độ chuyển động nhiệt của các phân tử cấu tạo nên vật.</li>
    <li>Vật nóng hơn → nhiệt độ cao hơn → phân tử chuyển động nhanh hơn.</li>
</ul>

<h4>2. Thang nhiệt độ</h4>
<table>
    <tr><th>Thang</th><th>Đơn vị</th><th>Điểm đóng băng nước</th><th>Điểm sôi nước</th></tr>
    <tr><td>Celsius</td><td>°C</td><td>0°C</td><td>100°C</td></tr>
    <tr><td>Fahrenheit</td><td>°F</td><td>32°F</td><td>212°F</td></tr>
    <tr><td>Kelvin</td><td>K</td><td>273 K</td><td>373 K</td></tr>
</table>

<h4>3. Công thức chuyển đổi</h4>
<div class="formula-box">T(K) = t(°C) + 273</div>
<div class="formula-box">t(°F) = 1,8 × t(°C) + 32</div>

<h4>4. Nhiệt kế</h4>
<ul>
    <li>Nhiệt kế hoạt động dựa trên sự <strong>giãn nở vì nhiệt</strong> của chất lỏng hoặc chất khí.</li>
    <li>Các loại: nhiệt kế thủy ngân, nhiệt kế rượu, nhiệt kế điện tử.</li>
</ul>
<div class="note-box">💡 Nhiệt độ 0 K (−273°C) gọi là <strong>độ không tuyệt đối</strong> — nhiệt độ thấp nhất trong tự nhiên.</div>
    `,
    4: `
<h3>🔥 Chủ đề 4: Nhiệt dung riêng</h3>

<h4>1. Định nghĩa</h4>
<ul>
    <li><strong>Nhiệt dung riêng</strong> (c) của một chất là nhiệt lượng cần truyền cho <strong>1 kg</strong> chất đó để nhiệt độ tăng thêm <strong>1 K</strong> (hoặc 1°C) mà không làm thay đổi thể.</li>
    <li>Đơn vị: J/(kg·K) hoặc J/(kg·°C)</li>
</ul>

<h4>2. Công thức tính nhiệt lượng</h4>
<div class="formula-box">Q = m · c · Δt = m · c · (t₂ − t₁)</div>
<ul>
    <li><strong>Q</strong>: nhiệt lượng (J)</li>
    <li><strong>m</strong>: khối lượng (kg)</li>
    <li><strong>c</strong>: nhiệt dung riêng J/(kg·K)</li>
    <li><strong>Δt = t₂ − t₁</strong>: độ tăng nhiệt độ (°C hoặc K)</li>
</ul>

<h4>3. Nhiệt dung riêng một số chất</h4>
<table>
    <tr><th>Chất</th><th>c [J/(kg·K)]</th></tr>
    <tr><td>Nước</td><td>4 200</td></tr>
    <tr><td>Nước đá</td><td>2 090</td></tr>
    <tr><td>Nhôm</td><td>880</td></tr>
    <tr><td>Sắt/Thép</td><td>460</td></tr>
    <tr><td>Đồng</td><td>380</td></tr>
</table>

<h4>4. Phương trình cân bằng nhiệt</h4>
<div class="formula-box">Q<sub>tỏa</sub> = Q<sub>thu</sub></div>
<div class="note-box">💡 Vật nóng hơn tỏa nhiệt, vật lạnh hơn thu nhiệt cho đến khi đạt cân bằng nhiệt (cùng nhiệt độ).</div>
    `,
    5: `
<h3>❄️ Chủ đề 5: Nhiệt nóng chảy riêng</h3>

<h4>1. Định nghĩa</h4>
<ul>
    <li><strong>Nhiệt nóng chảy riêng</strong> (λ) của một chất là nhiệt lượng cần để <strong>1 kg</strong> chất đó chuyển hoàn toàn từ thể rắn sang thể lỏng ở <strong>nhiệt độ nóng chảy</strong>.</li>
    <li>Đơn vị: J/kg</li>
</ul>

<h4>2. Công thức</h4>
<div class="formula-box">Q = m · λ</div>
<ul>
    <li><strong>Q</strong>: nhiệt lượng cần để nóng chảy (J)</li>
    <li><strong>m</strong>: khối lượng (kg)</li>
    <li><strong>λ</strong>: nhiệt nóng chảy riêng (J/kg)</li>
</ul>

<h4>3. Nhiệt nóng chảy riêng một số chất</h4>
<table>
    <tr><th>Chất</th><th>λ (J/kg)</th><th>Nhiệt độ nóng chảy</th></tr>
    <tr><td>Nước đá</td><td>3,34 × 10⁵</td><td>0°C</td></tr>
    <tr><td>Chì</td><td>0,25 × 10⁵</td><td>327°C</td></tr>
    <tr><td>Nhôm</td><td>3,97 × 10⁵</td><td>660°C</td></tr>
    <tr><td>Đồng</td><td>1,80 × 10⁵</td><td>1 083°C</td></tr>
</table>

<div class="note-box">💡 Trong quá trình nóng chảy, nhiệt độ <strong>không đổi</strong> (toàn bộ nhiệt lượng dùng để phá vỡ liên kết tinh thể).</div>

<h4>4. Bài toán tổng hợp</h4>
<p>Khi cho 1 vật rắn ở nhiệt độ t₁ < t<sub>nc</sub>, cần cung cấp nhiệt lượng:</p>
<div class="formula-box">Q = m·c<sub>rắn</sub>·(t<sub>nc</sub> − t₁) + m·λ + m·c<sub>lỏng</sub>·(t₂ − t<sub>nc</sub>)</div>
<p>Gồm 3 giai đoạn: đun nóng rắn → nóng chảy → đun nóng lỏng.</p>
    `,
    6: `
<h3>💨 Chủ đề 6: Nhiệt hóa hơi riêng</h3>

<h4>1. Định nghĩa</h4>
<ul>
    <li><strong>Nhiệt hóa hơi riêng</strong> (L) của một chất lỏng là nhiệt lượng cần cung cấp để <strong>1 kg</strong> chất lỏng đó hóa hơi hoàn toàn ở <strong>nhiệt độ sôi</strong>.</li>
    <li>Đơn vị: J/kg</li>
</ul>

<h4>2. Công thức</h4>
<div class="formula-box">Q = m · L</div>
<ul>
    <li><strong>Q</strong>: nhiệt lượng cần để hóa hơi (J)</li>
    <li><strong>m</strong>: khối lượng (kg)</li>
    <li><strong>L</strong>: nhiệt hóa hơi riêng (J/kg)</li>
</ul>

<h4>3. Nhiệt hóa hơi riêng một số chất</h4>
<table>
    <tr><th>Chất</th><th>L (J/kg)</th><th>Nhiệt độ sôi</th></tr>
    <tr><td>Nước</td><td>2,26 × 10⁶</td><td>100°C</td></tr>
    <tr><td>Rượu</td><td>0,85 × 10⁶</td><td>78°C</td></tr>
    <tr><td>Ête</td><td>0,40 × 10⁶</td><td>35°C</td></tr>
</table>

<div class="note-box">💡 Trong quá trình sôi, nhiệt độ <strong>không đổi</strong> (tương tự nóng chảy). Nhiệt hóa hơi riêng thường lớn hơn nhiệt nóng chảy riêng.</div>

<h4>4. Bài toán tổng hợp đầy đủ</h4>
<p>Đun nước từ t₁ đến sôi hết:</p>
<div class="formula-box">Q = m · c · (100 − t₁) + m · L</div>
    `,
    7: `
<h3>📊 Chủ đề 7: Bài tập tổng hợp Vật lí nhiệt</h3>

<h4>1. Tổng hợp các công thức</h4>
<table>
    <tr><th>Công thức</th><th>Ý nghĩa</th></tr>
    <tr><td>Q = m·c·Δt</td><td>Nhiệt lượng trao đổi (thay đổi nhiệt độ)</td></tr>
    <tr><td>Q = m·λ</td><td>Nhiệt lượng nóng chảy/đông đặc</td></tr>
    <tr><td>Q = m·L</td><td>Nhiệt lượng hóa hơi/ngưng tụ</td></tr>
    <tr><td>ΔU = A + Q</td><td>Định luật I NĐLH</td></tr>
    <tr><td>T(K) = t(°C) + 273</td><td>Chuyển đổi thang nhiệt độ</td></tr>
</table>

<h4>2. Phương pháp giải bài toán nhiệt</h4>
<ol>
    <li><strong>Bước 1</strong>: Xác định các vật tham gia, trạng thái ban đầu, trạng thái cuối.</li>
    <li><strong>Bước 2</strong>: Xác định vật tỏa nhiệt, vật thu nhiệt.</li>
    <li><strong>Bước 3</strong>: Viết phương trình cân bằng nhiệt: Q<sub>tỏa</sub> = Q<sub>thu</sub></li>
    <li><strong>Bước 4</strong>: Giải phương trình tìm ẩn.</li>
</ol>

<div class="note-box">💡 <strong>Lưu ý quan trọng</strong>: Kiểm tra xem vật có chuyển thể không! Nếu có, phải tính thêm nhiệt lượng chuyển thể (Q = m·λ hoặc Q = m·L).</div>

<h4>3. Hiệu suất</h4>
<div class="formula-box">H = Q<sub>có ích</sub> / Q<sub>toàn phần</sub> × 100%</div>

<h4>4. Các lỗi thường gặp</h4>
<ul>
    <li>❌ Quên chuyển đơn vị (g → kg, phút → giây)</li>
    <li>❌ Quên kiểm tra chuyển thể khi tính nhiệt lượng</li>
    <li>❌ Nhầm dấu trong ΔU = A + Q</li>
    <li>❌ Dùng sai nhiệt dung riêng (c rắn ≠ c lỏng)</li>
</ul>
    `
};

// ─── State Management ─────────────────────────────────────────
const STATE = {
    currentSection: 'home',
    currentLessonTopic: 1,
    // Quiz state
    quiz: {
        active: false,
        mode: null,          // 'topic' | 'exam' | 'review'
        topicId: null,
        questions: [],
        currentIndex: 0,
        userAnswers: [],     // -1 = unanswered
        hintsUsed: [],       // array of arrays: [[level used], ...]
        startTime: null,
        timerInterval: null,
        isSubmitted: false,
        isReviewMode: false, // viewing answers after submit
    }
};

// ─── Progress (localStorage) ──────────────────────────────────
const STORAGE_KEY = 'vatly12_progress';

function loadProgress() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) return JSON.parse(data);
    } catch (e) {}
    return getDefaultProgress();
}

function getDefaultProgress() {
    return {
        topics: {},
        streak: { current: 0, lastDate: null },
        totalAttempts: 0,
    };
}

function saveProgress(progress) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {}
}

function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
}

// ─── Navigation ───────────────────────────────────────────────
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const section = document.getElementById('section-' + sectionId);
    if (section) section.classList.add('active');
    
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const navLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
    if (navLink) navLink.classList.add('active');
    
    // Close mobile nav
    document.getElementById('mobile-nav-overlay').classList.remove('active');
    
    STATE.currentSection = sectionId;
    window.scrollTo(0, 0);
    
    // Refresh section content
    if (sectionId === 'home') renderHome();
    if (sectionId === 'lessons') renderLesson(STATE.currentLessonTopic);
    if (sectionId === 'quiz-select') renderQuizSelect();
    if (sectionId === 'progress') renderProgressDashboard();
}

// ─── Home Page ────────────────────────────────────────────────
function renderHome() {
    const progress = loadProgress();
    
    // Quick Progress Grid
    const grid = document.getElementById('home-progress-grid');
    let gridHTML = '';
    for (let t = 1; t <= 8; t++) {
        const info = TOPIC_INFO[t];
        const tp = progress.topics[t];
        let statusClass = 'none', statusText = '—';
        if (tp) {
            if (tp.passed) { statusClass = 'pass'; statusText = '✅'; }
            else { statusClass = 'fail'; statusText = `${tp.bestScore}/${tp.totalQ}`; }
        }
        gridHTML += `
            <div class="progress-mini" onclick="showSection('quiz-select')">
                <div class="progress-mini-icon">${info.icon}</div>
                <div class="progress-mini-label">CĐ${t}</div>
                <div class="progress-mini-value ${statusClass}">${statusText}</div>
            </div>
        `;
    }
    grid.innerHTML = gridHTML;
    
    // Topic Cards
    const cards = document.getElementById('home-topic-cards');
    let cardsHTML = '';
    for (let t = 1; t <= 8; t++) {
        const info = TOPIC_INFO[t];
        const tp = progress.topics[t];
        let badge = '<span class="topic-card-badge new">Chưa làm</span>';
        let progressPct = 0, barClass = 'none';
        let statsText = `${info.totalQuestions} câu`;
        
        if (tp) {
            progressPct = Math.round((tp.bestScore / tp.totalQ) * 100);
            if (tp.passed) {
                badge = '<span class="topic-card-badge pass">✅ PASS</span>';
                barClass = 'pass';
            } else {
                badge = '<span class="topic-card-badge fail">Chưa đạt</span>';
                barClass = 'fail';
            }
            statsText = `Tốt nhất: ${tp.bestScore}/${tp.totalQ} (${progressPct}%) • ${tp.attempts} lần`;
        }
        
        cardsHTML += `
            <div class="topic-card" onclick="startTopicQuiz(${t})">
                <div class="topic-card-header">
                    <span class="topic-card-icon">${info.icon}</span>
                    <span class="topic-card-title">CĐ${t}: ${info.name}</span>
                    ${badge}
                </div>
                <div class="topic-card-stats">
                    <span>${statsText}</span>
                </div>
                <div class="topic-card-progress">
                    <div class="topic-card-progress-bar ${barClass}" style="width:${progressPct}%"></div>
                </div>
            </div>
        `;
    }
    cards.innerHTML = cardsHTML;
}

// ─── Lesson Page ──────────────────────────────────────────────
function renderLesson(topicId) {
    STATE.currentLessonTopic = topicId;
    
    // Update tabs
    document.querySelectorAll('.lesson-tab').forEach(tab => {
        tab.classList.toggle('active', parseInt(tab.dataset.topic) === topicId);
    });
    
    const content = document.getElementById('lesson-content');
    if (LESSON_CONTENT[topicId]) {
        content.innerHTML = LESSON_CONTENT[topicId];
    } else {
        content.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding: 3rem;">Nội dung bài giảng cho Chủ đề ${topicId} đang được cập nhật...</p>`;
    }
}

// ─── Quiz Select Page ─────────────────────────────────────────
function renderQuizSelect() {
    const progress = loadProgress();
    
    const grid = document.getElementById('quiz-topic-grid');
    let html = '';
    for (let t = 1; t <= 8; t++) {
        const info = TOPIC_INFO[t];
        const tp = progress.topics[t];
        let badge = '<span class="qt-badge" style="background:var(--bg-glass);color:var(--text-muted);">Mới</span>';
        
        if (tp) {
            if (tp.passed) {
                badge = '<span class="qt-badge" style="background:var(--success-glow);color:var(--success);">✅ PASS</span>';
            } else {
                badge = `<span class="qt-badge" style="background:var(--danger-glow);color:var(--danger);">${tp.bestScore}/${tp.totalQ}</span>`;
            }
        }
        
        html += `
            <div class="quiz-topic-card" onclick="startTopicQuiz(${t})">
                <span class="qt-icon">${info.icon}</span>
                <div class="qt-info">
                    <div class="qt-name">CĐ${t}: ${info.name}</div>
                    <div class="qt-meta">${info.totalQuestions} câu</div>
                </div>
                ${badge}
            </div>
        `;
    }
    grid.innerHTML = html;
    
    // Exam unlock check
    let passedCount = 0;
    for (let t = 1; t <= 7; t++) {
        if (progress.topics[t] && progress.topics[t].passed) passedCount++;
    }
    const examBtn = document.getElementById('btn-start-exam');
    const examStatus = document.getElementById('exam-status');
    if (passedCount >= 7) {
        examBtn.disabled = false;
        examStatus.textContent = '🔓';
    } else {
        examBtn.disabled = true;
        examStatus.textContent = '🔒';
    }
}

// ─── Progress Dashboard ───────────────────────────────────────
function renderProgressDashboard() {
    const progress = loadProgress();
    
    // Stats
    let totalDone = 0, totalCorrect = 0, passedCount = 0;
    for (let t = 1; t <= 8; t++) {
        const tp = progress.topics[t];
        if (tp) {
            totalDone += tp.totalQ * tp.attempts;
            totalCorrect += tp.bestScore;
            if (tp.passed) passedCount++;
        }
    }
    
    document.getElementById('stat-total-done').textContent = totalDone;
    const totalQ = Object.values(TOPIC_INFO).reduce((s, t) => s + t.totalQuestions, 0);
    const accuracy = totalDone > 0 ? Math.round((totalCorrect / (passedCount > 0 ? Object.keys(progress.topics).length * 20 : 1)) * 100) : 0;
    document.getElementById('stat-accuracy').textContent = totalCorrect > 0 ? Math.round(totalCorrect / Object.keys(progress.topics).length) + ' câu/CĐ' : '—';
    document.getElementById('stat-passed').textContent = `${passedCount}/8`;
    document.getElementById('stat-streak').textContent = `🔥 ${progress.streak.current}`;
    
    // Detail rows
    const detail = document.getElementById('progress-detail');
    let html = '';
    for (let t = 1; t <= 8; t++) {
        const info = TOPIC_INFO[t];
        const tp = progress.topics[t];
        let pct = 0, badgeHTML = '', metaText = 'Chưa làm', barColor = 'var(--gradient-primary)';
        
        if (tp) {
            pct = Math.round((tp.bestScore / tp.totalQ) * 100);
            metaText = `Tốt nhất: ${tp.bestScore}/${tp.totalQ} (${pct}%) • ${tp.attempts} lần thi`;
            if (tp.passed) {
                badgeHTML = '<span class="progress-row-badge" style="background:var(--success-glow);color:var(--success);">PASS</span>';
                barColor = 'var(--gradient-success)';
            } else {
                badgeHTML = '<span class="progress-row-badge" style="background:var(--danger-glow);color:var(--danger);">FAIL</span>';
                barColor = 'var(--gradient-danger)';
            }
        } else {
            badgeHTML = '<span class="progress-row-badge" style="background:var(--bg-glass);color:var(--text-muted);">—</span>';
        }
        
        html += `
            <div class="progress-row">
                <span class="progress-row-icon">${info.icon}</span>
                <div class="progress-row-info">
                    <div class="progress-row-name">CĐ${t}: ${info.name}</div>
                    <div class="progress-row-meta">${metaText}</div>
                    <div class="progress-row-bar">
                        <div class="progress-row-fill" style="width:${pct}%;background:${barColor};"></div>
                    </div>
                </div>
                ${badgeHTML}
            </div>
        `;
    }
    detail.innerHTML = html;
}

// ─── Start Quiz ───────────────────────────────────────────────
function startTopicQuiz(topicId) {
    const questions = QUIZ_BANK.filter(q => q.topic === topicId && q.correct >= 0);
    if (questions.length === 0) {
        alert('Chưa có câu hỏi nào có đáp án cho chủ đề này!');
        return;
    }
    
    const info = TOPIC_INFO[topicId];
    STATE.quiz = {
        active: true,
        mode: 'topic',
        topicId: topicId,
        questions: shuffleArray([...questions]),
        currentIndex: 0,
        userAnswers: new Array(questions.length).fill(-1),
        hintsUsed: questions.map(() => []),
        startTime: Date.now(),
        timerInterval: null,
        isSubmitted: false,
        isReviewMode: false,
    };
    
    document.getElementById('quiz-topic-title').textContent = `CĐ${topicId}: ${info.name}`;
    document.getElementById('quiz-total-count').textContent = questions.length;
    document.getElementById('quiz-timer').style.display = 'none';
    
    // Hide hint panel initially (will show per question)
    renderQuizNavigator();
    renderQuestion(0);
    showSection('quiz');
}

function startExamQuiz() {
    const allQ = QUIZ_BANK.filter(q => q.correct >= 0);
    const questions = shuffleArray([...allQ]).slice(0, 40);
    
    STATE.quiz = {
        active: true,
        mode: 'exam',
        topicId: null,
        questions: questions,
        currentIndex: 0,
        userAnswers: new Array(40).fill(-1),
        hintsUsed: questions.map(() => []),
        startTime: Date.now(),
        timerInterval: null,
        isSubmitted: false,
        isReviewMode: false,
    };
    
    document.getElementById('quiz-topic-title').textContent = '🏆 Thi thử Chương I';
    document.getElementById('quiz-total-count').textContent = '40';
    
    // Start timer (50 min)
    document.getElementById('quiz-timer').style.display = 'flex';
    startTimer(50 * 60);
    
    renderQuizNavigator();
    renderQuestion(0);
    showSection('quiz');
}

function startReviewWrongQuiz(wrongQuestions) {
    if (wrongQuestions.length === 0) return;
    
    STATE.quiz = {
        active: true,
        mode: 'review',
        topicId: null,
        questions: shuffleArray([...wrongQuestions]),
        currentIndex: 0,
        userAnswers: new Array(wrongQuestions.length).fill(-1),
        hintsUsed: wrongQuestions.map(() => []),
        startTime: Date.now(),
        timerInterval: null,
        isSubmitted: false,
        isReviewMode: false,
    };
    
    document.getElementById('quiz-topic-title').textContent = '🔄 Ôn lại câu sai';
    document.getElementById('quiz-total-count').textContent = wrongQuestions.length;
    document.getElementById('quiz-timer').style.display = 'none';
    
    renderQuizNavigator();
    renderQuestion(0);
    showSection('quiz');
}

// ─── Timer ────────────────────────────────────────────────────
function startTimer(seconds) {
    let remaining = seconds;
    updateTimerDisplay(remaining);
    STATE.quiz.timerInterval = setInterval(() => {
        remaining--;
        updateTimerDisplay(remaining);
        if (remaining <= 0) {
            clearInterval(STATE.quiz.timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    document.getElementById('timer-value').textContent = `${m}:${s.toString().padStart(2, '0')}`;
    if (seconds < 300) {
        document.getElementById('timer-value').style.color = 'var(--danger)';
    }
}

// ─── Render Quiz ──────────────────────────────────────────────
function renderQuizNavigator() {
    const nav = document.getElementById('quiz-navigator');
    const { questions, userAnswers, currentIndex, isSubmitted } = STATE.quiz;
    let html = '';
    
    for (let i = 0; i < questions.length; i++) {
        let cls = 'nav-btn';
        if (i === currentIndex) cls += ' current';
        else if (isSubmitted) {
            const correct = questions[i].correct;
            cls += userAnswers[i] === correct ? ' correct-review' : ' wrong-review';
        }
        else if (userAnswers[i] >= 0) cls += ' answered';
        html += `<button class="${cls}" onclick="goToQuestion(${i})">${i + 1}</button>`;
    }
    nav.innerHTML = html;
    
    // Update answered count
    const answered = userAnswers.filter(a => a >= 0).length;
    document.getElementById('quiz-answered-count').textContent = answered;
}

function renderQuestion(index) {
    const { questions, userAnswers, hintsUsed, isSubmitted, mode } = STATE.quiz;
    STATE.quiz.currentIndex = index;
    const q = questions[index];
    
    // Meta
    document.getElementById('question-number').textContent = `Câu ${index + 1}/${questions.length}`;
    document.getElementById('question-source').textContent = q.source || '';
    
    // Question text
    document.getElementById('question-text').textContent = q.question;
    
    // SVG
    const svgDiv = document.getElementById('question-svg');
    if (q.svg) {
        svgDiv.innerHTML = q.svg;
        svgDiv.style.display = 'block';
    } else {
        svgDiv.style.display = 'none';
    }
    
    // Options
    const optsList = document.getElementById('options-list');
    let optsHTML = '';
    for (let i = 0; i < q.options.length; i++) {
        let cls = 'option-btn';
        const letters = ['A', 'B', 'C', 'D'];
        
        if (isSubmitted) {
            cls += ' disabled';
            if (i === q.correct) cls += ' correct';
            else if (i === userAnswers[index] && i !== q.correct) cls += ' incorrect';
        } else {
            if (userAnswers[index] === i) cls += ' selected';
        }
        
        optsHTML += `
            <button class="${cls}" onclick="${isSubmitted ? '' : `selectOption(${index}, ${i})`}" ${isSubmitted ? 'disabled' : ''}>
                <span class="option-letter">${letters[i]}</span>
                <span>${q.options[i].substring(3)}</span>
            </button>
        `;
    }
    optsList.innerHTML = optsHTML;
    
    // Hint panel — hidden in review mode
    const hintPanel = document.getElementById('hint-panel');
    if (mode === 'review' || isSubmitted) {
        hintPanel.classList.add('hidden');
    } else {
        hintPanel.classList.remove('hidden');
        const usedCount = hintsUsed[index].length;
        const maxHints = Math.min(q.hints ? q.hints.length : 0, 3);
        const remaining = maxHints - usedCount;
        document.getElementById('hints-remaining').textContent = remaining;
        document.getElementById('btn-show-hint').disabled = remaining <= 0 || !q.hints || q.hints.length === 0;
        
        const hintContent = document.getElementById('hint-content');
        if (usedCount > 0 && q.hints) {
            let hintHTML = '';
            for (let h = 0; h < usedCount; h++) {
                hintHTML += `<p>💡 Gợi ý ${h + 1}: ${q.hints[h]}</p>`;
            }
            document.getElementById('hint-text').innerHTML = hintHTML;
            hintContent.style.display = 'block';
        } else {
            hintContent.style.display = 'none';
        }
    }
    
    // Explanation panel
    const explPanel = document.getElementById('explanation-panel');
    if (isSubmitted && q.explanation) {
        document.getElementById('explanation-content').innerHTML = q.explanation;
        explPanel.style.display = 'block';
    } else {
        explPanel.style.display = 'none';
    }
    
    // Bottom nav buttons
    document.getElementById('btn-prev-q').style.display = index > 0 ? '' : 'none';
    document.getElementById('btn-next-q').style.display = index < questions.length - 1 ? '' : 'none';
    
    if (!isSubmitted) {
        const allAnswered = userAnswers.every(a => a >= 0);
        document.getElementById('btn-submit-quiz').style.display = (index === questions.length - 1 || allAnswered) ? '' : 'none';
    } else {
        document.getElementById('btn-submit-quiz').style.display = 'none';
    }
    
    renderQuizNavigator();
}

function selectOption(qIndex, optIndex) {
    if (STATE.quiz.isSubmitted) return;
    STATE.quiz.userAnswers[qIndex] = optIndex;
    renderQuestion(qIndex);
}

function goToQuestion(index) {
    renderQuestion(index);
    // Scroll to top of question
    document.getElementById('question-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── Hints ────────────────────────────────────────────────────
function useHint() {
    const { currentIndex, hintsUsed, questions } = STATE.quiz;
    const q = questions[currentIndex];
    if (!q.hints || q.hints.length === 0) return;
    
    const used = hintsUsed[currentIndex].length;
    if (used >= q.hints.length) return;
    
    hintsUsed[currentIndex].push(used);
    renderQuestion(currentIndex);
}

// ─── Submit Quiz ──────────────────────────────────────────────
function trySubmitQuiz() {
    const { userAnswers } = STATE.quiz;
    const unanswered = userAnswers.reduce((arr, a, i) => { if (a < 0) arr.push(i + 1); return arr; }, []);
    
    if (unanswered.length > 0) {
        // Show modal
        document.getElementById('modal-submit-text').textContent = `Bạn còn ${unanswered.length} câu chưa làm.`;
        const container = document.getElementById('modal-unanswered');
        container.innerHTML = unanswered.map(n => 
            `<span class="unanswered-num" onclick="document.getElementById('modal-submit').style.display='none'; goToQuestion(${n - 1})">${n}</span>`
        ).join('');
        document.getElementById('modal-submit').style.display = 'flex';
    } else {
        submitQuiz();
    }
}

function submitQuiz() {
    document.getElementById('modal-submit').style.display = 'none';
    
    if (STATE.quiz.timerInterval) clearInterval(STATE.quiz.timerInterval);
    STATE.quiz.isSubmitted = true;
    
    const { questions, userAnswers, hintsUsed, startTime, topicId, mode } = STATE.quiz;
    
    // Calculate score
    let correctCount = 0;
    const wrongQuestions = [];
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].correct) {
            correctCount++;
        } else {
            wrongQuestions.push(questions[i]);
        }
    }
    
    const totalQ = questions.length;
    const pct = Math.round((correctCount / totalQ) * 100);
    const passed = pct >= 75;
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    const totalHints = hintsUsed.reduce((s, h) => s + h.length, 0);
    
    // Save progress
    if (mode === 'topic' && topicId) {
        const progress = loadProgress();
        if (!progress.topics[topicId]) {
            progress.topics[topicId] = { bestScore: 0, totalQ: totalQ, attempts: 0, passed: false, wrongHistory: [] };
        }
        const tp = progress.topics[topicId];
        tp.attempts++;
        tp.totalQ = totalQ;
        if (correctCount > tp.bestScore) {
            tp.bestScore = correctCount;
        }
        if (passed && !tp.passed) {
            tp.passed = true;
        }
        // Update wrong history
        tp.wrongHistory = wrongQuestions.map(q => q.id);
        
        // Update streak
        const today = new Date().toISOString().split('T')[0];
        if (progress.streak.lastDate !== today) {
            const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
            if (progress.streak.lastDate === yesterday) {
                progress.streak.current++;
            } else {
                progress.streak.current = 1;
            }
            progress.streak.lastDate = today;
        }
        
        progress.totalAttempts++;
        saveProgress(progress);
    }
    
    // Show result
    showResult(correctCount, totalQ, pct, passed, elapsed, totalHints, wrongQuestions);
}

// ─── Result Screen ────────────────────────────────────────────
function showResult(correct, total, pct, passed, elapsed, hints, wrongQuestions) {
    const card = document.getElementById('result-card');
    card.className = 'result-card ' + (passed ? 'pass' : 'fail');
    
    document.getElementById('result-icon').textContent = passed ? '🎉' : '😤';
    document.getElementById('result-title').textContent = passed ? 'Xuất sắc!' : 'Chưa đạt!';
    document.getElementById('result-score').textContent = `${correct}/${total}`;
    document.getElementById('result-percentage').textContent = `${pct}%`;
    document.getElementById('result-badge').textContent = passed ? '✅ PASS (≥75%)' : `❌ CHƯA ĐẠT (cần ≥75%)`;
    
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    document.getElementById('result-time').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    document.getElementById('result-hints').textContent = hints;
    
    // Best score
    if (STATE.quiz.topicId) {
        const progress = loadProgress();
        const tp = progress.topics[STATE.quiz.topicId];
        if (tp) {
            document.getElementById('result-best').textContent = `${tp.bestScore}/${tp.totalQ}`;
        }
    } else {
        document.getElementById('result-best').textContent = `${correct}/${total}`;
    }
    
    // Wrong answers list
    const wrongSection = document.getElementById('wrong-answers-section');
    const wrongList = document.getElementById('wrong-answers-list');
    const reviewBtn = document.getElementById('btn-review-wrong');
    
    if (wrongQuestions.length > 0) {
        wrongSection.style.display = 'block';
        document.getElementById('wrong-count').textContent = wrongQuestions.length;
        
        let html = '';
        wrongQuestions.forEach((q, i) => {
            html += `
                <div class="wrong-item" onclick="goToQuestion(${STATE.quiz.questions.indexOf(q)})">
                    <span class="wrong-item-text">Câu ${STATE.quiz.questions.indexOf(q) + 1}: ${q.question.substring(0, 80)}...</span>
                    <span class="wrong-item-action">Xem giải ▶</span>
                </div>
            `;
        });
        wrongList.innerHTML = html;
        
        reviewBtn.style.display = '';
        reviewBtn.onclick = () => startReviewWrongQuiz(wrongQuestions);
    } else {
        wrongSection.style.display = 'none';
        reviewBtn.style.display = 'none';
    }
    
    showSection('result');
    
    // Confetti if passed
    if (passed) spawnConfetti();
}

// ─── Confetti ─────────────────────────────────────────────────
function spawnConfetti() {
    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#ec4899'];
    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 2 + 's';
        piece.style.animationDuration = (2 + Math.random() * 2) + 's';
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 5000);
    }
}

// ─── Utility ──────────────────────────────────────────────────
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ─── Event Listeners ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Nav links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(link.dataset.section);
        });
    });
    
    // Mobile menu
    document.getElementById('nav-menu-btn').addEventListener('click', () => {
        document.getElementById('mobile-nav-overlay').classList.toggle('active');
    });
    document.getElementById('mobile-nav-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            e.currentTarget.classList.remove('active');
        }
    });
    
    // Hero buttons
    document.getElementById('btn-start-learn').addEventListener('click', () => showSection('lessons'));
    document.getElementById('btn-start-quiz').addEventListener('click', () => showSection('quiz-select'));
    
    // Lesson tabs
    document.querySelectorAll('.lesson-tab').forEach(tab => {
        tab.addEventListener('click', () => renderLesson(parseInt(tab.dataset.topic)));
    });
    document.getElementById('btn-lesson-to-quiz').addEventListener('click', () => {
        startTopicQuiz(STATE.currentLessonTopic);
    });
    
    // Quiz nav
    document.getElementById('btn-prev-q').addEventListener('click', () => {
        if (STATE.quiz.currentIndex > 0) goToQuestion(STATE.quiz.currentIndex - 1);
    });
    document.getElementById('btn-next-q').addEventListener('click', () => {
        if (STATE.quiz.currentIndex < STATE.quiz.questions.length - 1) goToQuestion(STATE.quiz.currentIndex + 1);
    });
    document.getElementById('btn-submit-quiz').addEventListener('click', trySubmitQuiz);
    document.getElementById('btn-quiz-back').addEventListener('click', () => {
        if (STATE.quiz.isSubmitted || confirm('Bạn có chắc muốn thoát? Bài làm sẽ không được lưu.')) {
            if (STATE.quiz.timerInterval) clearInterval(STATE.quiz.timerInterval);
            STATE.quiz.active = false;
            showSection('quiz-select');
        }
    });
    
    // Hints
    document.getElementById('btn-show-hint').addEventListener('click', useHint);
    
    // Submit modal
    document.getElementById('btn-modal-cancel').addEventListener('click', () => {
        document.getElementById('modal-submit').style.display = 'none';
    });
    document.getElementById('btn-modal-confirm').addEventListener('click', submitQuiz);
    
    // Result buttons
    document.getElementById('btn-review-all').addEventListener('click', () => {
        STATE.quiz.isSubmitted = true;
        STATE.quiz.isReviewMode = true;
        renderQuizNavigator();
        renderQuestion(0);
        showSection('quiz');
    });
    document.getElementById('btn-retry-quiz').addEventListener('click', () => {
        if (STATE.quiz.topicId) {
            startTopicQuiz(STATE.quiz.topicId);
        } else {
            showSection('quiz-select');
        }
    });
    document.getElementById('btn-result-home').addEventListener('click', () => showSection('home'));
    
    // Exam
    document.getElementById('btn-start-exam').addEventListener('click', startExamQuiz);
    
    // Reset
    document.getElementById('btn-reset-progress').addEventListener('click', () => {
        document.getElementById('modal-reset').style.display = 'flex';
    });
    document.getElementById('btn-reset-cancel').addEventListener('click', () => {
        document.getElementById('modal-reset').style.display = 'none';
    });
    document.getElementById('btn-reset-confirm').addEventListener('click', () => {
        resetProgress();
        document.getElementById('modal-reset').style.display = 'none';
        renderProgressDashboard();
        alert('Đã xóa toàn bộ tiến trình!');
    });
    
    // Easter Egg
    const easterEggBtn = document.getElementById('easter-egg-btn');
    const modalEasterEgg = document.getElementById('modal-easter-egg');
    const btnCloseEasterEgg = document.getElementById('btn-close-easter-egg');
    
    if (easterEggBtn && modalEasterEgg && btnCloseEasterEgg) {
        easterEggBtn.addEventListener('click', () => {
            modalEasterEgg.style.display = 'flex';
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#ff69b4', '#6366f1', '#fb923c']
                });
            }
        });
        
        btnCloseEasterEgg.addEventListener('click', () => {
            modalEasterEgg.style.display = 'none';
        });
    }

    // Initialize
    renderHome();
});
