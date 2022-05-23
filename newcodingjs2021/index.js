// console.log('hello world');

//section 3 values and variables in javascript

//  var myname = 'kartikey';
//  console.log(myname);
// var myAge = '24';
// console.log(myAge);


// var _myName = 'kartikey';
// console.log(_myName);


// var _1myname = 'kartikey';
// console.log(_1myname);


// var $myname = 'kartikey';
// console.log($myname);


//data types in javascript

//typeof operator

// string

// var myName = 'kartikey';
// console.log(myName)
// console.log(typeof(myName));

// number

// var myAge = 24;
// console.log(myAge);
// console.log(typeof(myAge));

// boolean

// var iamKartikeyas = true;
// console.log(iamKartikey);
// console.log(typeof(iamKartikey));


// var iamKartikeyas = false;
// console.log(iamKartikeyas);
// console.log(typeof(iamKartikeyas));

// Datatypes practice

// console.log(10+"20");

// 1020


// console.log(8-"5");  // bug

// 3

// console.log("Java" + "script");
// Javascript

// console.log(" " + " ");

// will not visible


// console.log(" "+ 0);
//   0


// console.log("Kartikeya"-"Sharma");
//  NaN


// console.log(true+true);
// 2


// console.log(true+false);
// 1


// console.log(false+true);
// 1


// console.log(false+false);
// 0


// console.log(false-true);
// -1

//  Null vs Undefined  Interview question

// var useless = null;
// console.log(useless);

// null


// console.log(typeof(useless))

// object    bug 2

// var iamStandby;
// console.log(iamStandby);

// undefined


// console.log(typeof(iamStandby))

// undefined

// var myMobileNumber = 8564979496;
// var myName = "Kartikeya";
// console.log(myMobileNumber);
// console.log(myName);
// console.log(isNaN(myMobileNumber));
// console.log(isNaN(myName));

// false
// true

// var myMobileNumber = "abcd";
// var myName = "Kartikeya";
// console.log(isNaN(myMobileNumber));
// console.log(isNaN(myName));

// if(isNaN(myMobileNumber)){
//     console.log("Please enter a valid MobileNumber");
// }

//  true
// true
// Please enter a valid MobileNumber


// NaN practice

// console.log(NaN === NaN);
// false

// console.log(Number.NaN === NaN);
// false

// console.log(isNaN(NaN));
// true

// console.log(isNaN(Number.NaN));
// true

// console.log(Number.isNaN(NaN));
// true

//SECTION 3 Expressions and OPerators

// console.log(5+3);
// 8

// var x = 5;
// var y = 5;

// console.log( x == y );
// true


// var x = 5;
// var y = 5;

// console.log('Is both the x and y are equal : ${x == y}');

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*5);
// 6
// 5
// 4
// 25

// console.log("Remainder Operator " + 81%8);
// Remainder Operator 1

// Increment and Decrement Operator
// x++ or ++x  &  x-- or --x

// var x = 5;
// x++;
// console.log(x);

// 6

// var x = 5;
// var y = x++;
// console.log(x);
// console.log(y);

// Postfix
// 6
// 5

// var x = 5;
// var y = ++x;
// console.log(x);
// console.log(y);

// Prefix
// 6
// 6

// var x = 5;
// var y = ++x + 10;
// console.log(y);

// 16


// var x = 5;
// var y = x-- + 5;
// console.log(x);
// console.log(y);

// 4
// 10

// var x = 5;
// var y = --x + 5;
// console.log(x);
// console.log(y);

// 4
// 9

// 3 comparison operator

// var a =8;
// var b =9;
// console.log(a == b);
// false

// var a =8;
// var b =9;
// console.log(a != b);
// (!=)= =/=   true

// var a =8;
// var b =9;
// console.log(a < b);
// true

// var a =8;
// var b =9;
// console.log(a > b);
// false

// var a =8;
// var b =9;
// console.log(a >= b);
// false

// var a =8;
// var b =9;
// console.log(a <= b);
// true

// 4 Logical Operator

// var a = 30;
// var b = -20;

// logical (And) && operator

// console.log( a > b  &&  b > 0);
// false

// console.log( a > b  &&  b > 0 && b < 0 );
// false

// console.log( a > b && b < 0);
// true

// logical (OR) || operator

// console.log( a > b  &&  b > 0 || b < 0 );
// true
// console.log( a > b || b > 0 || b < 0 );
// true

// logical (NOT) ! operator

// console.log(!( a > b || b > 0 || b < 0 ));
// false

// console.log(! false);
// true
// console.log(! true);
// false

// S String Concatenation operator (+)

// console.log(" Hello World");
//  Hello World

// console.log(" Hello" + "World");
//  HelloWorld concatenation operator

// console.log(" Hello " + "World");
// Hello World

// var myName = "Kartikey";

// console.log(myName + " Sharma");
// Kartikey Sharma

// console.log(myName + " Rai");
// Kartikey Rai

// console.log(myName + " Singh");
// Kartikey Singh

// Conditional (ternary) operator
// It take three operands
// Say shorter version of if else

// var myAge = 20;

// if (myAge >= 18){
//     console.log("I am eligible to vote");
// }else{
//     console.log("I am not eligible to vote");
// }
// "I am eligible to vote"

//  variablename= value;
// console.log((condition)? value1:value2);

// var myAge = 20;
// console.log((myAge >= 18)? "I can vote":"I can't vote");
// I can vote

// Challenge time

// console.log( 3**3 );
// 27 = (3*3*3)

// console.log( 9**2 );
//  9*9 = 81

// console.log( 10 ** -1 );
// 1/10 = 0.1

// console.log( 10 + " Kartikeya");
//  10 Kartikeya

// Swapping Program using 3rd variable

// var a = 4;
// var b = 6;
// console.log(a);
// console.log(b);
// 4
// 6
// var c = a;
// var a = b;
// var b = c;
// console.log(a);
// console.log(b);
// 6
// 4

