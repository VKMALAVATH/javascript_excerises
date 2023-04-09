// Write a function called "getAllElementsButFirst".
// Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.
// var input = [1, 2, 3, 4];
// var output = getAllElementsButFirst(input);
// console.log(output); // --> [2, 3, 4]


// function getAllElementsButFirst (array){
//      array.shift()

// }
// var input = [1,2,3,4]
// var output = getAllElementsButFirst(input)
// console.log(output)


// Write a function called "computePower".
// Given a number and an exponent, "computePower" returns the given number, raised to the given exponent.
// var output = computePower(2, 3);
// console.log(output); // --> 8
function computePower(num,exponent){
    return Math.pow(num,exponent)
}
console.log(computePower(2,3))


// Write a function called "computeSquareRoot". Given a number, "computeSquareRoot" returns its square root.
// var output = computeSquareRoot(9);
// console.log(output); // --> 3

function computeSquareRoot(number){
    return Math.sqrt(number)
}
console.log(computeSquareRoot(9))

// Write a function called "getLengthOfThreeWords".
// Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.
// var output = getLengthOfThreeWords('some', 'other', 'words');
// console.log(output); // --> 14
function getLengthOfThreeWords(word1,word2,word3){
    return word1.length+word2.length+word3.length
}
console.log(getLengthOfThreeWords('some', 'other', 'words'))


// Write a function to return substr of a string given a string with a given length
// console.log(getSubStr(“badminton”,3))

// Write a function called "computeTripledAreaOfARectangle".
// Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3.
// var output = computeTripledAreaOfARectangle(2, 4);
// console.log(output); // --> 24