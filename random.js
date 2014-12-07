// create a random number generator that:
// collects a number from a user using prompt,
// takes the users number and coverts it to an integer using parseInt()
// print a random number from 0 up to the users number
// then rewrite to take 2 numbers from the user
// print a random number from the first number to the second number

var userNumber = prompt("please enter a number, and I will return to you a random number between 0 and your number!");

var parsedUserNumber = parseInt(userNumber);
console.log(parsedUserNumber);
function getRandomArbitrary(min, parsedUserNumber) {
  var magicNumber = Math.random() * (parsedUserNumber - min) + min;
  console.log(magicNumber);
 document.write('<p>This number was between 0 and the number you input which was '+ userNumber + '</p>' + '<p> So your random number = ' + magicNumber + '</p>');
}

getRandomArbitrary(0, parsedUserNumber);


var firstUserNumber = prompt('now enter the first of two numbers: this one should be the smallest');
var secondUserNumber = prompt('now enter the second number: this one should be the biggest');
var parsedFirstUserNumber = parseInt(firstUserNumber);
var parsedSecondUserNumber = parseInt(secondUserNumber);

function getAnotherRandomArbitrary(parsedFirstUserNumber, parsedSecondUserNumber) {
var secondMagicNumber = Math.random() * (parsedSecondUserNumber - parsedFirstUserNumber) + parsedFirstUserNumber;
   document.write('<p>This number was between the two numbers you input which were '+ firstUserNumber + ' and ' + secondUserNumber + '. So your random number = ' + secondMagicNumber + '</p>');
};
  

getAnotherRandomArbitrary(parsedFirstUserNumber, parsedSecondUserNumber);