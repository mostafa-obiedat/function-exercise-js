//Ex3

//Q1 
function reverse(x){
    let str = ""+ x;
    for(i=str.length; i > 0; i--){
        var reverse = str.charAt(i-1);
        console.log(reverse);
    }
}
let x = 532443;
reverse(x);




//Q2
for(i=0; i<=15; i++){
    if(i%2==0){
        console.log(i+ " is an even number");
    }else{
        console.log(i + " is an odd number");
    }
}




//Q3
function alphabatical(string) {

    let str = string.toLowerCase();

    let sortedString = str.split('').sort().join('');

    return sortedString;
}

let string = "Orange";
console.log(alphabatical(string));




//Q4
function Q4(input) {
    
    let inputString = input.toString();
    let result = [];

    for (let i = 0; i < inputString.length; i++) {

        result.push(inputString[i]);

        if (i < inputString.length - 1 && inputString[i] % 2 === 0 && inputString[i + 1] % 2 === 0) {
            result.push("-");
        }
    }
    return result.join("");
}

let input = prompt("Enter a number:");
let output = Q4(input);
console.log(output);




//Q5
function Agechecker(age){
    let message = age >= 18 ? "The user is Adult." : "The user is Minor.";
    return message;
}

let age = parseInt(prompt("Please enter your age: "))
console.log(Agechecker(age));