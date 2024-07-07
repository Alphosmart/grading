function gradeStudent() {
  const score = parseInt(document.getElementById("score").value);
  const resultElement = document.getElementById("result");
  let grade = "";
  let sound = "";
  if (score >= 90) {
    grade = "A";
    sound = document.getElementById("soundA");
  } else if (score >= 80) {
    grade = "B";
    sound = document.getElementById("soundB");
  } else if (score >= 70) {
    grade = "C";
    sound = document.getElementById("soundC");
  } else if (score >= 60) {
    grade = "D";
    sound = document.getElementById("soundD");
  } else {
    grade = "Fail";
    sound = document.getElementById("soundF");
  }
  resultElement.textContent = `The student's grade is: ${grade}`;
  sound.play();
}
