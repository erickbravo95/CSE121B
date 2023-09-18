/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived

let myInfo = { 
    myName : "Erick Bravo",
    photo : "images/cv_foto.jpg",
    favoriteFoods : ["Ice cream", "Pizza", "Tuki"],
    hobbies : ["play video games", "travel", "cook"],
    placesLived : [{place : "Panorama",length : "18 years"},
                   {place : "Centro",length : "10 years"}]
}

/* OUTPUT */
// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

document.querySelector('#name').textContent = myInfo.myName;
document.querySelector('#photo').src = myInfo.photo;
document.querySelector('#photo').alt = myInfo.myName;

function myFunctionff(favoriteFoods) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(favoriteFoods);
    node.appendChild(textnode);
    document.getElementById("favorite-foods").appendChild(node);
}

myFunctionff(myInfo.favoriteFoods[0]);
myFunctionff(myInfo.favoriteFoods[1]);
myFunctionff(myInfo.favoriteFoods[2]);

function myFunctionH(hobbies) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(hobbies);
    node.appendChild(textnode);
    document.getElementById("hobbies").appendChild(node);
}

myFunctionH(myInfo.hobbies[0]);
myFunctionH(myInfo.hobbies[1]);
myFunctionH(myInfo.hobbies[2]);

function myFunctionPL(place,length) {
    const nodeP = document.createElement("dt");
    const nodeL = document.createElement("dd");
    const textnodeP = document.createTextNode(place);
    const textnodeL = document.createTextNode(length);
    nodeP.appendChild(textnodeP);
    nodeL.appendChild(textnodeL);
    document.getElementById("places-lived").appendChild(nodeP);
    document.getElementById("places-lived").appendChild(nodeL);
}

myFunctionPL(myInfo.placesLived[0].place,myInfo.placesLived[0].length);
myFunctionPL(myInfo.placesLived[1].place,myInfo.placesLived[1].length);