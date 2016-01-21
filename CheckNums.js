function CheckNums(num1,num2) { 
  // Check if num2 is greater than num1.
  if (num2 > num1) {
    // If it is, return the string "true".
    return "true";
  // Check if num2 is less than num1.
  } else if (num2 < num1) {
    // If it is, return the string "false".
    return "false";
  // If previous tests failed, they must be equal and I return -1.
  } else {
      return -1;
    }      
}
