// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


// Write the function to find the getGrade obtained.
//grade checker

function gradeChecker(grade)
{
  if(grade>=90)
  {
    return 'A';
  }
  else if(grade>=80 && grade<90)
  {
    return 'B';
  }
  else if(grade>=70 && grade<80)
  {
    return 'C';
  }
  else if(grade>=60 && grade<70)
  {
    return 'D';
  }
  else
  {
    return 'F';
  }
}


function getGrade (s1, s2, s3) {
   //your code here
   return gradeChecker(s1)+' '+gradeChecker(s2)+' '+gradeChecker(s3);
  }
//Use SpecRunner to check the Test Cases.