const QUIZ_COUNT = 10;
const QUESTIONS_URL = "./questions.js?v=7";  // ←必ず最新番号に

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

function shuffle(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[r]] = [arr[r], arr[i]];
  }
  return arr;
}
function sample(a, n) { return shuffle(a).slice(0, n); }

function buildQuizSet(pool, n) {
  const count = Math.min(n, pool.length);
  if (!count) throw new Error("questions.js に有効な問題がありません");
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

async function init() {
  let ALL_QUESTIONS;
  try {
    const mod = await import(QUESTIONS_URL);
    ALL_QUESTIONS = mod.default;
    if (!Array.isArray(ALL_QUESTIONS)) throw new Error("default export が配列ではありません");
  } catch (e) {
    showError("questions.js の読み込み失敗（" + e.message + "）。URL: " + QUESTIONS_URL);
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
  if (answers[idx] !== null) return;
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