// Swapping Program without using any 3rd variable

// var a = 4;
// var b = 6;
// console.log(a);
// console.log(b);
// 4
// 6

// var a = a + b;    // a = 4+6 = 10
// var b = a - b;    // b = 10-6 = 4
// var a = a - b;    // a = 10-4 = 6
// console.log(a);
// console.log(b);
// 6
// 4

//  Difference between  ==  vs  ===
// double == vs triple ===

// using double (==)

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);
// using double (==)
// console.log( num1 == num2 );

// number
// string
// 5
// true

// using triple (===)

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);
// using triple (===)
// console.log( num1 === num2 );
// number
// string
// 5
// false


// SECTION 4
// Control Statements and loops

// if raining = raincoat
// else no raincoat

// var tomorrow = 'rain';

// if(tomorrow == 'rain'){
// console.log('wear raincoat');
// }
// else{
//     console.log('Dont wear raincoat');
// }
// wear raincoat

// var tomorrow = 'sunny';

// if(tomorrow == 'rain'){
// console.log('wear raincoat');
// }
// else{
//     console.log('Dont wear raincoat');
// }
// Dont wear raincoat

// Quiz-  Find a year is leap year or not using if else statement

// My technique
// var year = 2016;
// var year = 2015;
// var remainder = year%4;

// if (remainder == 0){
//     console.log(year + ' Is a leap year');
// } else{
//     console.log(year + ' Not a leap year');
// }
// 2016 Is a leap year
// 2015 Not a leap year


// Using Nested if else
// condition= 
// Should be divisible by 4
// should not be divisible by 100
// should be divisible by 400
// so its a leap year

// var year = 2020;
// var year = 2019;
// debugger;

// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log("The year " + year + " is a leap year");

//         }else{
//             console.log("The year " + year + " is not a leap year");
//         }
//     }else{
//         console.log("The year " + year + " is a leap year");
//     }
// }else{
// console.log("The year " + year + " is not a leap year");
// }

// The year 2020 is a leap year
// The year 2019 is not a leap year

// What is truthy and falsy values in javascript
// we have total 5 falsy values in javascript
// they are as follows  0, " ", undefined, null, NaN, false**

// if (score =0 ){
//     console.log("Ohh no, we lost the game");
// }else{
//     console.log("Yeah, we won the game");
// }
// Yeah, we won the game

// if (0){
//     console.log("Ohh no, we lost the game");
// }else{
//     console.log("Yeah, we won the game");
// }
// Yeah we won the game

// if (undefined){
//     console.log("Ohh no, we lost the game");
// }else{
//     console.log("Yeah, we won the game");
// }
// Yeah we won the game

// if (null){
//     console.log("Ohh no, we lost the game");
// }else{
//     console.log("Yeah, we won the game");
// }
// Yeah we won the game

// if (NaN){
//     console.log("Ohh no, we lost the game");
// }else{
//     console.log("Yeah, we won the game");
// }
// Yeah we won the game


// if (false){
//     console.log("Ohh no, we lost the game");
// }else{
//     console.log("Yeah, we won the game");
// }
// Yeah we won the game

// Truthy values

// if (true){
//     console.log("Ohh no, we lost the game");
// }else{
//     console.log("Yeah, we won the game");
// }
// Ohh no, we lost the game


// if (5){
//     console.log("Ohh no, we lost the game");
// }else{
//     console.log("Yeah, we won the game");
// }
// Ohh no, we lost the game

// Say shorter version of if else
// var myAge = 20;
// console.log((myAge >= 18)? "I can vote":"I can't vote");

// 3 Switch Statement

// 1st Without break statement
// Find the area circle, triangle and rectangle?

// Else if statement

// var area = "circle";
// var area = "triangle";
// var area = "rectangle";
// var area = "rhombus";

// var PI = 3.14; l=5; b=4; r=3;

// if(area == "circle"){
//     console.log("Area of circle is :" + PI*r**2);
// }else if (area == "triangle"){
//     console.log("Area of triangle is :" + (l*b)/2);
// }else if(area == "rectangle"){
//     console.log("Area of rectangle is :" + l*b);
// }else{
//     console.log("Please enter Valid Data");
// }

// Area of circle is :28.26
// Area of triangle is :10
// Area of rectangle is :20
// Please enter Valid Data

// To skip this else if nested else if condition we use Switch Statement

// 3 Switch Statement

// var area = "circle";
// var area = "triangle";
// var area = "rectangle";
// var area = "rhombus";

// var PI = 3.14; l=5; b=4; r=3;

// switch(area){
//     case 'circle':
//         console.log("Area of circle is :" + PI*r**2);
//     break;
//     case 'triangle':
//         console.log("Area of triangle is :" + (l*b)/2);
//         break;
//     case 'rectangle':
//         console.log("Area of rectangle is :" + l*b);
//         break;
//     default:
//         console.log("Please enter Valid Data");

// }

// Area of circle is :28.26
// Area of triangle is :10
// Area of rectangle is :20
// Please enter Valid Data

// While loop statement

// Print all the numbers from 1 to 10

// var num = 0;

// while(num<=10){
//     console.log(num);
//     num++;
// }

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Block Scope
// { block scope } under curly braces area is block scope

// Do-While loop statement

// for true condition

// var num = 0;

// do{
// console.log(num);
//     num++;
// }while(num<=10);

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// for false condition

// var num = 20;

// do{
//     debugger;
// console.log(num);
//     num++;
// }while(num<=10);

// 20   it will give output for the first time then it will check condition

// 5 For loop statement
// We can say Shorter and best version of While and Do while loop

// for(var num = 0; num<=10; num++)
// { debugger;
// console.log(num);
// }

// Challenge time
// Print table for 4 using for loop

// By me for 4

// for(var num = 1; num <= 10; num++)
// {
// console.log(4*num);
// }

// 4
// 8
// 12
// 16
// 20
// 24
// 28
// 32
// 36
// 40

// In video

