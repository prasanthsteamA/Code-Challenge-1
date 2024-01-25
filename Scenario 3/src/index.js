// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.
// otherAngle(30, 60) return -> 90


// Write the function to find the otherAngle obtained.
function otherAngle(a, b) {
       //your code here
       let angle_3;
       if(a > 0 && b>0){
        angle_3 = 180-(a+b);
       }
       return angle_3;

  }

//Use SpecRunner to check the Test Cases.