const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");

const checkBtn = document.querySelector("#checkBtn");
const resultDiv = document.querySelector(".result");

const message = msg => {
  resultDiv.innerText = msg;
}

const isTriangle = () => {
  const a1 = parseFloat(angle1.value);
  const a2 = parseFloat(angle2.value);
  const a3 = parseFloat(angle3.value);
  // Condition for invalid values.
  if (a1 > 0 && a2 > 0 && a3 > 0) {
    if (a1 + a2 + a3 === 180.0) {
      message("Yass! These angles can form the triangle.✌️");
      resultDiv.style.color = "white";
    }
    else{
        message("No! These angles cannot form the triangle.😞")
        resultDiv.style.color = "#ff0011";
    }
  }
  else{
      message("Please enter valid angle values.");
      resultDiv.style.color = "#ff0011";

  }
}
// Event Listener for check button
checkBtn.addEventListener("click", isTriangle);
