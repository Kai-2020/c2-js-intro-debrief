// GenBuzz 
let myNumber = 30;

if (typeof myNumber != 'number') {
    console.log('This is not a number');
} else if (myNumber % 15 === 0) {
    console.log('GenBuzz');
} else if (myNumber % 3 === 0) {
    console.log('Gen');
} else if (myNumber % 5 === 0) {
    console.log('Buzz');
} else {
    console.log(myNumber);
}

// Ecommerce Item List
let item = 'shoes';
switch (item) {
    case 'shoes':
        console.log('Shoes are $50');
        break;
    case 'jeans':
        console.log('Jeans are $25');
        break;
    case 'hat':
        console.log('Hats are $12');
        break;
    case 'socks':
        console.log('Socks are $2');
        break;

    default:
        console.log("Invalid item");
        break;
}

// Random Integer Generator
min = Math.ceil(50);
max = Math.floor(100);
let num = Math.floor(Math.random() * (max - min + 1) + min);
console.log(num);