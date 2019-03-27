//Defining minimum value
let min = 0;
//Defining maximum value
let max = 1000;
//Defining the calculation of random number with arrow function
let random = () => {
	return Math.random() * (+max - +min) + +min;
};
//Displaying output in console in whole numbers
console.log(Math.floor(random()));
