// Write a recursive JavaScript program to find the greatest common divisor (gcd) of two positive numbers. 


// Example: findGCD(25, 20) // => 5 findGCD(50, 20) // => 10
// Euclidian algorithm


var findGCD = function(a, b) {
  //
  if (b == 0) {
      return a;
  }
return findGCD(b, a % b);
};

console.log(findGCD(25, 20))// => 5 
console.log(findGCD(50, 20))// => 10
