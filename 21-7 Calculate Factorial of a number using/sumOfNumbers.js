/*                          21-7 Calculate Factorial of a number using for loop */

// 1 + 2 + 3 + 4 + 5 + 6 + 7
/* 
for(let i = 1; i <=7; i++){
    console.log(i);
} 

// Output:
1
2
3
4
5
6
7



let sum = 0;
for(let i = 1; i <=7; i++){
    sum = sum + i;
    console.log(i, sum);
} 

// Output:
1 1
2 3
3 6
4 10
5 15
6 21
7 28


// Converting into 'function'
//Let’s walk through the function with an example input, say 'sumOfNumbers(5)':
*/

function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}

sumOfNumbers(5);
/* Output:
1 1
2 3
3 6
4 10
5 15 */     