// var tableOf = 4;
// for(var num = 1; num <= 10; num++)
// {
// console.log(tableOf + " * " + num + " = " + tableOf*num);
// }

// 4 * 1 = 4
// 4 * 2 = 8
// 4 * 3 = 12
// 4 * 4 = 16
// 4 * 5 = 20
// 4 * 6 = 24
// 4 * 7 = 28
// 4 * 8 = 32
// 4 * 9 =  36
// 4 * 10 = 40


// SECTION 5
// Functions in JavaScript  very very important

// find sum of two numbers without using function

// var a = 5;
// var b =10;
// var sum = a + b;
// console.log(sum);
// 15

// find sum of two numbers using function

// Defining a function

// function sum()
// {
//     var a = 5, b = 10;
//     var total = a + b;
//     console.log(total);
// }

// calling a function

// sum();
// 15

// All together
// function sum()
// {
//     var a = 5, b = 10;
//     var total = a + b;
//     console.log(total);
// }
// sum();

// Function Parameters Vs Function Arguements

// Example question  find sum of (20,30) and (50,50)

// function sum(a,b)
// {
//     var total = a + b;
//     console.log(total);
// }
// sum();
// sum(20,30);
// sum(50,50);

// NaN
// 50
// 100

// Challenge time
// Why Functions ?
// we can reuse same code as many times as we want by simply passing different arguements to function;

// Function expression

// It simply means create a function and put it into a variable


// function sum(a,b)
// {
//     var total = a + b;
//     console.log(total);
// }
// var funExp = sum(5,10);
// funExp;
// 15

// Return keyword

// function sum(a,b)
// {
// return total = a + b;
// }
// var funExp = sum(25,10);
// console.log("The sum of two no. is : " + funExp);

// The sum of two no. is : 35

//6 Anonymous function expression

// var funExp = function (a,b){
// return total = a + b;
// }
// var sum = funExp(5,10);
// console.log("The sum of two no. is : " + sum);

// The sum of two no. is : 15



// var funExp = function (a,b){
//     return total = a + b;
//     }
//     var sum = funExp(5,10);
//     var sum1 = funExp(25,20);
//     console.log("The sum of two no. is : " + sum, sum1);
// The sum of two no. is : 15 45


// var funExp = function (a,b){
//     return total = a + b;
//     }
//     var sum = funExp(5,10);
//     var sum1 = funExp(25,20);
//     console.log(sum > sum1);
// false


// Welcome to ECMAScript  (ES 6) 2015

// Features of ECMAScript 2015 (ES 6)

// LET Vs CONST Vs VAR

// VAR

// var myName = "Kartikeya";
// console.log(myName);

// myName = "Kartikeya Rai";
// console.log(myName);

// Kartikeya 
// Kartikeya Rai
// Value can easially be changed

// LET

// let myName = "Kartikeya";
// console.log(myName);

// myName = "Kartikeya Rai";
// console.log(myName);

// Kartikeya 
// Kartikeya Rai
// Again Value can easially be changed when using let

// CONST

// const myName = "Kartikeya";
// console.log(myName);

// myName = "Kartikeya Rai";
// console.log(myName);
// Now it is throwing error that the myName can not be assigned to "Kartikeya Rai" as it is already assigned as const myName="Kartikeya"
// this is 1st difference b/w let , var , const

// Now let see the example of var ==> function scope
// let and const ==> block scope

// var ==> function scope

// function biodata(){
//     var myFirstName = "Kartikeya";
//     console.log(myFirstName);
//     if(true){
//         var myLastName ="Rai";
//         console.log("inner " + myLastName);
//         console.log("inner " + myFirstName);
//     }
//     console.log("innerOuter " + myLastName);
// }
// biodata();
// Kartikeya
// inner Rai
// inner Kartikeya
// innerOuter Rai
// it means var can be used anywhere and can be changed

// let and const ==> block scope

// function biodata(){
//     let myFirstName = "Kartikeya";
//     console.log(myFirstName);
//     if(true){
//         let myLastName ="Rai";
//         console.log("inner " + myLastName);
//         console.log("inner " + myFirstName);
//     }
//     console.log("innerOuter " + myLastName);
// }
// biodata();
// Now it is throwing error that console.log("innerOuter " + myLastName); my last name is not defined  same thing with const too


// function biodata(){
//     const myFirstName = "Kartikeya";
//     console.log(myFirstName);
//     if(true){
//         const myLastName ="Rai";
//         console.log("inner " + myLastName);
//         console.log("inner " + myFirstName);
//     }
//     console.log("innerOuter " + myLastName);
// }
// biodata();
// Now it is throwing error that console.log("innerOuter " + myLastName); my last name is not defined  same thing with let too

// 2 TEMPLATE LITERALS (Template Strings)

// Write a program to print table for a given no. ( 4 )

// output : 4 * 1 = 4
// output : 4 * 2 = 8


// var tableOf = 4;
// for(var num = 1; num <= 10; num++)
// {
// console.log( ` ${tableOf} * ${num} = ${tableOf*num} ` );  //(Template String) (`${abc}`)
// }

// 4 * 1 = 4
// 4 * 2 = 8
// 4 * 3 = 12
// 4 * 4 = 16
// 4 * 5 = 20
// 4 * 6 = 24
// 4 * 7 = 28
// 4 * 8 = 32
// 4 * 9 =  36
// 4 * 10 = 40

//3 Default Parameters

// Function for multiplying two no.

// function mult(a,b){
// return a*b;
// }
// console.log(mult(5,20));
// 100

// what if only one parameter is passed 

// function mult(a,b){
// return a*b;
// }
// console.log(mult(5));
// NaN

// to avoid this NaN situation the default parameter is passed to the variable

// function mult(a,b=1){
//     return a*b;
//     }
//     console.log(mult(4));
// 4

// function mult(a,b=1){
//     return a*b;
//     }
// console.log(mult(4,5));
// 20

