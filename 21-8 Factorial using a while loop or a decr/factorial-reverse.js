/*                          21-8 Factorial using a while loop or a decrementing loop */

/* 
function factorial(number){
    for(let i = number; i >= 1; i--){
        console.log(i);
    }
}

factorial(7); 
*/
/* Output:
7
6
5
4
3
2
1 */



/* 
function factorial(number){
    for(let i = number; i >= 1; i--){
        console.log(i);
    }
}

factorial(9); 
*/
/* Output:
9
8
7
6
5
4
3
2
1 */


/* 
function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result *i;
        console.log(i);
    }
    return result;
}

const fact = factorial(9);
console.log('Factorial of 9:', fact); 
*/
/* Output:
6
5
4
3
2
1
Factorial of 9: 362880 */


/* 
function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result *i;
        console.log(i);
    }
    return result;
}

const number = 5;
const fact = factorial(number);
console.log('Factorial of :', number, fact); 
*/
/* Output:
5
4
3
2
1
Factorial of : 5 120 */


function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result *i;
        console.log(i);
    }
    return result;
}

const number = 6;
const fact = factorial(number);
console.log('Factorial of:', number, fact);
/* Output:
6
5
4
3
2
1
Factorial of: 6 720 */