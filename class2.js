// Write a function called "isLessThan". Given 2 numbers, "isLessThan" returns whether num2 is less than num1.
// var output = isLessThan(9, 4);
// console.log(output); // --> true
 
function isLessThan (num1, num2 ){
    return num2<num1;

}
var output =isLessThan(9,4)
// console.log(output)


// Write a function called "isOddLength".
// Given a word, "isOddLength" returns whether the length of the given word is odd.
// var output = isOddLength('special');
// console.log(output); // --> true

//function definition

function  isOddLength(word) {
    // is even check condition modulo
    return word.length % 2 !== 0
    
}
var output = isOddLength("vinod")
console.log(output)
var out = isOddLength("vinodk")
console.log(out)
var data = isOddLength("")
console.log(data)

// Write a function called "average".
// Given two numbers, "average" returns their average.
// var output = average(4, 6);
// console.log(output); // --> 5
function average (num1, num2){
    return (num1+num2)/2;

}
var test = average(4,6)
console.log(test)

// Write a function called "computeAreaOfATriangle".
// Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.
// var output = computeAreaOfATriangle(4, 6);
// console.log(output); // --> 12


function computeAreaOfATriangle(base, height) {
    return (base*height)/2;


}
var area = computeAreaOfATriangle(4,6)
console.log(area)

// Write a function called "computePerimeteOfATriangle".
// Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.
// var output = computeAreaOfATriangle(4, 6, 3);
// console.log(output); // --> 13

function computePerimeteOfATriangle(side1, side2, side3){
    return (side1+side2+side3)

}
var perimeter = computePerimeteOfATriangle(4,6,3)
console.log(perimeter);


