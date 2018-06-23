const R = require('ramda');

module.exports = function min_max(arr = []) {
  arr = [...arr].sort((a,b) => a - b);

  switch(arr.length) {
    case 0:
    case 1:
      return arr;
    default:
      let [min, max] = [arr.slice(0,1).pop(), arr.slice(-1).pop()];
      return [min, max].concat(min_max(arr.slice(1,-1)))
  }
}
