function getGradeFromPoints(points) {
  if (points >= 90) {
    return "A";
  } else if (points >= 70) {
    return "B";
  } else if (points >= 50) {
    return "C";
  } else if (points >= 40) {
    return "D";
  }
  return "E";
}

let grade = getGradeFromPoints(40);
console.log(grade);


// to debug, fixed operators and changed 'const grade' to 'let grade'