function speedChecker() {
  let speed = prompt("Enter speed of car"); //prompts the user to key in speed of car.
  if (isNaN(speed)) {
    alert("Error!! Enter a valid speed!"); //alerts the user when the value keyed in is not a number
    return;
  }

  const speedLimit = 70;
  const demeritPointsPerKm = 5;

  if (speed <= speedLimit) {
    alert("Ok");
  } else {
    const demeritPoints = Math.abs((speed - speedLimit) / demeritPointsPerKm);

    if (demeritPoints > 12) {
      alert("Licence Suspended"); //alerts the user if the speed limit has been exceeded
    } else {
      alert(`Points: ${demeritPoints}`);
    }
  }
}
