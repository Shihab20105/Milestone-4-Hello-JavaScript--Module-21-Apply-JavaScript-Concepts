/*                          21-8 Factorial using a while loop or a decrementing loop */
function factorial(number){
    let i = number;
    let result = 1;
    while( i >= 1){
        result = result * i;
        i--;
    }
    return result;
}

//const Output = factorial(7);
const number = 7;
const fact = factorial(number);
console.log('Factorial of:', number, fact);
/* Output:
Factorial of: 7 5040 */