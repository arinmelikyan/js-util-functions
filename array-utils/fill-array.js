const func = () => {
  let arr = [];
  arr.length = 100;
  for(let i = 0; i < arr.length; i++) {
    arr[i] = 'f'
  }
  return arr;
}

const result = func().join('');

console.log(result.length);