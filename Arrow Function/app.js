/*
Convert the ES5 Map

function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

To the ES2015 Arrow Function
*/

const double = arr => arr.map(val => val * 2);

/*
Replace this function with a shortcut

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
*/

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0);