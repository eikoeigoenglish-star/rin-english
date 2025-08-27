import ALL_QUESTIONS from "./questions.js";

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

// utils
function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [a[i], a[r]] = [a[r], a[i]];
  }
  return a;
}

function sample(array, n) {
  return shuffle(array).slice(0, n);
}

// build question set
function buildQuizSet(pool, n) {
  const count = Math.min(n, pool.length);
  return sample(pool, count).map(q => {
    const indexed = q.choices.map((c, i) => ({ c, i }));
    const mixed = shuffle(indexed);
    const answerIndex = mixed.findIndex(x => x.i === q.answer);
    return {
      q: q.q,
      choices: mixed.map(x => x.c),
      answer: answerIndex,
      exp: q.exp ?? ""
    };
  });
}

// ---- flow ----
function init() {
  quiz = buildQuizSet(ALL_QUESTIONS, QUIZ_COUNT);
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
    if (idx >= total) {
      showResult();
    } else {
      renderQuestion();
    }
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
  quiz.forEach((q, i) => {
    const tr = document.createElement("tr");

    const tdNo = document.createElement("td");
    tdNo.textContent = i + 1;

    const tdQ = document.createElement("td");
    tdQ.textContent = q.q;

    const tdAns = document.createElement("td");
    tdAns.textContent = q.choices[q.answer];

    const tdYour = document.createElement("td");
    const yourIdx = answers[i];
    tdYour.textContent = (yourIdx !== null) ? q.choices[yourIdx] : "未回答";

    tr.appendChild(tdNo);
    tr.appendChild(tdQ);
    tr.appendChild(tdAns);
    tr.appendChild(tdYour);

    $reviewTBody.appendChild(tr);
  });

  $restartBtn.onclick = init;
}

document.addEventListener("DOMContentLoaded", init);
