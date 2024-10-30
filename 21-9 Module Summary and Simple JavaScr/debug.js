/*                          21-9 Module Summary and Simple JavaScript debug */

/* Some thing is Wrong:
function getFactorial(number){
    let factorial = 1;
    for(let i = 0; i <= 7; i++){
        factorial = factorial + i;
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log('Factorial of 8 is:', factorial); 
*/
/* Output:
Factorial of 8 is: 29 */


/* Again Some thing is Wrong:
function getFactorial(number){
    let factorial = 0;
    for(let i = 0; i <= 7; i++){
        factorial = factorial + i;
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log('Factorial of 8 is:', factorial); 
*/
/* Output:
Factorial of 8 is: 28 */



/* Again Some thing is Wrong: 
function getFactorial(number){
    let factorial = 0;
    for(let i = 0; i <= 7; i++){
        factorial = factorial * i;
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log('Factorial of 8 is:', factorial); 
*/
/* Output:
Factorial of 8 is: 0 */



/* Again Some thing is Wrong:
function getFactorial(number){
    let factorial = 1;
    for(let i = 0; i <= 7; i++){
        factorial = factorial * i;
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log('Factorial of 8 is:', factorial); 
*/
/* Output:
Factorial of 8 is: 0 */


/* Again Some thing is Wrong:
function getFactorial(number){
    let factorial = 0;
    for(let i = 0; i <= 7; i++){
        factorial = factorial + i;
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log('Factorial of 8 is:', factorial); 
*/
/* Output:
Factorial of 8 is: 28 */


/* Again Some thing is Wrong:
function getFactorial(number){
    let factorial = 0;
    for(let i = 0; i <= 7; i++){
        factorial = factorial + i;
        console.log(i);
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log('Factorial of 8 is:', factorial); 
*/
/* Output:
0
1
2
3
4
5
6
7
Factorial of 8 is: 28 */



/* Again Some thing is Wrong:
function getFactorial(number){
    let factorial = 0;
    for(let i = 1; i <= 7; i++){
        factorial = factorial + i;
        console.log(i);
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log('Factorial of 8 is:', factorial); 
*/
/* Output:
1
2
3
4
5
6
7
Factorial of 8 is: 28 */


/* Again Some thing is Wrong:
function getFactorial(number){
    let factorial = 0;
    for(let i = 1; i <= 7; i++){
        factorial = factorial + i;
        console.log(i, factorial);
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log('Factorial of 8 is:', factorial); 
*/
/* Output:
1 1
2 3
3 6
4 10
5 15
6 21
7 28
Factorial of 8 is: 28 */


/* Again Some thing is Wrong: 
function getFactorial(number){
    let factorial = 0;
    for(let i = 1; i <= 7; i++){
        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log('Factorial of 8 is:', factorial); 
*/
/* Output:
1 0
2 0
3 0
4 0
5 0
6 0
7 0
Factorial of 8 is: 0 */



/* Again Some thing is Wrong: 
function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= 7; i++){
        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log('Factorial of 8 is:', factorial); 
*/
/* Output:
1 1
2 2
3 6
4 24
5 120
6 720
7 5040
Factorial of 8 is: 5040 */



/* Again Some thing is Wrong:
function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= 7; i++){
        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}

const factorial = getFactorial(12);
console.log('Factorial of 8 is:', factorial); 
*/
/* Output:
1 1
2 2
3 6
4 24
5 120
6 720
7 5040
Factorial of 8 is: 5040 */



/* 
function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}

const factorial = getFactorial(12);
console.log('Factorial of 8 is:', factorial); 
*/
/* Output:
1 1
2 2
3 6
4 24
5 120
6 720
7 5040
8 40320
9 362880
10 3628800
11 39916800
12 479001600
Factorial of 8 is: 479001600 */


/* ------------------------------------------------------------------------------------------------------------ */

/*                          Practice Problem 1 */

/* Write a function that will take 'hour' as the input parameter and will convert into 'minutes' and will return the result in 'minutes'.  

Here's a JavaScript function that takes 'hour' as an input parameter and converts it to 'minutes':
*/
/* 
function convertHoursToMinutes(hour) {
    return hour * 60;
}

// Example usage:
let hours = 5;
let minutes = convertHoursToMinutes(hours);
console.log(`${hours} hours is equal to ${minutes} minutes.`); 
*/
// Output: 5 hours is equal to 300 minutes.

// In this function, hour is multiplied by 60 to convert it into minutes.



// Here’s a simple function that takes an hour as input, converts it to minutes, and returns the result:

/* 
function convertHoursToMinutes(hour) {
    return hour * 60;
}

// Example usage:
let hours = 3;
let minutes = convertHoursToMinutes(hours);
console.log(minutes); 
*/
// Output: 180

/* 
* If you input '3' hours, the function will multiply it by '60' (since 1 hour = 60 minutes).
* So, '3 * 60 = 180'.
* The result, '180', is printed as the output, which is the total minutes for 3 hours.
*/


/* ------------------------------------------------------------------------------------------------------------ */

/*                          Practice Problem 2 */

/* 
Write a function 'findLeapYear()' that will take 'the array [2023, 2024, 2025, 2028, 2030]' as the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result.
*/

/* Here’s the function 'findLeapYear()' that will take an array of years, check if each year is a leap year, and return a new array with the leap years: */

/* 
function findLeapYear(years) {
    let leapYears = [];

    for (let year of years) {
        // Check if the year is a leap year
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year); // Add leap year to the new array
        }
    }

    return leapYears;
}

// Example usage:
let yearsArray = [2023, 2024, 2025, 2028, 2030];
let leapYearsArray = findLeapYear(yearsArray);
console.log(leapYearsArray); 
*/
// Output: [ 2024, 2028 ]

/* 
Explanation:

* The function checks each year in the array.
* A leap year is divisible by 4 but not by 100, or divisible by 400.
* In this case, 2024 and 2028 are leap years, so they are added to the new array.
*/



/* Here's a simpler version of the function with an explanation and output: */
function findLeapYear(years) {
    let leapYears = []; // Create an empty array for leap years

    // Loop through each year in the input array
    for (let year of years) {
        // Check if the year is a leap year
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year); // Add it to the leapYears array
        }
    }

    return leapYears; // Return the array of leap years
}

// Example usage:
let yearsArray = [2023, 2024, 2025, 2028, 2030];
let leapYearsArray = findLeapYear(yearsArray); // Call the function
console.log(leapYearsArray); // Print the result
// Output: [ 2024, 2028 ]

/* 
Explanation:

* The function loops through each year in the input array '[2023, 2024, 2025, 2028, 2030]'.
* It checks if the year is divisible by 4 but not by 100, or divisible by 400.
* '2024' and '2028' are leap years, so the result is '[2024, 2028]'.
*/



