const QUIZ_COUNT = 10;
const QUESTIONS_URL = "./questions.js?v=7";

async function init() {
  try {
    const mod = await import(QUESTIONS_URL);  // ← これで questions を確実に読む
    const ALL_QUESTIONS = mod.default;
    // 以降は既存ロジックのままでOK
  } catch (e) {
    document.getElementById("question").textContent =
      "エラー: questions.js の読み込みに失敗しました";
    console.error(e);
    return;
  }
}
// 既存の init 呼び出しはこのまま
if (document.readyState !== "loading") init();
else document.addEventListener("DOMContentLoaded", init);

const $quizSection   = document.getElementById("quizSection");
const $resultSection = document.getElementById("resultSection");
const $progress      = document.getElementById("progress");
const $question      = document.getElementById("question");
const $choices       = document.getElementById("choices");
const $nextBtn       = document.getElementById("nextBtn");
const $scoreText     = document.getElementById("scoreText");
const $reviewTBody   = document.getElementById("reviewTableBody");
const $restartBtn    = document.getElementById("restartBtn");

let ALL_QUESTIONS = [];
let quiz = [];
let answers = [];
let idx = 0;

function setError(msg) {
  $question.textContent = "エラー: " + msg;
  $choices.innerHTML = "";
  if ($nextBtn) $nextBtn.disabled = true;
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
  return sample(pool, count).map(q => {
    if (!q || !Array.isArray(q.choices) || typeof q.answer !== "number") {
      throw new Error("questions.js の形式が不正です");
    }
    const indexed = q.choices.map((c, i) => ({ c, i }));
    const mixed = shuffle(indexed);
    const answerIndex = mixed.findIndex(x => x.i === q.answer);
    if (answerIndex < 0) throw new Error("answer が選択肢範囲外です");
    return { q: q.q, choices: mixed.map(x => x.c), answer: answerIndex, exp: q.exp ?? "" };
  });
}

async function init() {
  try {
    const mod = await import("./questions.js?v=3");
    ALL_QUESTIONS = mod.default;
    if (!Array.isArray(ALL_QUESTIONS) || ALL_QUESTIONS.length === 0) {
      throw new Error("questions.js が読み込めませんでした");
    }
  } catch (e) {
    console.error(e);
    setError("questions.js の読み込みに失敗しました: " + e.message);
    return;
  }

  try {
    quiz = buildQuizSet(ALL_QUESTIONS, QUIZ_COUNT);
  } catch (e) {
    console.error(e);
    setError(e.message);
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
  const item = quiz[idx];

  $progress.textContent = `Q${idx + 1} / ${total}`;
  $question.textContent = item.q;

  $choices.innerHTML = "";
  item.choices.forEach((text, choiceIdx) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    const btn = document.createElement("button");
    btn.className = "w-100 text-start";
    btn.textContent = `${"ABCD"[choiceIdx]}. ${text}`;
    btn.addEventListener("click", () => onSelect(choiceIdx));
    li.appendChild(btn);
    $choices.appendChild(li);
  });

  $nextBtn.disabled = true;
  $nextBtn.textContent = (idx + 1 === total) ? "結果を見る ▶" : "次へ ▶";
  $nextBtn.onclick = () => {
    idx++;
    if (idx >= total) showResult();
    else renderQuestion();
  };
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
  quiz.forEach((q,
