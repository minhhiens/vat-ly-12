// ═══════════════════════════════════════════════════════════════
// VẬT LÝ 12 — QUIZ ENGINE V3
// Multi-topic, hints, wrong answer review, localStorage progress
// ═══════════════════════════════════════════════════════════════

// ─── Lesson Content loaded from lessonContent.js ──────────────
// LESSON_CONTENT is defined in lessonContent.js (loaded before app.js)
// Contains comprehensive theory for all 8 topics with:
// - Worked examples (Ví dụ mẫu)
// - Problem types (Các dạng bài tập)
// - Quick tips (Mẹo giải nhanh)
// - Common traps (Bẫy đề thi)

// Legacy fallback (should not be needed)
if (typeof LESSON_CONTENT === 'undefined') {
    var LESSON_CONTENT = { 1: '<p>Đang tải nội dung...</p>' };
    console.warn('LESSON_CONTENT not loaded! Check lessonContent.js');
}


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
