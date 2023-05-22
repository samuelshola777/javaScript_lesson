const myObj = {
  nesteObject1: {
    price: 100,
    quantity: 5,
  },
  nesteObject2: {
    print: 150,
    quantity: 2,
  },
};

const myArray = [myObj.nesteObject1, myObj.nesteObject2];

const result =
  myArray[0].price * myArray[0].quantity >
  myArray[1].price * myArray[1].price * myArray[1].quantity;

console.log(result);
