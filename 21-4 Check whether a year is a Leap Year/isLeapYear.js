/*                              21-4 Check whether a year is a Leap Year or not (simplified way) */

/* 
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log('Your year is leap year', year);
    }
    else{
        console.log('Your year is not a leap year', year);
    }
}

isLeapYear(1933); 
*/
//Output: Your year is not a leap year 1933

/* 
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log('Your year is leap year', year);
    }
    else{
        console.log('Your year is not a leap year', year);
    }
}

isLeapYear(1933);
isLeapYear(1960); 
*/
/* Output:
Your year is not a leap year 1933
Your year is leap year 1960 */

/* function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('My year:', isMyYearLeapYear);
const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear); */
/* Output:
My year: false
Her year: true */

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false;
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('My year:', isMyYearLeapYear);
const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear);
/* Output:
My year: false
Her year: true */