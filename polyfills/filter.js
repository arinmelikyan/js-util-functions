Array.prototype.customFilter = function(callback) {
  const newArr = [];
  for(let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}

const filteredArr = arr.customFilter(el => el < 3);

console.log(filteredArr);