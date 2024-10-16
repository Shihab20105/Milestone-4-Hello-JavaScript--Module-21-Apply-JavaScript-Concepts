/*                          21-1 JS Concepts recap, var, let, and const */

// 1. Variable
var flowerName = 'Rose';

// Math operation: +, -, *, /
// Shorthand: +=, -=, *=, /=
// ++, --

// 2. Array
// Array index
var friends = ['Hasan', 'Jaman', 'Kamal', 'Karim', 'Naeem', 'Samad'];
var thirdFriend = friends[2];
friends[3] = 'Kabul';


// 3. Conditionals
// >, <, >=, <=, ==, ===, !=, !==

if(friends.length < 2){
    console.log('Poor guy you do not have any friend');
}
else{

}


// 4. Loop
// while loop and for loop
var number = 0;
while(number <= 6){
    console.log(number);
    number++;
}

for(var i = 0; i <= 10; i++){

}

// 5. Function
function isSunny(time){
    //return
    if(time > 7){
        return true;
    }
} 

// 6. Object

var adam = {
    height: 6,
    honesty: 'Very',
    property: 'huge',
}