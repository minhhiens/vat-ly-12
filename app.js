/* ============================================
   VẬT LÝ 12 — HỌC TẬP WEB APP
   Interactive JavaScript
   ============================================ */

// ============================
// QUIZ DATA — 15 câu trắc nghiệm
// ============================
const quizData = [
    {
        question: "Mọi vật chất đều được cấu tạo từ gì?",
        options: [
            "Các hạt rất nhỏ (phân tử, nguyên tử)",
            "Các viên đá nhỏ",
            "Các giọt nước",
            "Không khí"
        ],
        correct: 0,
        explanation: "Đúng rồi! 🎉 Tất cả mọi vật đều được tạo thành từ các hạt rất nhỏ gọi là phân tử hoặc nguyên tử. Mắt thường không nhìn thấy được!"
    },
    {
        question: "Khi nhiệt độ tăng, các hạt phân tử sẽ như thế nào?",
        options: [
            "Đứng yên không chuyển động",
            "Chuyển động chậm lại",
            "Chuyển động nhanh hơn",
            "Biến mất"
        ],
        correct: 2,
        explanation: "Chính xác! 🔥 Nhiệt độ càng cao → các hạt chuyển động càng nhanh. Giống như mình: trời nóng thì chạy lung tung!"
    },
    {
        question: "Trong chất RẮN, các hạt phân tử được sắp xếp như thế nào?",
        options: [
            "Bay lung tung, rất xa nhau",
            "Đi lại tự do, không có trật tự",
            "Sắp xếp theo trật tự, rất gần nhau",
            "Nằm im không chuyển động"
        ],
        correct: 2,
        explanation: "Giỏi quá! 🧊 Trong chất rắn, các hạt đứng sát nhau theo trật tự nhất định, giống học sinh xếp hàng chào cờ vậy!"
    },
    {
        question: "Nước đá tan ra thành nước gọi là quá trình gì?",
        options: [
            "Bay hơi",
            "Đông đặc",
            "Ngưng tụ",
            "Nóng chảy"
        ],
        correct: 3,
        explanation: "Đúng rồi! 🫠 Nóng chảy = chuyển từ thể RẮN sang thể LỎNG. Ví dụ: đá lạnh tan thành nước."
    },
    {
        question: "Khi nước đang sôi ở 100°C, nếu tiếp tục đun thì nhiệt độ sẽ?",
        options: [
            "Tăng lên 200°C",
            "Tăng rất nhanh",
            "Vẫn giữ ở 100°C",
            "Giảm xuống"
        ],
        correct: 2,
        explanation: "Chính xác! ⚠️ Đây là điều CỰC KỲ quan trọng: khi đang sôi, nhiệt độ KHÔNG TĂNG dù vẫn đang đun. Nhiệt đó dùng để biến nước thành hơi."
    },
    {
        question: "Quần áo ướt phơi nắng khô đi là quá trình gì?",
        options: [
            "Nóng chảy",
            "Đông đặc",
            "Bay hơi",
            "Thăng hoa"
        ],
        correct: 2,
        explanation: "Đúng rồi! 💨 Bay hơi = nước (lỏng) biến thành hơi nước (khí) và bay đi. Đó là lý do quần áo khô!"
    },
    {
        question: "Ly nước đá có giọt nước bám bên ngoài là do quá trình gì?",
        options: [
            "Bay hơi",
            "Nóng chảy",
            "Ngưng tụ",
            "Thăng hoa"
        ],
        correct: 2,
        explanation: "Tuyệt vời! 💧 Ngưng tụ = hơi nước trong không khí (khí) gặp lạnh → biến thành giọt nước (lỏng) bám trên ly."
    },
    {
        question: "NỘI NĂNG của vật là gì?",
        options: [
            "Chiều cao của vật",
            "Màu sắc của vật",
            "Năng lượng bên trong vật do các hạt chuyển động",
            "Trọng lượng của vật"
        ],
        correct: 2,
        explanation: "Chính xác! 💰 Nội năng = năng lượng bên trong vật, giống tiền tiết kiệm trong heo đất — nhìn ngoài không thấy nhưng bên trong có!"
    },
    {
        question: "Xoa hai tay vào nhau thì tay nóng lên. Đây là cách thay đổi nội năng bằng?",
        options: [
            "Truyền nhiệt",
            "Thực hiện công",
            "Bay hơi",
            "Đông đặc"
        ],
        correct: 1,
        explanation: "Giỏi quá! 💪 Xoa tay = THỰC HIỆN CÔNG (dùng lực). Không cần lửa mà tay vẫn nóng lên — đó là 1 trong 2 cách thay đổi nội năng."
    },
    {
        question: "Định luật I nhiệt động lực học: ΔU = A + Q. Trong đó Q > 0 nghĩa là?",
        options: [
            "Vật thực hiện công",
            "Vật truyền nhiệt cho vật khác",
            "Vật NHẬN nhiệt lượng (nóng lên)",
            "Vật đứng yên"
        ],
        correct: 2,
        explanation: "Đúng rồi! 🔥 Q > 0 = vật NHẬN nhiệt (được đốt nóng). Q < 0 = vật TRUYỀN nhiệt (bị làm lạnh)."
    },
    {
        question: "27°C bằng bao nhiêu Kelvin (K)?",
        options: [
            "27 K",
            "246 K",
            "300 K",
            "373 K"
        ],
        correct: 2,
        explanation: "Chính xác! 🌡️ Công thức: T(K) = t(°C) + 273 = 27 + 273 = 300 K"
    },
    {
        question: "Nước sôi ở bao nhiêu độ C?",
        options: [
            "0°C",
            "50°C",
            "100°C",
            "200°C"
        ],
        correct: 2,
        explanation: "Đúng rồi! 🫧 Nước sôi ở 100°C (ở áp suất bình thường). Đây là kiến thức cơ bản rất quan trọng!"
    },
    {
        question: "Chất nào cần NHIỀU NHIỆT NHẤT để nóng lên: nước hay sắt?",
        options: [
            "Sắt — vì sắt nặng hơn",
            "Nước — vì nhiệt dung riêng của nước lớn hơn",
            "Giống nhau",
            "Không biết được"
        ],
        correct: 1,
        explanation: "Tuyệt vời! 💧 Nước có nhiệt dung riêng c = 4200 J/kg.K, còn sắt chỉ có c = 460 J/kg.K. Nước cần gần gấp 10 lần nhiệt lượng so với sắt!"
    },
    {
        question: "Công thức tính nhiệt lượng khi vật nóng lên/lạnh đi là gì?",
        options: [
            "Q = m × v",
            "Q = m × c × ΔT",
            "Q = λ × m",
            "Q = L × m"
        ],
        correct: 1,
        explanation: "Chính xác! ⭐ Q = m × c × ΔT là công thức tính nhiệt lượng khi vật thay đổi nhiệt độ (KHÔNG chuyển thể)."
    },
    {
        question: "Trong 'hành trình' Đá → Nước → Hơi, giai đoạn nào cần nhiệt lượng NHIỀU NHẤT?",
        options: [
            "Đá tan thành nước (nóng chảy)",
            "Nước nóng từ 0°C lên 100°C",
            "Nước sôi thành hơi (hóa hơi)",
            "Tất cả bằng nhau"
        ],
        correct: 2,
        explanation: "Xuất sắc! 💨 Giai đoạn hóa hơi cần nhiệt NHIỀU NHẤT vì nhiệt hóa hơi riêng của nước rất lớn: L = 2.260.000 J/kg!"
    }
];

