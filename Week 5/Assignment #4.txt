// write a variable that is a string and output to console (hint: it's console.log(variable name))

// write a variable that is a number and output to console (hint: it's console.log(variable name))

// write a variable that takes any two numbers and adds them 

// write a variable that takes any two numbers and subtracts them and output to console

// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console 

// write a variable that takes any two numbers and perform an exponential value and output to console 

// write a statement that is false using a conditional statement and output to console 


// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  

// console.log the values of that object one by one. 

// create an array 

// call the value in the 3 position of this array and output to console 

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]

// call all values in the array using a loop 

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}

