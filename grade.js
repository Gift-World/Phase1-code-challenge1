function accessStudentMarks() {
  let studentMarks;
  while (true) {
    studentMarks = prompt("Type in student marks between 0 and 100:");
    if (studentMarks === null) {
      return;
    }
    studentMarks = parseFloat(studentMarks);
    if (!isNaN(studentMarks) && studentMarks >= 0 && studentMarks <= 100) {
      break;
    } else {
      alert("Please type in a number between 0 and 100!");
    }
  }

  let grade;

  if (studentMarks > 79) {
    grade = "A";
  } else if (studentMarks >= 60) {
    grade = "B";
  } else if (studentMarks >= 49) {
    grade = "C";
  } else if (studentMarks >= 40) {
    grade = "D";
  } else if (studentMarks < 40) {
    grade = "E";
  }
  alert(`The grade for marks ${studentMarks} is: ${grade}`);
}
