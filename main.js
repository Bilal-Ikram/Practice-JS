////////////////  BMI CALCULATOR /////////////////
function calculateBMI(weight, height) {
  if (height <= 0) {
    console.log("Height must be greater than zero.");
    return;
  }

  const bmi = weight / (height * height);
  return bmi;
}

// Example usage:
const weight = 70; // in kg
const height = 1.75; // in meters

const bmi = calculateBMI(weight, height);
console.log(`Your BMI is: ${bmi}`);


////////////////  calculating how many weeks a person has left until age 90 /////////////////
let age = parseInt(prompt("Enter your current age:"));

const maxAge = 90;
const weeksInYear = 52;

let yearsLeft = maxAge - age;
let weeksLeft = yearsLeft * weeksInYear;

console.log(`You have ${weeksLeft} weeks left.`);

////////////////   Circle Properties from Radius /////////////////
let radius = parseFloat(prompt("Enter the radius of the circle:"));

let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;

console.log("Diameter:", diameter);
console.log("Circumference:", circumference.toFixed(2));
console.log("Area:", area.toFixed(2));

////////////////   Show Digits Separately from a 4-Digit Number (Odd Positions)    /////////////////
let num = prompt("Enter a 4-digit number:");
let digits = num.split('');

for (let i = 0; i < digits.length; i++) {
  if (i % 2 === 0) { // 0, 2 => 1st and 3rd positions
    console.log(digits[i]);
  }
}

////////////////   Average Age of 10 Students    /////////////////
let totalAge = 0;

for (let i = 1; i <= 10; i++) {
  let age = parseInt(prompt(`Enter the age of student ${i}:`));
  totalAge += age;
}

let averageAge = totalAge / 10;
console.log("Average age of the class is:", averageAge);




