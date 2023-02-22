Array.prototype.customMap = function(callback) {
  const newArr = [];
  for(let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
}

const mapArr = arr.customMap(el => el + 3);

console.log(mapArr);