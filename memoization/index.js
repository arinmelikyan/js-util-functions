function memoization(func) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = func.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

function add(num) {
  console.log('Calculating the result', num);
  return num + num;
}

const memoizedCalc = memoization(add);

console.log(memoizedCalc(10)); 
console.log(memoizedCalc(10));
console.log(memoizedCalc(4));
console.log(memoizedCalc(4));