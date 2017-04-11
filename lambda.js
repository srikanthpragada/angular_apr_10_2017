// Lambda Expression
var nextEven = function (n) { return n % 2 == 0 ? n + 2 : n + 1; };
console.log(nextEven(10));
// Lambda block
var nextOdd = function (n) {
    console.log("Before : " + n);
    n = n % 2 != 0 ? n + 2 : n + 1;
    console.log("After : " + n);
};
nextOdd(10);
