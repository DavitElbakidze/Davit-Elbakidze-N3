let numbers1 = [3, 7];
let numbers2 = [12, 5, 8];

let numbers = [...numbers1, ...numbers2];
console.log(numbers);

let squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

let evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

let numbersSum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(numbersSum);

function checkNumbers(num) {
  if (num > 10 && num % 2 === 0) {
    return true;
  }
  return false;
}

console.log(checkNumbers(14));
