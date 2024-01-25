// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


// Write the function to find the getGrade obtained.
function getGrade (s1, s2, s3) {
   //your code here
   let mean = (s1+s2+s3) / 3;
   let grade = "";
     if(90 <= mean && mean <= 100){
      grade = "A";
     }
     
    else if (80 <= mean && mean < 90){
      grade = "B";
      
    }
    else if(70 <= mean && mean < 80){
      grade = "C";
    }
    else if(60 <= mean && mean < 70){
      grade = "D";
    
    }
    else if(0 <= mean && mean < 60){
      grade = "F";  
    }
    else{
      grade = "grade not defined";
    }
    return grade;
   }
   

  
//Use SpecRunner to check the Test Cases.