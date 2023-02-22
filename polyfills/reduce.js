Array.prototype.customReduce = function(callback, accValue) {
  let acc = accValue;
  for(let i = 0; i < this.length; i++) {
    if (acc) {
      acc = callback.call(undefined, acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }
  return acc;
}

const accumulatedValue = arr.customReduce((el, val) => el + val);

console.log(accumulatedValue);