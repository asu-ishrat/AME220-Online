let x = 50; 
let cars = ["bmw", "audi", "porsche", "mercedes"]; 

// if-else statements function 

function ifElse(x){
    if(x <= 10){
        if(x===10){
            return "this is super true" 
        }
    
        else{
            return "this is only somewhat true"
        }
    }
    
    else if (x < 20) {
        return "x is less than 20"
    }
    
    else{
        return "truth is a construct" 
    }
} 

function switchFunction() {
    let switchObject = {
        name: "Ishrat",
        petName: "Siggy"
    }

    switch(switchObject.name){

        case "Lisa": 
            console.log("My name is Lisa!")
            break; 
        case "Alexandria": 
            console.log("You can call me Alex")
            break; 
        case "Ishrat": 
            console.log("Yahaha you found me!")
            break; 
        default: 
            console.log("NOOOOOOOOO")
        

    } 
}

function forLoop() { 

    console.log(`the length of cars is ${cars.length}`)

    for (let i = 0; i < cars.length; i++){
        console.log(cars[i])
    } 

}

function forIn() {

    const person = {fname:"John", lname:"Doe", age:25};
    for (let x of person) {

        console.log(person[x])

    } 

// print every property of this object 
// x returns the property 

}


function forInLoop2 (cars) {

    for (let z in cars) {
    console.log(cars[z])
    }       

}/* 
// print every property of this object 
// x returns the property 



    // while loops 

let numberWhile = 50; 
let y = 60; 

do { 

    console.log(y)
    y++ 
} while(y <= numberWhile) */


x = prompt("Provide a number", 0)

let callFunction = ifElse(x); 
alert(callFunction); 