/*                          21-7 Calculate Factorial of a number using for loop */

//  1 * 2 * 3 * 4 * 5 * 6 * 7 

/* 
Factorial:
Factorial is a function that multiplies a number by every number below it till 1.
1! = 1
2! = 2*1
3! = 3*2*1
4! = 4*3*2*1
5! = 5*4*3*2*1


3! = 3*2*1                          3! = 3*2!
                                    3! = 3*(3-1)!
                                    
                                    
4! = 4*3*2*1                        4! = 4*3!
                                    4! = 4*(4-1)! 
                                    
5! = 5*4*3*2*1                      5! = 5*4!
                                    5! = 5*(5-1)!



 
function multiplicationNumbers(number){
    let result = 0;
    for(let i = 1; i <= 7; i++){
        result = result * i;
    }
    return result;
}

const result = multiplicationNumbers(7); 
console.log(result); 

//Output: 0



function multiplicationNumbers(number){
    let result = 1;
    for(let i = 1; i <= 7; i++){
        result = result * i;
    }
    return result;
}

const result = multiplicationNumbers(7); 
console.log(result); 

// Output: 5040


 
function multiplicationNumbers(number){
    let result = 1;
    for(let i = 1; i <= 7; i++){
        result = result * i;
    }
    return result;
}

const result = multiplicationNumbers(9); 
console.log(result); 

//Output: 5040



function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = factorial(9); 
console.log(result); 

//Output: 362880


 
To calculate the factorial in reverse, you can modify the 'for' loop so that it starts from the given number and decrements down to 1. Here's how you can do it:
*/

function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }
    return result;
}

const result = factorial(9);
console.log(result);
// Output: 362880

/* 
In this version:

* The loop starts with 'i' equal to 'number' and decrements 'i' down to 1.
* It multiplies 'result' by 'i' in each iteration, just like before, but in reverse order.
This will give the same result:
Output: 362880
*/
