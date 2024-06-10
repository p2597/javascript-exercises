const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	 return x - y;
};

const sum = function(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

/*const multiply = function(...numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
}; */

const multiply = function(numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
};


const power = function(x, y) {
	return x ** y;
};

const factorial = function(num) {
	if (num < 0) 
    return -1;
else if (num == 0) 
  return 1;
else {
  return (num * factorial(num - 1));
}
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
