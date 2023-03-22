//1. Defining a function named "isGreaterThan10" which takes one parameter "num".
function isGreaterThan10(num) {
    // Returning a boolean value indicating whether the number is greater than 10.
    return num >10;
    }
    
    // Calling the "isGreaterThan10" function with an argument of 11, which returns "true" since 11 is greater than 10.
    var output = isGreaterThan10(11);
    
    // Finally, printing the value of the "output" variable to the console using the "console.log" function.
    console.log(output);
    
    //2. Defining a function named "isLessThan30" which takes one parameter "number".
    function isLessThan30(number){
    // Returning a boolean value indicating whether the number is less than 30.
    return number<30;
    }
    
    // Calling the "isLessThan30" function with an argument of 9, which returns "true" since 9 is less than 30.
    var output = isLessThan30(9);
    
    // Finally, printing the value of the "output" variable to the console using the "console.log" function.
    console.log(output)
    
    //3. Defining a function named "equalsTen" which takes one parameter "number".
    function equalsTen(number){
    // Returning a boolean value indicating whether the number is equal to 10.
    return number==10;
    }
    
    // Calling the "equalsTen" function with an argument of 9, which returns "false" since 9 is not equal to 10.
    var output = equalsTen(9);
    
    // Finally, printing the value of the "output" variable to the console using the "console.log" function.
    console.log(output)

 

//4. Defining a function named "isLessThan" which takes two parameters "number1" and "number2".
function isLessThan(number1, number2){
// Returning a boolean value indicating whether the second number is less than the first number.
return number2<number1;
}
// Declaring a variable named "output" which is assigned the result of calling the "isLessThan" function with arguments 9 and 4.
var output = isLessThan(9,4)
// Printing the value of the "output" variable to the console.
console.log(output)

// 5. Defining a function named "isGreaterThan" which takes two parameters "num1" and "num2".
function isGreaterThan(num1, num2){
// Returning a boolean value indicating whether the first number is greater than the second number.
return num1<num2;
}
// Declaring a variable named "output" which is assigned the result of calling the "isGreaterThan" function with arguments 11 and 10.
var output = isGreaterThan(11, 10);
// Printing the value of the "output" variable to the console.
console.log(output);

//6. Defining a function named "isEqualTo" which takes two parameters "num1" and "num2".
function isEqualTo(num1, num2){
// Returning a boolean value indicating whether the first number is equal to the second number.
return num1==num2;
}
// Declaring a variable named "output" which is assigned the result of calling the "isEqualTo" function with arguments 11 and 10.
var output = isEqualTo(11, 10);
// Printing the value of the "output" variable to the console.
console.log(output);


function showLength(array){
    return array.length
}