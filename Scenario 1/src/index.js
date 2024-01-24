// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

// Write the function to find the findDigit obtained.
var findDigit = function (num, nth) {
  //your code here
  if(num<0)
  {
    num=-num;
  }
  if(nth<=0)
  {
    return -1;
  }
  let cnt=0;
  let digit=0;
  while(num>0 && cnt<nth)
  {
    digit=num%10;
    num=Math.floor(num/10);
    cnt++;
  }
  return digit;
};

//Use SpecRunner to check the Test Cases.
