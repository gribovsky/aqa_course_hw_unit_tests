/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
let n = 1 + Math.floor(Math.random()*9);
let secondNumber = Number(String(n) + n);
let thirdNumber =  Number(String(n) + n + n);
console.log(n +'\n',"secondNumber == " + secondNumber +'\n',"thirdNumber == " + thirdNumber);
console.log(n + secondNumber + thirdNumber);