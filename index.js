const inputContainer = document.getElementById("enter-marks");
const resultContainer = document.getElementById("grade");
const clickButton = document.getElementById("checkButton")

// inputContainer.addEventListener("input", calculateGrade);
clickButton.addEventListener("click", calculateGrade);

function calculateGrade() {
    const input = parseFloat(inputContainer.value);
  
    if (isNaN(input) || (input < 0) || (input > 100)) {
      resultContainer.textContent = "Invalid input. Please enter valid marks between 0 and 100.";
      resultContainer.style.fontSize = "50px";
    } else {
        let grade;
        if (input > 79) {
            grade = 'A';
        } else if (input >= 60) {
            grade = 'B';
        } else if (input >= 50) {
            grade = 'C';
        } else if (input >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        resultContainer.textContent = `${grade}`;
        resultContainer.style.fontSize = "50px";
    }
}
