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
    const answerIndex = mixed.findIndex(x => x.i === q.answer
