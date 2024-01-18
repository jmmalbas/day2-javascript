// Creating a user object with firstName and lastName properties
const person = {
  firstName: "John Michael",
  lastName: "Malbas",
};

// Creating an array of numbers
const numbersArray = [10, 25, 4, 12, 6];

// Function to compare two numbers and return the larger one
function findLargerNumber(number1, number2) {
  // Using the ternary operator to compare and return the larger number
  return number1 > number2 ? number1 : number2;
}

// Function to get the user's full name
function getFullName(user) {
  // Concatenating the firstName and lastName properties to form the full name
  return `${user.firstName} ${user.lastName}`;
}

// Example usage of the functions
const resultLargerNumber = findLargerNumber(numbersArray[0], numbersArray[2]);
const resultFullName = getFullName(person);

// Logging the results to the console
console.log("Larger Number:", resultLargerNumber);
console.log("Full Name:", resultFullName);
