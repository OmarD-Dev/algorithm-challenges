/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

function factorial(n) {

    let product = 1;
    for (let i = 1;i <= n;i++) {
      product *= i;
    }
    return product;
  }
module.exports = factorial