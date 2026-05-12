import './style.css'



 function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
 }

 function  isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
 }


 function doubleArray(arr) {
  return arr.map(x => x * 2);
 }

function countOccurrences(arr, value) {
  return arr.reduce((count, current) => (current === value ? count + 1 : count), 0);
}

function getObjectKeys(obj) {
  return Object.keys(obj);
}

function mergeObjects(obj1, obj2) {
  return {...obj1, ...obj2};
}


console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(2));

console.log(doubleArray([1, 2, 3])); 

console.log(countOccurrences([1, 2, 3, 2, 4], 3));

console.log(getObjectKeys({a: 1, b: 2, c: 3}));

console.log(mergeObjects({a: 1, b: 2}, {b: 3, c: 4}));