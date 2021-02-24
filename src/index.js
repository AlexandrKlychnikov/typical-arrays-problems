
exports.min = function min (array) {
   return (array == undefined || array.length == 0) ? 0 : array.sort((a, b) => b - a).pop();
}

exports.max = function max (array) {
  return (array == undefined || array.length == 0) ? 0 : array.sort((a, b) => a - b).pop();
}

exports.avg = function avg (array) {
  return (array == undefined || array.length == 0) ? 0 : array.reduce((a, b) => a + b, 0)/array.length;
}
