function gradeStudent() {
  const score = parseInt(document.getElementById("score").value);
  const resultElement = document.getElementById("result");
  let grade = "";
  let sound = "";
  if (score >= 90) {
    grade = "Excellent";
    sound = document.getElementById("soundA");
  } else if (score >= 80) {
    grade = "Very Good";
    sound = document.getElementById("soundB");
  } else if (score >= 70) {
    grade = "Credit";
    sound = document.getElementById("soundC");
  } else if (score >= 60) {
    grade = "Pass";
    sound = document.getElementById("soundD");
  } else {
    grade = "Fail";
    sound = document.getElementById("soundF");
  }
  resultElement.textContent = `Your overall result is ${grade}`;
  sound.play();
}
