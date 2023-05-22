function years() {
  for (var i = 0; i < 20; i++) {
    console.log("i am " + i + " years");
  }
}
// anonymous function in javaScript
const arrowFunntion = () => {
  for (var i = 0; i < 10; i++) {
    console.log("you have " + i + " minutes left to eat");
  }
};

years();
arrowFunntion();
let boneshaker = () => {
  for (var i = 0; i < 10; i++) {
    console.log("the time is " + i + " O clock");
  }
};

const myReturnFunction = () => {
  const time = 20;
  return time + 40;
};

const arrayReturn = () => {
  return [20, 40, 60, "time"];
};
console.log(myReturnFunction());

console.log(arrayReturn());
