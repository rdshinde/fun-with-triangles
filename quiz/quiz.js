const form = document.querySelector(".quiz-form");
const submitBtn = document.querySelector(".submitBtn");
const resultDiv = document.querySelector(".result");
// Array of correct answers.
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

const checkScore = () => {
  let points = 0;
  let index = 0;
  const formResult = new FormData(form); //Using Form Data api to get data from form.
  for (let value of formResult.values()) {
    if (value === ans[index]) {
      points = points + 1;
    }
    index = index + 1;
  }
  resultDiv.innerText = ` Congratulations! 🎉 You scored ${points} points.`;
}
// Event Listener for submit button
submitBtn.addEventListener('click',checkScore);
