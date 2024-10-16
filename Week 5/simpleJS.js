// lets define some variables 

let numExample = 50
var stringExample; 
const pi = 3.14159

//array Examples 

let arrayExample = ["1", 1, "0", 0]

//objectExample 
const objectExample = { 
    name: "ishrat", 
    petName: "Siggy",
    bothTogether: function() {
        return this.name+this.petName
    }
}

// math operators 

let multiplicationExample = 50*2; 
let divisionExample = 50/2; 
let squaredExample = 10**2; 
let moduloExample = 11%2; 

console.log(`Multiplication Example: ${multiplicationExample} \n
    Division Example:  ${divisionExample} \n
    squaredExample: ${squaredExample}\n
    Modulo Example: ${moduloExample}\n`); 

// logical operators 

numExample = 50

console.log(numExample <=! 50)

// basic add and or 

// numExample must to be greater than 50 AND 60  (evaluates to false)
console.log(numExample > 50 && numExample < 60)

// numExample could to be greater than 50 OR 60  (evaluates to true)
console.log(numExample > 50 || numExample < 60)