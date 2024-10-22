/*                          21-5 Calculate Sum of all numbers of an array */

/* Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers. */

/* 
function getSomeOfAnArray(numbers){
    console.log(numbers);
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSomeOfAnArray(myNumbers); 
*/
/* Output:
[
  12, 65, 45, 78,
  32, 45, 91
] */


/* 
function getSomeOfAnArray(numbers){
    for(const i = 0; i < numbers.length; i++){

    }
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSomeOfAnArray(myNumbers); 
*/
/* Output:
TypeError: Assignment to constant variable.
    at getSomeOfAnArray (D:\Web Development\Milestone-4 Hello JavaScript\Module-21 Apply JavaScript Concepts\21-5 Calculate Sum of all numbers of array\findOddSum.js:21:43) */


/* function getSomeOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        console.log(index);
    }
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSomeOfAnArray(myNumbers); */
/* Output:
0
1
2
3
4
5
6 */


/* 
function getSomeOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index]
        console.log(index, element);
    }
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSomeOfAnArray(myNumbers); 
*/
/* Output:
0 12
1 65
2 45
3 78
4 32
5 45
6 91 */

/* 
function getSomeOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        console.log(index, element, sum);
    }
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSomeOfAnArray(myNumbers); 
*/
/* Output:
0 12 12
1 65 77
2 45 122
3 78 200
4 32 232
5 45 277
6 91 368 */


function getSomeOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSomeOfAnArray(myNumbers);
/* Output:
0 12 12
1 65 77
2 45 122
3 78 200
4 32 232
5 45 277
6 91 368 */