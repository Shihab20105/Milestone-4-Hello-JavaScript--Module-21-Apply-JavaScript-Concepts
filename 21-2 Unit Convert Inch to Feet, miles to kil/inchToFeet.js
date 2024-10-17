/*                          21-2 Unit Convert Inch to Feet, miles to kilometer */
/* 
const myInches = 12;
const myFeet = myInches /12;
console.log(myFeet); 
*/
//Output: 1

/* 
const adamsInches = 144;
const adamsFeet = adamsInches /12;
console.log('Adam Feet', adamsFeet); 
*/
//Output: Adam Feet 12

/*
 const jakesInches = 60;
const jakesFeet = jakesInches /12;
console.log('JakesFeet', jakesFeet); 
*/
//Output: JakesFeet 5

/* 
function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const adamsInches = 144;
const adamsFeet = inchToFeet(adamsInches);
console.log(adamsFeet); 
*/
//Output: 12

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const tomsInches = 168;
const tomsFeet = inchToFeet(tomsInches);
console.log('Tom Feet', tomsFeet);
//Output: Tom Feet 14