// function mult(a=1,b=1){
//     return a*b;
//     }
//     console.log(mult());
// 1


// function mult(a=1,b=1){
//     return a*b;
//     }
//     console.log(mult(5,6));
// 30

//  FAT ARROW FUNCTION  ==>

// normal way of writing a function

// function sum(){
//     let a = 5; b = 6;
//     let sum = a+b;
//     return `The sum of two number is  ${sum}`;
// }
// console.log(sum());
// The sum of two number is 11

// How to convert this traditional function into Fat Arrow function

// const sum = () =>
// {
//     let a = 5; b = 6;
//     let sum = a+b;
//     return `The sum of two number is  ${sum}`;
// }
// console.log(sum());
// The sum of two number is 11


// const sum = () =>
// {
//     let a = 5; b = 6;
//     return `The sum of two number is  ${a+b}`;
// }
// console.log(sum());
// The sum of two number is 11


// const sum = () =>
// {
//     return `The sum of two number is  ${(a=5) + (b=6)}`;
// }
// console.log(sum());
// The sum of two number is 11


// const sum = () => `The sum of two number is ${(a=5) + (b=6)}`;  //full function just in one line
// console.log(sum());
// The sum of two number is 11

// SECTION 6    ARRAYS in JavaScript

// To store multiple values in one variable we use arrays

// example

// var myFriends = new Array;   //optional line by default in js
// var myFriends = ['Kartikeya','Pradeep','Khemraj','Shashank'];

// Traversal in an Array
// Navigation through a array

// To print any single name from array

// var myFriends = ['Kartikeya','Pradeep','Khemraj','Shashank'];
// console.log(myFriends[1]);

// at 0 Kartikeya 
// at 1 Pradeep
// at 2 Khemraj.......soo on

// if we want to check the length of elements of an array

// console.log(myFriends.length);
// 4

// If we dont know the length of array
// var myFriends = ['Kartikeya','Pradeep','Khemraj','Shashank'];
// console.log(myFriends[myFriends.length - 2]);
// Khemraj

// We use for loops to navigate

// var myFriends = ['Kartikeya','Pradeep','Khemraj','Shashank'];
// for(i=0; i<myFriends.length;i++){
//     console.log(myFriends[i]);
// }
// Kartikeya
// Pradeep
// Khemraj
// Shashank

// Same using For In & For of loop

// For in loop

// var myFriends = ['Kartikeya','Pradeep','Khemraj','Shashank'];
// for(let elements in myFriends){
//     console.log(elements);
// }

// it returns only index numbers of elements inside array
// 0
// 1
// 2
// 3

// For Of loop

// var myFriends = ['Kartikeya','Pradeep','Khemraj','Shashank'];
// for(let elements of myFriends){
//     console.log(elements);
// }

// it returns only elements inside array
// Kartikeya
// Pradeep
// Khemraj
// Shashank

// ForEach loop 

// Array prototype forEach() loop
// Calls a function for elements in the array

// var myFriends = ['Kartikeya','Pradeep','Khemraj','Shashank'];
// myFriends.forEach(function(element, index, array){
// console.log(element+ " index " + index + " " + array);
// });

// it returns elements inside array as well as index and Array too if we want
// Kartikeya index 0 Kartikeya,Pradeep,Khemraj,Shashank
// Pradeep index 1 Kartikeya,Pradeep,Khemraj,Shashank
// Khemraj index 2 Kartikeya,Pradeep,Khemraj,Shashank
// Shashank index 3 Kartikeya,Pradeep,Khemraj,Shashank

// How to perform same task by Using Fat Arrow function

// var myFriends = ['Kartikeya','Pradeep','Khemraj','Shashank'];
// myFriends.forEach((element, index, array) => {
// console.log(element+ " index " + index + " " + array);
// });

// Searching and Filter in an array

// New method Array prototype indexOf()
// Used to search and filter element in an array

// var myFriends = ['Kartikeya','Pradeep','Khemraj','Shashank','Cheenu','Mahima','Nitish'];
// console.log(myFriends.indexOf('Mahima'));
// 5
// for mahima  -1

// Array protoptype lastIndexOf

// var myFriends = ['Kartikeya','Pradeep','Mahima','Khemraj','Shashank','Cheenu','Mahima','Nitish'];
// console.log(myFriends.lastIndexOf('Mahima', 2));
// 2

// Array prototype.includes()
// returns true or false

// var myFriends = ['Kartikeya','Pradeep','Mahima','Khemraj','Shashank','Cheenu','Mahima','Nitish'];
// console.log(myFriends.includes('Mahima'));
// console.log(myFriends.includes('Amrit'));
// true
// false   for 'Amrit'

// Array prototype.find()
// Gives value according to our search but only one value at a time
// Search how many prices are less than 500  prices<500

// const prices = [200,300,350,400,450,500,300,600];

// const findElements = prices.find((Element) => {
// return Element<500;
// });

// console.log(findElements);
// 200

// it can also be done in simply 1 line
// const prices = [200,300,350,400,450,500,300,600];
// console.log(prices.find((Element) => Element<500));
// console.log(prices.find((Element) => Element>500));
// console.log(prices.find((Element) => Element>600));
// 200
// 600
// undefined

// findIndex() method
// It gives same one value but actually not value it gives index of that value

// const prices = [200,300,350,400,450,500,300,600];
// console.log(prices.findIndex((Element) => Element<500));
// console.log(prices.findIndex((Element) => Element>500));
// console.log(prices.findIndex((Element) => Element>600));
// 0
// 7
// -1

// Array prototype filter() method

// returns a new array containing alla elements of the callig array for which thr provided filtering function returns true

// const prices = [200,300,350,400,450,500,300,600];
// console.log(prices.filter((Element) => Element<500));
// console.log(prices.filter((Element) => Element>300));

// [200,300,350,400,450,300]
// [350,400,450,500,600]

// Sorting of array How to sort an array
// Ascending to Decending or Descending to Ascending

