/*                          21-6 Get Odd Numbers of an array and get odd Sum of an array */

/* Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers. */


/* 
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        //console.log(index, element, sum);
    }
    return sum;
}

function getOddNumbersOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        console.log(i);
    }
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getOddNumbersOfAnArray(myNumbers);
getSumOfAnArray(myNumbers);  
*/

/* Output:
0
1
2
3
4
5
6 */



/* 
function getOddNumbersOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        console.log(i);
    }
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getOddNumbersOfAnArray(myNumbers); 
*/
/* Output:
0
1
2
3
4
5
6 */


/* 
function getOddNumbersOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
       console.log(index, element);
    }
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getOddNumbersOfAnArray(myNumbers); 
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
function getOddNumbersOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
       if(element % 2 === 0){
            console.log(index, element);
        }
    }
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getOddNumbersOfAnArray(myNumbers); 
*/
/* Output:
0 12
3 78
4 32 */


/* 
function getOddNumbersOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
       if(element % 2 !== 0){
            console.log(index, element);
        }
    }
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getOddNumbersOfAnArray(myNumbers); 
*/
/* Output:
1 65
2 45
5 45
6 91 */


/* 
function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
       if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers); 
*/
/* Output:
1 65
2 45
5 45
6 91
[ 65, 45, 45, 91 ] */


/* 
function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
       if(element % 2 === 1){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers); 
*/
/* Output:
1 65
2 45
5 45
6 91
[ 65, 45, 45, 91 ] */


function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        //console.log(index, element, sum);
    }
    return sum;
}

function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
       if(element % 2 === 1){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);

console.log('Odd Number Sum', oddNumberSum); 
/* Output:
1 65
2 45
5 45
6 91
[ 65, 45, 45, 91 ]
Odd Number Sum 246 */

