// JAVASCRIPT COMPLEX VARIABLES
const employee = {
  firstName: 'John Michael',
  lastName: 'Malbas',
  departmentId: 101,
  salary: 100000,
  active: true,
};

// Create a simple array of names
const simpleArray = ['Padme Amidala', 'Anakin Skywalker', 'Lando Calrissian', 'Jabba The Hut'];

// Create a complex array of objects
const complexArray = [
  { firstName: 'Padme', lastName: 'Amidala' },
  { firstName: 'Anakin', lastName: 'Skywalker' },
  { firstName: 'Lando', lastName: 'Calrissian' },
  { firstName: 'Jabba', lastName: 'The Hut' },
];

// Log the employee object
console.log(employee);

// Log the simple array using a for...of loop
console.log('Simple Array:');
for (const name of simpleArray) {
  console.log(name);
}

// Log the complex array using a for...of loop
console.log('Complex Array:');
for (const person of complexArray) {
  console.log(`${person.firstName} ${person.lastName}`);
}