// const prices = [200,300,350,400,450,500,300,600];
// console.log(prices.sort());
// [200,300,300,350,400,450,500,600];

// var alphabets = ['J','C','B','D','F','E','A','G','I','H'];
// console.log(alphabets.sort());
// ['A','B','C','D','E','F','G','H','I','J']

// const array1 = [1 , 30 , 4 , 21 , 100000 , 99];
// console.log(array1.sort());
// [1, 100000, 21, 30, 4, 99]
// as it changes elements into string then compares the values so 1 then 2 then 3 and 4 and soo on
// so always 1st number will be compared so it produces incorrect result for sorting numbers


// (CRUD) operations CREATE READ UPDATE AND DELETE

// push() method 
// Used to insert or add new elements into array
// Adds elements in the last of array

// const animals =['Lion','Tiger','Panther','Leopord'];
// // let we have to add 'Jaguar' in the array
// animals.push('Jaguar');
// console.log(animals);

// ['Lion','Tiger','Panther','Leopord','Jaguar']
// returns new length of array
// Adding multiple data at the same time


// const animals =['Lion','Tiger','Panther','Leopord'];
// const arrayLength = animals.push('Jaguar','Cheetah','Horse','Elephant');
// console.log(animals);
// console.log(arrayLength);
// ['Lion','Tiger','Panther','Leopord','Jaguar','Cheetah','Horse','Elephant']
// 8      array length not index

// unshift(); method 
// Adds elements in the starting of array

// const animals =['Lion','Tiger','Panther','Leopord'];
// animals.unshift('Jaguar','Cheetah','Horse','Elephant');
// console.log(animals);
// ['Jaguar','Cheetah','Horse','Elephant','Lion','Tiger','Panther','Leopord']

// lets check what will happen with numbers

// const myNumbers = [1,2,3,4,8];
// myNumbers.unshift(5,6,7);
// console.log(myNumbers);
// [5,6,7,1,2,3,4,8]

// Pop method pop()
// deletes last element form array and returns that elements

// To remove last element from array and show rest elements in the array

// const animals =['Jaguar','Cheetah','Horse','Elephant','Lion','Tiger','Panther','Leopord'];
// animals.pop();
// console.log(animals);

// ['Jaguar','Cheetah','Horse','Elephant','Lion','Tiger','Panther']

// To remove last element in the array and show that removed element from array

// const animals =['Jaguar','Cheetah','Horse','Elephant','Lion','Tiger','Panther','Leopord'];
// console.log(animals.pop());
// Leopord

// const animals =['Jaguar','Cheetah','Horse','Elephant','Lion','Tiger','Panther','Leopord'];
// console.log(animals);
// console.log(animals.pop());
// console.log(animals);
// ['Jaguar','Cheetah','Horse','Elephant','Lion','Tiger','Panther','Leopord']
// Leopord
// ['Jaguar','Cheetah','Horse','Elephant','Lion','Tiger','Panther']

// Shift Method .shift()

// const animals =['Jaguar','Cheetah','Horse','Elephant','Lion','Tiger','Panther','Leopord'];
// console.log(animals);
// console.log(animals.shift());
// console.log(animals);
// ['Jaguar','Cheetah','Horse','Elephant','Lion','Tiger','Panther','Leopord']
// Jaguar
// ['Cheetah','Horse','Elephant','Lion','Tiger','Panther','Leopord']

// CHALLANGE TIME
// Splice Method splice()
// 1: Add 'Guava' at the end of array
// 2: What is the return Value of splice method?
// 3: Update 'apple' and 'kiwi' to 'Apple' and 'Kiwi'
// 4: Delete Mango from array

// const fruits = ['Banana','Orange','apple','Mango','kiwi','PineApple'];
// sol 1

// const newFruit = fruits.splice(6,0,'Guava');
// const newFruit = fruits.splice(fruits.length,0,'Guava');   //Better approach beacuse length of array may
// be too long
// console.log(fruits);
// ['Banana','Orange','apple','Mango','kiwi','PineApple','Guava']

// sol 2 
// const fruits = ['Banana','Orange','apple','Mango','kiwi','PineApple'];
// const newFruit = fruits.splice(fruits.length,0,'Guava');
// console.log(newFruit);
// []   returning an empty array bcz we havnt deleted anything from array

// sol 3

// const fruits = ['Banana','Orange','apple','Mango','kiwi','PineApple'];
// const updateFruit = fruits.splice(2,2,'Apple')  // Manual approach
// console.log(fruits);
// ['Banana','Orange','Apple','Mango','kiwi','PineApple']

// Dynamic Approach
// const fruits = ['Banana','Orange','apple','Mango','kiwi','PineApple'];
// const indexOffruits = fruits.indexOf('apple');
// if (indexOffruits != -1){
// const updateFruit = fruits.splice(indexOffruits,2,'Apple');
// console.log(fruits);
// }else{
//     console.log('No Such Data Found');
// }
// ['Banana','Orange','Apple','Mango','kiwi','PineApple']
// No Such Data Found    if apple is changed to appl

// sol 4
// const fruits = ['Banana','Orange','apple','Mango','kiwi','PineApple'];
// const indexOffruits = fruits.indexOf('apple');
// if (indexOffruits != -1){
// const updateFruit = fruits.splice(indexOffruits,1);
// console.log(fruits);
// console.log(updateFruit);
// }else{
//     console.log('No Such Data Found');
// }
// ['Banana','Orange','Mango','kiwi','PineApple']
// ['apple']

// const fruits = ['Banana','Orange','apple','Mango','kiwi','PineApple'];
// const indexOffruits = fruits.indexOf('apple');
// if (indexOffruits != -1){
// const updateFruit = fruits.splice(indexOffruits,Infinity);
// console.log(fruits);
// }else{
//     console.log('No Such Data Found');
// }
// ['Banana','Orange']

