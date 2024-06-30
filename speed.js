function speedChecker() {
  let speed = prompt("Enter speed of car");
  if (isNaN(speed)) {
    alert("Error!! Enter a valid speed!");
    return;
  }

  const speedLimit = 70;
  const demeritPointsPerKm = 5;

  if (speed <= speedLimit) {
    alert("Ok");
  } else {
    const demeritPoints = Math.abs((speed - speedLimit) / demeritPointsPerKm);

    if (demeritPoints > 12) {
      alert("Licence Suspended");
    } else {
      alert(`Points: ${demeritPoints}`);
    }
  }
}
