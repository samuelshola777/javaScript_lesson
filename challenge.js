const firstNumber = 20;
const secondNumber = "20";

const result = firstNumber === secondNumber;

console.log(result);

const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);

const myObj = {
  prop1: "first value",
  prop2: 20,
};

const myArray = [40, 50, 2];
const resultz = myObj.prop2 === myArray[0] / myArray[2];

console.log(resultz);