// const fruits = ['Banana','Orange','apple','Mango','kiwi','PineApple'];
// const indexOffruits = fruits.indexOf('apple');
// if (indexOffruits != -1){
// const updateFruit = fruits.splice(indexOffruits,3);
// console.log(fruits);
// }else{
//     console.log('No Such Data Found');
// }
// ['Banana','Orange','PineApple']

// Map method map() and Reduce Method reduce()

// Returns a new array containing the results of calling a function on every element in this array
// [thisArg]

// const array1 = [1, 4, 9, 16, 25];
// // num > 9
// let newArr = array1.map((currElem,index,arr)=>{
//     return currElem > 9;
// })
// console.log(array1);
// console.log(newArr);

// [1, 4, 9, 16, 25]
// [false, false, false, true, true]

// const array1 = [1, 4, 9, 16, 25];
// let newArr = array1.map((currElem,index,arr)=>{
//     return `Index no = ${index} and the value is = ${currElem} belongs to ${arr}`
// })
// console.log(array1);
// console.log(newArr);
// [1, 4, 9, 16, 25]
// ['Index no = 0 and the value is = 1 belongs to 1,4,9,16,25','Index no = 1 and the value is = 4 belongs to 1,4,9,16,25','Index no = 2 and the value is = 9 belongs to 1,4,9,16,25','Index no = 3 and the value is = 16 belongs to 1,4,9,16,25','Index no = 4 and the value is = 25 belongs to 1,4,9,16,25']

// The 1st difference in map method and forEach method is that forEach return undefined while map returns a new array.

// const array1 = [1, 4, 9, 16, 25];
// let newArrfor = array1.forEach((currElem,index,arr)=>{
//     return `Index no = ${index} and the value is = ${currElem} belongs to ${arr}`
// })
// console.log(newArrfor);
// undefined

// Challenge Time 

// 1 Find thr square root of each element in an array?
// let array1 = [20, 36, 49, 64, 81];

// 2 Multiply each element by 2 and return only those elements which are greater than 10.
// let array2 = [2, 3, 4, 6, 8];

// // sol 1
// let array1 = [25, 36, 49, 64, 81];
// let array1Sqr = array1.map((currElem)=> {
// return Math.sqrt(currElem);
// })
// console.log(array1Sqr);
// [5, 6, 7, 8, 9]

// let array1 = [25, 36, 49, 64, 81];
// let array1Sqr = array1.map((currElem)=> Math.sqrt(currElem))
// console.log(array1Sqr);
// // [5, 6, 7, 8, 9]

// sol 2
// with chaining method style

// let array2 = [2, 3, 4, 6, 8];
// let array2sqr = array2.map((currElem)=>{
// return currElem*2
// }).filter((currElem)=>{
//     return currElem > 10;
// })
// console.log(array2sqr);
// [12, 16]


// let array2 = [2, 3, 4, 6, 8];
// let array2sqr = array2.map((currElem)=>currElem*2).filter((currElem)=> currElem > 10)
// console.log(array2sqr);
// [12, 16]

// Reduce Method reduce.()
// flatten an array means it converts a 2D or 3D array into a simple single dimentional array
// The reduce() method executes a reducer function (that you provide) on eachh of the array, resulting
// in single output value.

// The reducer function takes four arguements:
// Accumulator
// Current vallue
// Current index
// Source array

// let arr = [2, 3, 4,];
// let sum = arr.reduce((Accumulator,currElem,Index,arr)=>{
// return Accumulator += currElem;
// })
// console.log(sum);
// // 9

// let array2 = [2, 3, 4, 6, 8];
// let array2sqr = array2.map((currElem)=>currElem*2).filter((currElem)=> currElem > 10).reduce((Accumulator,currElem,Index,arr)=>{
//     return Accumulator += currElem;
// })
// console.log(array2sqr);
// 28

// to multiply the elements

// let arr = [2, 3, 4,];
// let mul = arr.reduce((Accumulator,currElem,Index,arr)=>{
//     debugger;
// return Accumulator *= currElem;
// })
// console.log(mul);
// 24

// if we have to add a no with a array sum then

// let arr = [2, 3, 4,];
// let sum = arr.reduce((Accumulator,currElem,Index,arr)=>{
// return Accumulator += currElem;
// },7)
// console.log(sum);
// // 16

// How to flaten an Array using reduce() method

// let arr = [ [1,2], [3,4], [5,6], [7,8] ];
// let flatArr = arr.reduce((Accumulator,currVal) => {
//      return Accumulator.concat(currVal);
// })
// console.log(flatArr);
// [ 1, 2, 3, 4, 5, 6, 7, 8]

// let arr1 = [ ['A1','A2'], ['B1','B2'], ['C1','C2'] ];
// let flatArr = arr1.reduce((Accumulator,currVal) => {
//      return Accumulator.concat(currVal);
// })
// console.log(flatArr);
// [ 'A1', 'A2', 'B1', 'B2', 'C1', 'C2' ]

// SECTION 6
// STRINGS IN JAVASCRIPT

// used for storing and manipilating text
// Written in single '' or "" quotes 
// using the String() constructor

// let myName = "Kartikeya S";
// let myFullName = 'Kartikeya Sharma';

// let socialName = new String("Kartikeya Rai");

// console.log(myName);
// console.log(socialName);
// console.log(myFullName);

// Quetion 1

// How to find the length of a String
// String.prototype.length
// reflects the length of the array

// let myName = "Kartikeya Sharma";
// console.log(myName.length);

// Escape character ( \ )

// let anySentence = "We are the \"MJZSPANK\" from IIMT";
// console.log(anySentence);

// We are the "MJZSPANK" from IIMT

// If you dont want to mess, simply use the altenate quotes

// let anySentence = 'We are the "MJZSPANK" from IIMT.';
// console.log(anySentence);
// We are the "MJZSPANK" from IIMT.

// let anySentence = "We are the 'MJZSPANK' from IIMT.";
// console.log(anySentence);
// We are the 'MJZSPANK' from IIMT.

// 2 finding a String in a String
// String.prototype.indexOf(searchValue [, fromIndex])

