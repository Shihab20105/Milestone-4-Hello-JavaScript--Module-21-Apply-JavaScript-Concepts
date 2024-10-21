/*                          21-3 Check even and odd number using function */

//console.log(4/2);
//Output: 2

/* 
console.log(4/2);
console.log(98/2);
console.log(144/2);
console.log(1286/2); 
*/
/* Output:
2
49
72
643 */

/*
console.log(7/2);
console.log(83/2);
console.log(145/2);
console.log(1287/2); 
*/
/* Output:
3.5
41.5
72.5
643.5 */

/* 
console.log(4%2);
console.log(98%2);
console.log(144%2);
console.log(1286%2); 
*/
/* Output:
0
0
0
0 */

/* 
console.log(7%2);
console.log(83%2);
console.log(145%2);
console.log(1287%2); 
*/ 
/* Output:
1
1
1
1 */

/* 
function isEven(number){
    const remainder = number % 2;
    console.log(remainder);
}

isEven(48); 
*/
//Output: 0

/* 
function isEven(number){
    const remainder = number % 2;
    console.log(remainder);
}

isEven(303); 
*/
//Output: 1

/* 
function isEven(number){
    const remainder = number % 2;
    //console.log(remainder);
    if(remainder === 0){
        console.log('Number is even');
    }
    else{
        console.log('Number is odd');
    }
}

isEven(303); 
*/
//Output: Number is odd

/* 
function isEven(number){
    const remainder = number % 2;
    //console.log(remainder);
    if(remainder === 0){
        console.log('Number is even');
    }
    else{
        console.log('Number is odd');
    }
}

isEven(303);
isEven(1280); 
*/
/* Output:
Number is odd
Number is even */

/* 
function isEven(number){
    const remainder = number % 2;
    //console.log(remainder);
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280); 
*/
//Output: false

function isEven(number){
    const remainder = number % 2;
    //console.log(remainder);
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);
/* Output:
false
true */