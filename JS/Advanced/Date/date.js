// Knowing how to work with dates is important so this file contains examples of how to work with dates in JavaScript

// Creating a new date object with the current date and time
const currentDate = new Date();
console.log(currentDate);

// Creating a new date object with a specific date
const specificDate = new Date("2022-01-01");
console.log(specificDate);

// Creating a new date object with a specific date and time
const specificDateTime = new Date("2022-01-01T12:00:00");
console.log(specificDateTime);

// Getting the year, month, day, hour, minute, and second of a date
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth()); // Month is zero-based just like arrays
console.log(currentDate.getDate()); // Day of the month
console.log(currentDate.getDay()); // Day of the week (0 is Sunday, 1 is Monday, etc.)
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

// Formatting a date as a string
console.log(currentDate.toDateString());

// Getting the difference between two dates in milliseconds
const date1 = new Date("2022-01-01");
const date2 = new Date("2022-01-02");
const differenceInMilliseconds = date2 - date1;
