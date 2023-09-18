/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = document.querySelector('#name');


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
myName.innerHTML = "Erick Bravo";

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = document.querySelector('#year');

// Step 4: place the value of the current year variable into the HTML file
currentYear.innerHTML = 2023;

// Step 5: declare and instantiate a variable to hold the name of your picture
let pictureName = "images/cv_foto.jpg";

// Step 6: copy your image into the "images" folder
//Done.

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#Photo').src = pictureName;



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFood = ["Ice cream", "Pizza", "Tuki"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.getElementById('food').textContent = favoriteFood;

// Step 3: declare and instantiate a variable to hold another favorite food
let moreFood = "Encebollado";

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFood.push(moreFood);

// Step 5: repeat Step 2
document.getElementById('food').textContent = favoriteFood;

// Step 6: remove the first element in the favorite foods array
favoriteFood.shift();

// Step 7: repeat Step 2
document.getElementById('food').textContent = favoriteFood;

// Step 8: remove the last element in the favorite foods array
favoriteFood.pop();

// Step 7: repeat Step 2
document.getElementById('food').textContent = favoriteFood;


