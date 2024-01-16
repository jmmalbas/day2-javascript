// Sample employee object
const employee = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  departmentId: 42,
  salary: 100000,
  active: true,
};

// Function to check if an employee is active
function isEmployeeActive(employee) {
  if (employee.active === false) {
    return false;
  }
  return true;
}

// Function to get the full name
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Invoke the functions
const isActive = isEmployeeActive(employee);
const fullName = getFullName(employee.firstName, employee.lastName);

// Log the results
console.log('Is the employee active?', isActive);
console.log('Full Name:', fullName);
