//  1.This function takes a number as an argument and returns a boolean value indicating whether the number is greater than 10.
function isGreaterThan10(num) {
    // We use an if-else statement to check if the number is greater than 10.
    if (num > 10) {
      // If the number is greater than 10, we return true.
      return true;
    } else {
      // If the number is not greater than 10, we return false.
      return false;
    }
  }
  
  // We call the "isGreaterThan10" function with an argument of 11, which returns "true" since 11 is greater than 10.
  var output = isGreaterThan10(11);
  
  // Finally, we log the output to the console using the "console.log" function.
  console.log(output); 


  //2.
  function isLessThan30(number){
    if (number<30){
        return true;
    } else{
        return false;
    }
} 
var output = isLessThan30(9)
console.log(output)

//3.
function equalsTen(number){
    if (number=10){
        return true;
    } else{
        return false;
    }
} 
var output = equalsTen(9)
console.log(output)


//4.
function isLessThan(number1, number2){
   return number2<number1;
} 
var output = isLessThan(9,4)
console.log(output)

// 5. 
function isGreaterThan(num1, num2){
return num1<num2;
}
var output = isGreaterThan(11, 10);
console.log(output);

//6.
function isEqualTo(num1, num2){
    return num1==num2;
    }
    var output = isEqualTo(11, 10);
    console.log(output);