// the indexOf() method returns the index of (the position of) the first occurrence of a specified
// text in a string

// const myBioData = 'I am Kartikeya Rai';
// console.log(myBioData.indexOf("Rai"));
// 15  index of Rai

// lastIndexOf() method

// const myBioData = 'I am the Kartikeya Rai';
// console.log(myBioData.lastIndexOf("Kartikeya"));
// // 9

// Searching for a string in a string

// Search Method 
// String.prototype.search(regexp)
// The search method searches a string for a specified value and 
// returns the position of teh match

// const myBioData = 'I am the Kartikeya Rai';

// let srchData = myBioData.search("Rai",5);
// console.log(srchData);
// 19

// Extracting String parts

// there are 3 methods to do this 
// slice(start,end)
// substring(start, end)
// substr(start, length)

// The slice() method
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: thr start position, and the end position (end not included).

// var str = "Apple, Banana, Kiwi, Mango";
// let res = str.slice(0,4);
// let res = str.slice(6, -3);
// console.log(res);
// Appl
// Banana, Kiwi,Ma

// CHALLENGE TIME

// Q- Display only 280 characters of a string like the one used in Twitter ?

// let myTweets = "Pan-Europa is currently trading comparatively at low price. This is because of reduced profitability and a failure to gain sufficient market share for new products. Pan Europa should not decrease the dividends of the shareholders to not devalue the stock price of the company. Instead Pan Europa should decrease capital spending as what they board of directors has decided. In short, they should adopt strategies that should increase stock price not push it down to discourage buyout";

// let myActualTweet = myTweets.slice(0,280);

// console.log(myActualTweet);
// console.log(myActualTweet.length);
// // Pan-Europa is currently trading comparatively at low price. This is because of reduced profitability and a failure to gain sufficient market share for new products. Pan Europa should not decrease the dividends of the shareholders to not devalue the stock price of the company. Ins
// // 280

// SubString method substring()
// The difference is that substring() cannot accept negetive indexes

// var str = "Apple, Banana, Kiwi, Mango";
// let res = str.slice(4,9);
// let res = str.substring(5, -3);
// console.log(res);
// e, Ba
// Apple

// Substr method substr()

// substr() is similar to slice
// the difference is that the second parameter specifies the length of the extracted part.

// var str = "Apple, Banana, Kiwi, Mango";
// let res = str.substr(0,6);
// let res = str.substr(6, -3);
// let res = str.substr(-5);
// console.log(res);

// Apple,
//  nothing no response
// Mango

// Replacing String Content
// String.prototype.replace(SearchFor, replaceWith)

// Replace method replace()

// const myBioData = 'I am the Rai Kartikeya Rai';
// let newString = myBioData.replace('Rai', 'Sharma');
// console.log(newString);

// I am the Sharma Kartikeya Rai

// Extracting String characters

// There are 3 methods for extracting string characters:
// charAt(position)
// charCodeAt(position)
// Property access[]

// The charAt Method 

// the charAt() method retuns the character at a 
// specified index (position) in a string

// let str = "HELLO WORLD";
// console.log(str.charAt(0));
// console.log(str.charAt(4));
// H
// O

// charCodeAt() method

// let str = "HELLO WORLD";
// console.log(str.charCodeAt(4));
// // 79

// Q- Returns the unicode of the last character in a strin

// let str = "HELLO WORLD";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));
// // 68

// Property Access
// ECMAScript 5 (2009) allows property access [] on strings

// var str = "HELLO WORLD";
// console.log(str[3]);
// // L

// Other useful methods
// toUpperCase() and toLwerCase()  method

// let myName = "karTikeyA sHarMa";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// // KARTIKEYA SHARMA
// // kartikeya sharma

// The concat() method
// concat() joins two or more strings

// let fName = "kartikeya";
// let lName = "sharma";
// console.log(fName.concat(lName));
// console.log(fName.concat(" ",lName));
// console.log(fName + lName);
// console.log(`${fName} ${lName}`);
// // kartikeyasharma
// // kartikeya sharma
// // kartikeyasharma
// // kartikeya sharma

// String triming
// trim() method
// The trim() method removes whitespaces from both sides of a string

// var str = "         Hello World!          ";
// var str = "         Hello         World!          ";
// console.log(str.trim());
// // Hello World!
// // Hello        World!


// Converting a string into an array
// A string can be converetd to an array with the split() method

// split() method

// var txt = "a,b,c,d,e";   // string
// console.log(txt.split(","));    // split on commas
// // ['a', 'b', 'c', 'd', 'e']


// var txt = "a,b ,c,d ,e,f";
// console.log(txt.split(" "));   // split on spaces
// // ['a,b', ',c,d', ',e,f']

// var txt = "a,b | c,d | e,f";
// console.log(txt.split(" | "));  //split on pipe
// // ['a,b', 'c,d', 'e,f']


// SECTION 8
// DATE AND TIME IN JAVASCRIPT

// Date method (Get and Set)
// Time method (Get and Set)

// Javascript Date Objects Represent a single moment in time in a plateform- independent format.
// Date objects contain a Number that represents millionseconds since 1 january 1970 UTC.

// Creating Date Objects 
// There are 4 ways to create a new date objects:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguements
// new Date(milliseconds)
// // we can not avoid month section
// new Date(date String)

// Date objects are created with new Date() constructor.

// let currDate = new Date();
// console.log(currDate);

// // 2022-01-22T08:50:43.684Z


// let currDate = new Date();
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// // 1/22/2022, 2:30:22 PM
// // Sat Jan 22 2022 14:30:22 GMT+0530 (Indian Satndard Time)

// Date.now() method
// Returns the numeric value corresponding to the current time- the number of milliseconds
// elapsed since January 1, 1970 00:00:00 UTC

// console.log(Date.now());
// // 1642842655218

// new Date(year, month, ....)
// 7 numbers specify year, month, day, hour, minute, second, and millisecond
// (in that order)
// Note: Javascript counts months from 0 to 11

