function accessStudentMarks() {
  let studentMarks;
  while (true) {
    studentMarks = prompt("Type in student marks between 0 and 100:"); // prompts the user to key in data
    if (studentMarks === null) {
      return; // exits the prompt when cancel is clicked
    }
    studentMarks = parseFloat(studentMarks);
    if (!isNaN(studentMarks) && studentMarks >= 0 && studentMarks <= 100) {
      break;
    } else {
      alert("Please type in a number between 0 and 100!"); //alerts the user incase the value keyed in is not a number
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
  alert(`The grade for marks ${studentMarks} is: ${grade}`); // alerts the user of the grade according to the value keyed in
}
