/* Lesson 3 */

/* FUNCTIONS */
// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
// Step 9: Test all of the mathematical functionality of the task3.html page.

function add (number1,number2){
    return number1 + number2;
}

function addNumbers(){
    let add1 = parseInt(document.getElementById("addend1").value);
    let add2 = parseInt(document.getElementById("addend2").value);
    let total = add(add1,add2);
    document.getElementById("sum").innerHTML= total;
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);


function subtract (number1,number2){
    return number1 - number2;
}

function subtractNumbers(){
    let sub1 = parseInt(document.getElementById("minuend").value);
    let sub2 = parseInt(document.getElementById("subtrahend").value);
    let total = subtract(sub1,sub2);
    document.getElementById("difference").innerHTML= total;
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

function multiply  (number1,number2){
    return number1 * number2;
}

function multiplyNumbers(){
    let mul1 = parseInt(document.getElementById("factor1").value);
    let mul2 = parseInt(document.getElementById("factor2").value);
    let total = multiply (mul1,mul2);
    document.getElementById("product").innerHTML= total;
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers );

function divide  (number1,number2){
    return number1 / number2;
}

function divideNumbers(){
    let div1 = parseInt(document.getElementById("dividend").value);
    let div2 = parseInt(document.getElementById("divisor").value);
    let total = divide (div1,div2);
    document.getElementById("quotient").innerHTML= total;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers );









/* BUILT-IN METHODS */
// Step 1: Declare and instantiate a variable of type Date to hold the current date
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
// Step 4: Assign the current year variable to an HTML form element with an ID of year

let date = new Date();
let year = date.getFullYear();
let showyear = document.getElementById("year")
showyear.innerHTML = year;

/* ARRAY METHODS */
// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operator) )
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

const arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let toHTML = document.getElementById("array");
toHTML.innerHTML = arrayNumbers;

const oddNumber = arrayNumbers.filter((Number) => Number % 2 !== 0);
let odds = document.getElementById("odds");
odds.innerHTML = oddNumber;

const evenNumber = arrayNumbers.filter((Number) => Number % 2 == 0);
let evens = document.getElementById("evens");
evens.innerHTML = evenNumber;

const sumOfArray = arrayNumbers.reduce((total,num) => total+num);
let sum = document.getElementById("sumOfArray");
sum.innerHTML = sumOfArray;

const multiplied = arrayNumbers.map(number => number * 2);
let multi = document.getElementById("multiplied");
multi.innerHTML = multiplied;

const sumOfMultiplied = arrayNumbers.map(number => number * 2).reduce((total,num) => total+num);
let sumulti = document.getElementById("sumOfMultiplied");
sumulti.innerHTML = sumOfMultiplied;