function OffLineMinimum(strArr) { 
  /* I declare a var numTest that is initialized to a regex expression that will be used to check if the current character
  in strArr is between 0 - 9. */
  var numTest = /[0-9]/;
  
  // I declare a var resultArr that will end up holding all of the smallest numbers in the current set in strArr.
  var resultArr = [];
  
  // I declare a var numArr that will be used to hold the numbers in strArr and ignore the "E" characters. 
  var numArr = [];
  
  // I declare a var smallest and initialize it to 10. This variable will hold the smallest number in numArr.
  var smallest = 10;
  
  // I declare a var lowestInd and initialize it to 0. This var will be used to find the index of the smallest character in numArr. 
  var lowestInd = 0;
  
  // I declare a for loop that passes over each character in strArr...
  for (var i = 0; i < strArr.length; i++) {
    // I test whether the current character is between 0-9.
    if (numTest.test(strArr[i])) {
      // If it is, I push it to numArr.
      numArr.push(strArr[i]);
    } else {
      // I declare a for loop that passes over each number in numArr...
      for (var j = 0; j < numArr.length; j++) {
        // if current number is less than smallest
        if (numArr[j] < smallest) {
          // smallest is assigned current number.
          smallest = numArr[j];
          // lowestInd is assigned to the index of the current number.
          lowestInd = numArr.indexOf(numArr[j]);
        }
      }
      // I push the smallest to our resultArr that we will end up being our return value.
      resultArr.push(smallest);
      // I splice the lowest number in numArr because we want to find the next lowest number in strArr.
      numArr.splice(lowestInd, 1);
      // I reset smallest to 10 in order for line 28 to test properly.
      smallest = 10;
    }
  }
  // Finally, I call the .join() method on resultArr to convert it to a string and return its value. 
  return resultArr.join(", ");
}
