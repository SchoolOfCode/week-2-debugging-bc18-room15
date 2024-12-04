function countNumberOfNinesInNumber(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    const digit = number[i];
    if ("9" === digit) {
      count++;
    }
  }

//  return count;
}

// declaring function called countNumberOfNinesInNumber, which takes in a parameter called number
// define a variable called count to track the number of 9s in number, starting at 0

// for loop, iterates through number
// declaring constant variable called digit
// 

console.log(countNumberOfNinesInNumber(99.999));


let word = [1, 2, 3];

for (let i = 0; i < word.length; i++) {
  console.log(i);
}