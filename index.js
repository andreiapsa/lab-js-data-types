/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
//"Fred fed Ted bread and Ted fed Fred bread"
const tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4
console.log(tongueTwister)
// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
//remember we can use .length -1
const part1Capital = part1.slice(0, 3) + part1.slice(-1).toUpperCase()
const part2Capital = part2.slice(0, 5) + part2.slice(-1).toUpperCase()
const result = part1Capital + part2Capital
// Print the cameLtaiL-formatted string
console.log(result)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = (billTotal * 0.15)

// Print out the tipAmount
console.log(`The tip amount is ${tipAmount}€.`)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/
const randomNumber = Math.floor(Math.random() * (10 - 1 + 1) +1)
// Generate a random integer between 1 and 10 (inclusive)
//Formula Math.floor(Math.random() * (max - min + 1) +min)
console.log(randomNumber)

// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false
console.log(expression1)
const expression2 = a || b; // true 
console.log(expression2)
const expression3 = !a && b; //false
console.log(expression3)
const expression4 = !(a && b); // true
console.log(expression4)
const expression5 = !a || !b; // true
console.log(expression5)
const expression6 = !(a || b); // false
console.log(expression6)
const expression7 = a && a; // true
console.log(expression7)