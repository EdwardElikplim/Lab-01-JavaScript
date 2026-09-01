function isNumericArray(arr) {
  return Array.isArray(arr) && arr.every((value) => Number.isFinite(value));
}
// Array.isArray checks to see whether (arr) is actually an array
//arr.every((value) takes each value in the array and check it
function assertNumericArray(arr) {
  if (!isNumericArray(arr)) {
    throw new TypeError("arr must be an array containing only finite numbers.");
  }
//if (!isNumericArray(arr)) checks whether arr is NOT a numeric array.
}
function doubleArr(arr) {
  assertNumericArray(arr);
  return arr.map((value) => value * 2);
}// assertNumericArray checks to see if what is inside is an array containing only numbers
//arr.map goes through the array and does what you want to be done to each item in the array
function filterEven(arr) {
  assertNumericArray(arr);
  return arr.filter((value) => value % 2 === 0);
}
// arr.filter goes through the array and keeps the values that satisfy a condition

function sum(arr) {
  assertNumericArray(arr);
  return arr.reduce((total, value) => total + value, 0);
}
//reduce() is used when you want to take many values and reduce them down to one value
// the 0 at the end is the starting value so it starts at 0 and adds every other value to it
function average(arr) {
  assertNumericArray(arr);
  if (arr.length === 0) {
    return null;
  }

  return sum(arr) / arr.length;
}
module.exports = { isNumericArray, doubleArr, filterEven, sum, average
};
