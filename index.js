const inputContainer = document.getElementById("enter-marks");
const resultContainer = document.getElementById("grade");

inputContainer.addEventListener("input", calculateGrade);

function calculateGrade() {
    const input = inputContainer.value;
  
    if (isNaN(input) || input < 0 || input > 100) {
      alert("Invalid input. Please enter valid marks between 0 and 100.");
      return;
    }
  
    let grade;
    if (input > 79) {
        grade = 'A';
    } else if (input >= 60 && input < 80) {
        grade = 'B';
    } else if (input >= 50 && input <60) {
        grade = 'C';
    } else if (input >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    resultContainer.textContent = `${grade}`;
    resultContainer.style.fontSize = "100px";

}
