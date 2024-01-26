// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0


// Write the function to find the findDigit obtained.
var findDigit = function(num, nth){
     //your code here
     var numString=Math.abs(num).toString();

     if(nth <= 0){
      return -1;
     }

     if(nth>numString.length){
      return 0;
     }

     return parseInt(numString[numString.length - nth],10);


  }

//Use SpecRunner to check the Test Cases.