/* ftoc(number) => (number -32) * .5556 
   ctof(number) => (number * 1.8) + 32
*/

const ftoc = function (number) {
  let convertedTemp = (number - 32) * 0.5556;
  if (convertedTemp === 0) {
    return convertedTemp;
  } else {
    return parseFloat(convertedTemp.toFixed(1));
  }
};

const ctof = function (number) {
  let convertedTemp = (number * 1.8) + 32;
  if (Number.isInteger(convertedTemp)) {
    return convertedTemp
  } else {
    return parseFloat(convertedTemp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