// January is 0. December is 11

// var d = new Date(2022, 0, 22);
// console.log(d.toLocaleString());
// 1/22/2022, 12:00:00 AM

// new Date(dateString) method
// new Date(dateString) creates a new date object from a date string

// var d = new Date("October 13, 2014 11:13:00");
// console.log(d.toLocaleString());
// // 10/13/2014, 11:13:00 AM



// var d = new Date(1642842655218);
// console.log(d.toLocaleString());
// // 1/22/2022, 2:40:55 PM


// const currDate = new Date();
// // how to get the individual date
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());  // 0 - 11,  jan - dec
// console.log(currDate.getDate());
// console.log(currDate.getDay());
// // 1/22/2022, 9:30:45 PM
// // 2022
// // 0
// // 22
// // 6


// const currDate = new Date();
// // how to set the individual date
// // the setFullYear() method can optionallset month and day
// console.log(currDate.toLocaleString());
// console.log(currDate.setFullYear(2023));
// console.log(currDate.setFullYear(2023, 5, 15));
// console.log(currDate.setMonth(5));  // 0 - 11,  jan - dec
// console.log(currDate.setDate(15));
// // console.log(currDate.setDay(4));
// // All data in milliseconds like this (1642842655218)


// Time methods

// const currTime = new Date();

// // how to get the individual Time

// console.log(currTime.getTime());
// // The getTime() method returns the number of milliseconds since jan
// console.log(currTime.getHours());
// // The getHours() method returns the hours of a date as a nimber (0-)
// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());
// // 1642868430410
// // 21
// // 50
// // 30
// // 410

// let currTime = new Date();

// // how to set the individual Time

// // console.log(currTime.setTime());
// console.log(currTime.setHours(20));
// console.log(currTime.setMinutes(30));
// console.log(currTime.setSeconds(50));
// console.log(currTime.setMilliseconds(100));
// // 1642863312246
// // 1642863612246
// // 1642863650246
// // 1642863650100

// Challenge time
// How to make Running  Clock

// (function(){
//     setInterval(()=>{
//         console.log(new Date().toLocaleTimeString());
//     }, 1000)
// })();

// //Practice Time

// new Date().toLocaleTimeString();  // for time 
// // ---
// new Date().toLocaleDateString();  // for date
// // ---
// new Date().toLocaleString();    // for date and time both

// SECTION 9 MATH OBJECT IN JAVASCRIPT

// The javascript math object allows you to perform mathematical tasks on
// numbers

// console.log(Math.PI);
// // 3.141592653589793

// Math.round()
// returns the rounded value nearest to its integer

// let num = 10.2565;
// let num = 10.5010;
// console.log(Math.round(num));
// // 10
// // 11

// Math.pow(x, y)
// Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(4,2));
// console.log(Math.pow(4,3));
// console.log(Math.pow(5,2));
// // 16
// // 64
// // 25

// Math.sqrt()
// Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(81));
// console.log(Math.sqrt(49));
// console.log(Math.sqrt(121));
// console.log(Math.sqrt(25));
// // 9
// // 7
// // 11
// // 5

// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-65));
// console.log(Math.abs(-47.2));
// console.log(Math.abs(-911));
// console.log(Math.abs(6-9));
// // 65
// // 47.2
// // 955
// // 3

// Math.ceil()
// Math.ceil(x) returns thevalue of x rounded up to its nearest integer

// console.log(Math.ceil(4.4));
// console.log(Math.round(4.4));
// console.log(Math.ceil(99.1));
// console.log(Math.round(99.1));

// // 5
// // 4
// // 100
// // 99

// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.99));
// // 4
// // 99

// Math.min()
// Math.min() can be used to find the lowest value in a list of argument

// console.log(Math.min(0, 150, 30, -8, -200));
// // -200

// Math.max()
// Math.max() can be used to find the highest value in a list

// console.log(Math.max(0, 150, 30, -8, -200));
// // 150

// Math.random()
// Math.random() returns a number between 0 (inclusive), and 1 (exclusive)

// console.log(Math.floor(Math.random()*10));
// // Random interger from 0 - 9

// Math.trunc()
// The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));
// // 4
// // -99

// SECTION 10 DOM IN JAVASCRIPT

// WINDOW VS DOCUMENT
// DOM VS BOM
// DOM NAVIGATION
// Searching and getting Elements reference

// The DOM is the Document Object Model, which deals with the document,
// the HTML elements themselves, e.g document and all traversal you would
// do in it, events, etc.

// for Ex;
// change the background color to red
// document.body.style.background = "red";

// The BOM is the Browser object Model, which deals with browser components
// aside from the document, like history, location, navigator and screen
// (as well as some others that very browser). OR
// In simple meaning all the window operations which comes under BOM are performed using BOM

// Lets see more practical on History object

// Functions alert/confirm/prompt are also a part of BOM:
// they are directly not related to the document,
// but represent pure browser methods of communicating with the user.

// alert(location.href); //shows current URL
// if (confirm("want to visit ThapaTechnical?")) {
// location.href = "https://www.youtube.com/thapatechnical";// redirect the browser to
// }

// Section 3: Navigate through the DOM

// 1: document.documentElement
// Returns the Element that is the root element of the document.
// 2: document.head
// 3: document.body
// 4: document.body.chidNodes (include tab, enter and whiteSpace)
// 5: document.children (without text nodes, only regular Elements)
// 6: documnet.childNodes.length

//  Practice Time
// How to check whether an element has child nodes or not ?
// We will use has childNodes()

// Practice Time
// How to find the child in DOM tree
// firstChild vs firstElementChild
// lastChild vs lastElementChild
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild

// How to find the parent nodes

// document.body.parentNode
// document.body.parentElement

// How to find or access the siblings

// document.body.nextSiblings
// document.body.nextElementSiblings
// document.body.previousSiblings
// document.body.previousElementSiblings

