const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((totalValue, currentValue) => {
      return totalValue + currentValue
    }, 0)
};

const multiply = function(arr) {
  return arr.reduce((totalMultiply, currentMultiply) => {
    return totalMultiply * currentMultiply
  }, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
	if (a === 0) return 1;
  let total = 1;
  for (let b = a; b > 0; b--) {
    total *= b
  }
  return total
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
