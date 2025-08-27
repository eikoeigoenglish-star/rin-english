const QUIZ_COUNT = 10;
const $quizSection   = document.getElementById("quizSection");
const $resultSection = document.getElementById("resultSection");
const $progress      = document.getElementById("progress");
const $question      = document.getElementById("question");
const $choices       = document.getElementById("choices");
const $nextBtn       = document.getElementById("nextBtn");
const $scoreText     = document.getElementById("scoreText");
const $reviewTBody   = document.getElementById("reviewTableBody");
const $restartBtn    = document.getElementById("restartBtn");

let quiz = [];
let answers = [];
let idx = 0;

function showError(msg) {
  console.error(msg);
  $question.textContent = "エラー: " + msg;
  $choices.innerHTML = "";
  $nextBtn.disabled = true;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [a[i], a[r]] = [a[r], a[i]];
  }
  return a;
}
function sample(arr, n) { return shuffle(arr).slice(0, n); }

function buildQuizSet(pool, n) {
  const count = Math.min(n, pool.length);
  if (!count) throw new Error("questions.js に問題がありません");
  return sample(pool, count).map(q => {
    if (!q || typeof q.q !== "string" || !Array.isArray(q.choices) || typeof q.answer !== "number") {
      throw new Error("questions.js の形式が不正です（q/choices/answer）");
    }
    const indexed = q.choices.map((c, i) => ({ c, i }));
    const mixed = shuffle(indexed);
    const answerIndex = mixed.findIndex(x => x.i === q.answer);
    if (answerIndex < 0) throw new Error("answer が選択肢範囲外です");
    return { q: q.q, choices: mixed.map(x => x.c), answer: answerIndex };
  });
}

function init() {
  const ALL_QUESTIONS = window.QUIZ_QUESTIONS;
  if (!Array.isArray(ALL_QUESTIONS) || ALL_QUESTIONS.length === 0) {
    showError("questions.js が読み込めません（window.QUIZ_QUESTIONS が未定義）");
    return;
  }

  try {
    quiz = buildQuizSet(ALL_QUESTIONS, QUIZ_COUNT);
  } catch (e) {
    showError(e.message);
    return;
  }

  answers = Array(quiz.length).fill(null);
  idx = 0;
  $resultSection.classList.add("d-none");
  $quizSection.classList.remove("d-none");
  renderQuestion();
}

function renderQuestion() {
  const total = quiz.length;
  if (idx >= total) return showResult();

  const it = quiz[idx];
  $progress.textContent = `Q${idx + 1} / ${total}`;
  $question.textContent = it.q;

  $choices.innerHTML = "";
  it.choices.forEach((text, i) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    const btn = document.createElement("button");
    btn.className = "w-100 text-start";
    btn.textContent = `${"ABCD"[i]}. ${text}`;
    btn.addEventListener("click", () => onSelect(i));
    li.appendChild(btn);
    $choices.appendChild(li);
  });

  $nextBtn.disabled = true;
  $nextBtn.textContent = (idx + 1 === total) ? "結果を見る ▶" : "次へ ▶";
  $nextBtn.onclick = () => { idx++; renderQuestion(); };
}

function onSelect(choiceIdx) {
  if (answers[idx] !== null) return;   // 多重クリック防止
  answers[idx] = choiceIdx;

  document.querySelectorAll("#choices button").forEach(b => b.disabled = true);
  $nextBtn.disabled = false;
}

function showResult() {
  const total = quiz.length;
  const score = quiz.reduce((acc, q, i) => acc + (q.answer === answers[i] ? 1 : 0), 0);

  $quizSection.classList.add("d-none");
  $resultSection.classList.remove("d-none");

  $scoreText.textContent = `得点：${score} / ${total}`;

  $reviewTBody.innerHTML = "";
  quiz.forEach((q, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${q.q}</td>
      <td>${q.choices[q.answer]}</td>
      <td>${answers[i] != null ? q.choices[answers[i]] : "未回答"}</td>
    `;
    $reviewTBody.appendChild(tr);
  });

  $restartBtn.onclick = init;
}

if (document.readyState !== "loading") init();
else document.addEventListener("DOMContentLoaded", init);
