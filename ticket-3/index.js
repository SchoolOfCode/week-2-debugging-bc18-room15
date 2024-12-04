function countNumberOfNinesInNumber(number) {
  let count = 0;
  // assigning new variable to convert number to a string
  let numberAsString = number.toString();


  for (let i = 0; i < numberAsString.length; i++) {
    const digit = numberAsString[i];
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}