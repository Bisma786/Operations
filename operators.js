console.log("Addition");
let numOne = 10;
let numTwo = 50;
let numThree = 90;
let add = numOne + numTwo + numThree;
console.log(add);
console.log("Subtraction");
let num1 = 250;
let num2 = 450;
let Sub = num2 - num1;
console.log(Sub);
console.log("Multiplication");
let numb1 = 12;
let numb2 = 5;
let Mult = numb1 * numb2;
console.log(Mult);
console.log("Division");
let numb11 = 24;
let numb12 = 4;
let Div = numb11 / numb12;
console.log(Div);
console.log("Exponentiation");
let num11 = 8;
let num12 = 5;
let Exp = num11 ** 2;
console.log(Exp);
console.log("Modulus");
let numb13 = 7;
let numb14 = 3;
let Mod = numb13 % numb14;
console.log(Mod);
console.log("Unary Operators");
let a = 6;
let b = 2;
let c;
let d;
let e;
let f;
let g;
c = ++a + a++;
d = ++b + b++;
e = --a + a--;
f = --b + b--;
g = ++a + a++ + ++b + b++ + --a + a-- + b-- + --b;
console.log(c, d, e, f, g);
console.log("Combining Operators");
let ab = 5;
let cd = 3;
let ef = 10;
let Result = ab * cd + ef; //25
Result++;
console.log(Result); //26
export {};
