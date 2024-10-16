
// a simple practical 
// we are going to make a simple app

/* Introduce “console.log()” 
Introduce `string ${variable}` 
Assign some variables Variables 
The Date object
Simple operators 
Basic 
Comparative
Math
 */


/* let userName = prompt("What's your name?", "Your Name"); 
console.log(`Hi there,  ${userName}. This is a calculator to calculate circumference and area of a circle.`);


// basic circle calculator 
let radius = prompt("What's the radius of your circle?", 0); 

const pi = 3.14159; 

let area = pi*(radius**2);
let circumference = pi*(radius*2); 

console.log(`With a radius of ${radius} \n
    \t The Area of the Circle is: ${area} \n
    \t The Circumference of the Circle is: ${circumference}`) */
/* 
// basic comparisons 

let petInfo = [
  {
    petName: "Siggy",
    petType: "Cat",
    petAge: 3
  },

  {
    petName: "Mylo",
    petType: "Cat",
    petAge: "3"
  }
];

// calling on the petInfo object in the 0 position compared to the petInfo object in the 1 position and the propery petAge; 
console.log(petInfo[0].petAge == petInfo[1].petAge);
console.log(petInfo[0].petAge === petInfo[1].petAge); */

// Basic Methods 
// https://www.w3schools.com/js/js_object_methods.asp 

let todaysDate = new Date(); 
console.log(todaysDate.getMonth())

let objectSample = {
    name: "ishrat", 
    pet: "cat"
}

let properties = Object.entries(objectSample); 

console.log(properties); 