// Data Types
//Numbers
//String


let num = 10.5;
let num2 = 13;
console.log(num+num2-2+1500);


// strings

const firstName = 'Priyanshu';
const lastName = 'Kumar';

console.log(firstName + ' ' + lastName)


// string '1' + '1' ---> string
// string +number = string

// string * num = number

console.log('15' * 10);



// Booleans

let isLoggedIn = true
console.log(isLoggedIn + 15)


// objects

const person = {
    firstName: 'Priyanshu',
    lastName: 'Kumar',
    age: 19,
    isLoggedIn: true,
    lastLoginDate: null,
}

console.log(person);


// 

console.log(typeof '123');


const age  = 9;
if(age >=18) {
    console.log('Yes you can vote')
}
else if(age>=85) {
    console.log('You are Old man')
}
else {
    console.log('No you can not  vote')
}



const agee = 90;

let result = age >=18 ? 'Yes' : 'No'

console.log('N0')


const option = 1;
switch(option) {
    case 1 : console.log('Namaste!')
    break;
    case 2 : console.log('Hello')
    case 3 : console.log('Bhojputi')
    
    default : console.log('Invalid option')
}


let a = 20;
let b = 15;

let opt = '*'

switch(opt) {
    case '+' : console.log(a+b);
    break;
    case '-' : console.log(b-a);
    break;
    case '*' : console.log(a*b); 
    break;
    console.log('idk')
}
