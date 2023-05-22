const functionContainerVariable = function () {
  return 20;
};
const myBoolean = true;
var myString = "hello world";
var firstNumber = 20;
var secondNumber = 40;

secondNumber = 80;

let myArray = [myBoolean, myString];

var myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber,
};

console.log(myObject);
console.log(myObject.sumProperty);
console.log(myArray[1]);