// ============================
// DOM Elements
// ============================
const mainNav = document.getElementById('mainNav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const readingProgress = document.getElementById('readingProgress');
const backToTop = document.getElementById('backToTop');
const quizStart = document.getElementById('quizStart');
const quizContainer = document.getElementById('quizContainer');
const quizResults = document.getElementById('quizResults');
const quizProgress = document.getElementById('quizProgress');
const quizProgressFill = document.getElementById('quizProgressFill');
const quizCurrentNum = document.getElementById('quizCurrentNum');
const quizTotalNum = document.getElementById('quizTotalNum');
const startQuizBtn = document.getElementById('startQuizBtn');
const retryQuizBtn = document.getElementById('retryQuizBtn');

// ============================
// State
// ============================
let currentQuestion = 0;
let score = 0;
let answered = false;

// ============================
// Initialize
// ============================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initLessonAccordions();
    initScrollEffects();
    initNavToggle();
    initQuiz();
    initIntersectionObserver();
});

// ============================
// Particles
// ============================
function initParticles() {
    const container = document.getElementById('particles');
    const colors = [
        'hsla(250, 70%, 60%, 0.3)',
        'hsla(340, 80%, 60%, 0.2)',
        'hsla(38, 90%, 55%, 0.2)',
        'hsla(152, 60%, 50%, 0.2)',
        'hsla(200, 70%, 60%, 0.2)'
    ];

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 12 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDuration = `${Math.random() * 20 + 15}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(particle);
    }
}

// ============================
// Lesson Accordions
// ============================
function initLessonAccordions() {
    const lessonCards = document.querySelectorAll('.lesson-card');
    
    lessonCards.forEach(card => {
        const header = card.querySelector('.lesson-header');
        const content = card.querySelector('.lesson-content');
        
        header.addEventListener('click', () => {
            const isActive = card.classList.contains('active');
            
            // Close all
            lessonCards.forEach(c => {
                c.classList.remove('active');
                c.querySelector('.lesson-header').setAttribute('aria-expanded', 'false');
            });
            
            // Toggle current
            if (!isActive) {
                card.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
                
                // Scroll to card
                setTimeout(() => {
                    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });
}

// ============================
// Scroll Effects
// ============================
function initScrollEffects() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
}

function handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Reading progress
    readingProgress.style.width = `${scrollPercent}%`;
    
    // Nav scroll effect
    if (scrollTop > 50) {
        mainNav.classList.add('scrolled');
    } else {
        mainNav.classList.remove('scrolled');
    }
    
    // Back to top
    if (scrollTop > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// Back to top click
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================
// Nav Toggle (Mobile)
// ============================
function initNavToggle() {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    
    // Close on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// ============================
// Intersection Observer (Fade-in animations)
// ============================
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Add fade-in-up class to elements
    document.querySelectorAll('.lesson-card, .formula-card, .section-header').forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
}

// ============================
// Quiz Engine
// ============================
function initQuiz() {
    quizTotalNum.textContent = quizData.length;
    document.getElementById('resultsTotalScore').textContent = quizData.length;
    
    // Update hero stats
    const heroStats = document.querySelectorAll('.hero-stat-number');
    if (heroStats.length >= 2) {
        heroStats[1].textContent = quizData.length;
    }
    
    startQuizBtn.addEventListener('click', startQuiz);
    retryQuizBtn.addEventListener('click', retryQuiz);
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    
    quizStart.style.display = 'none';
    quizResults.style.display = 'none';
    quizContainer.classList.add('active');
    quizProgress.classList.add('active');
    
    showQuestion();
}

function retryQuiz() {
    startQuiz();
}

function showQuestion() {
    const q = quizData[currentQuestion];
    answered = false;
    
    // Update progress
    quizCurrentNum.textContent = currentQuestion + 1;
    quizProgressFill.style.width = `${((currentQuestion) / quizData.length) * 100}%`;
    
    const letters = ['A', 'B', 'C', 'D'];
    
    const html = `
        <div class="quiz-question" id="currentQuizQuestion">
            <div class="quiz-question-num">Câu hỏi ${currentQuestion + 1} / ${quizData.length}</div>
            <div class="quiz-question-text">${q.question}</div>
            <div class="quiz-options" id="quizOptions">
                ${q.options.map((opt, i) => `
                    <div class="quiz-option" data-index="${i}" id="quizOption${i}" role="button" tabindex="0">
                        <div class="quiz-option-letter">${letters[i]}</div>
                        <div class="quiz-option-text">${opt}</div>
                    </div>
                `).join('')}
            </div>
            <div class="quiz-feedback" id="quizFeedback">
                <div class="quiz-feedback-title" id="feedbackTitle"></div>
                <div class="quiz-feedback-text" id="feedbackText"></div>
            </div>
            <div class="quiz-actions">
                <button class="btn btn-primary quiz-next-btn" id="quizNextBtn">
                    <span>${currentQuestion < quizData.length - 1 ? '➡️' : '🏁'}</span>
                    ${currentQuestion < quizData.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                </button>
            </div>
        </div>
    `;
    
    quizContainer.innerHTML = html;
    
    // Add click listeners
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => {
        opt.addEventListener('click', () => selectAnswer(parseInt(opt.dataset.index)));
        opt.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectAnswer(parseInt(opt.dataset.index));
            }
        });
    });
    
    // Next button
    document.getElementById('quizNextBtn').addEventListener('click', nextQuestion);
}

function selectAnswer(index) {
    if (answered) return;
    answered = true;
    
    const q = quizData[currentQuestion];
    const isCorrect = index === q.correct;
    
    if (isCorrect) score++;
    
    // Highlight options
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
        opt.classList.add('disabled');
        if (i === q.correct) {
            opt.classList.add('correct');
        }
        if (i === index && !isCorrect) {
            opt.classList.add('wrong');
        }
    });
    
    // Show feedback
    const feedback = document.getElementById('quizFeedback');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackText = document.getElementById('feedbackText');
    
    feedback.classList.add('show');
    feedback.classList.add(isCorrect ? 'correct' : 'wrong');
    feedbackTitle.textContent = isCorrect ? '✅ Đúng rồi! Giỏi quá!' : '❌ Chưa đúng rồi — nhưng không sao!';
    feedbackText.textContent = q.explanation;
    
    // Show next button
    document.getElementById('quizNextBtn').classList.add('show');
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion >= quizData.length) {
        showResults();
    } else {
        showQuestion();
        // Scroll to top of quiz
        document.getElementById('quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showResults() {
    quizContainer.classList.remove('active');
    quizProgress.classList.remove('active');
    quizResults.style.display = 'block';
    
    // Update progress bar to 100%
    quizProgressFill.style.width = '100%';
    
    const percent = (score / quizData.length) * 100;
    
    // Icon and messages
    const resultsIcon = document.getElementById('resultsIcon');
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsMessage = document.getElementById('resultsMessage');
    const resultsScoreEl = document.getElementById('resultsScore');
    
    resultsScoreEl.textContent = score;
    
    if (percent >= 80) {
        resultsIcon.textContent = '🏆';
        resultsTitle.textContent = 'Xuất sắc! Giỏi quá!';
        resultsMessage.textContent = 'Em nắm rất vững kiến thức rồi! Tuyệt vời! 🎉';
    } else if (percent >= 60) {
        resultsIcon.textContent = '🎉';
        resultsTitle.textContent = 'Tốt lắm!';
        resultsMessage.textContent = 'Em hiểu khá nhiều rồi! Ôn lại vài chỗ nữa là giỏi lắm! 💪';
    } else if (percent >= 40) {
        resultsIcon.textContent = '💪';
        resultsTitle.textContent = 'Cố gắng thêm nha!';
        resultsMessage.textContent = 'Đọc lại bài học rồi làm lại — em sẽ giỏi hơn thôi! 📚';
    } else {
        resultsIcon.textContent = '🤗';
        resultsTitle.textContent = 'Không sao đâu!';
        resultsMessage.textContent = 'Đọc lại từ từ nha em. Sai để học mà! Lần sau sẽ tốt hơn! 💕';
    }
    
    // Breakdown
    const breakdown = document.getElementById('resultsBreakdown');
    const wrong = quizData.length - score;
    breakdown.innerHTML = `
        <div class="results-breakdown-item results-breakdown-correct">✅ Đúng: ${score} câu</div>
        <div class="results-breakdown-item results-breakdown-wrong">❌ Sai: ${wrong} câu</div>
    `;
    
    // Scroll to results
    setTimeout(() => {
        quizResults.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
}
