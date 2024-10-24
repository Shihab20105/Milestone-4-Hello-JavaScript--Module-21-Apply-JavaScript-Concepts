/*                          21-8 Factorial using a while loop or a decrementing loop */

function factorial(number){
    let num = 1;
    let result = 1
    while(num <= number){
        result = result * num;
        num++;
    }
    return result;
}

const number = 6;
const fact = factorial(number);
console.log('Factorial of:', number, fact);
/* Output:
Factorial of: 6 720 */