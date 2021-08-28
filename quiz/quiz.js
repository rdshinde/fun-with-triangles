const form = document.querySelector(".quiz-form");
const submitBtn = document.querySelector(".submitBtn");
const resultDiv = document.querySelector(".result");

const ans = [
  "35°",
  "acute",
  "one",
  "12, 16, 20",
  "yes",
  "85°",
  "Side, Side , Angle (SSA)",
  "equilatoral",
  "Isosceles",
  "55°",
];

function checkScore() {
  let points = 0;
  let index = 0;
  const formResult = new FormData(form);
  for (let value of formResult.values()) {
    if (value === ans[index]) {
      points = points + 1;
    }
    index = index + 1;
  }
  resultDiv.innerText = ` Congratulations! 🎉 You scored ${points} points.`;
}
submitBtn.addEventListener('click',checkScore);