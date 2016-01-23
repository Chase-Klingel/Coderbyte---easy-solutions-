function MeanMode(arr) {
  // I declare a var sortedArr that will sort my array in ascending order. 
  // This will make finding the mode much easier.
  var sortedArr = arr.sort(function(a, b) {
    return a - b;
  });
  
  // I declare a var sum that will be used to calculate the mean.
	var sum = 0;
	
  // I declare a var mean that will hold the mean of my array.
  var mean = 0;
  
  // I declare a var mode that will hold the mode of my array.
  var mode = 0;
  
  // I delcare a var maxFreq that will be used to determine whether a new mode has been found in my array.
  var maxFreq = 0;
  
  // I declare a var currentFreq that will compare currentFreq of a number in the array vs. whatever the max frequency is.
  var currentFreq = 0;
  
  // Note: From lines 24 - 27, I take care of finding the mean.
  // I declare a for loop that passes over each number in my sorted array.
  for (var i = 0; i < sortedArr.length; i++) {
    // On each pass, I add the current number to sum.
    sum += sortedArr[i];
  }
  // I then find the mean by dividing sum by the length of the sortedArray. 
  mean = sum / sortedArr.length;
  
  // Note: from lines 32 - 38, I take care of finding the mode.
  // I declare a for loop that passes over each number in my sorted array.
  for (var j = 0; j < sortedArr.length; j++) {
    // If the current number and the adjacent number in the array are equal
    if (sortedArr[j] === sortedArr[j + 1]) {
      // I update currentFreq by 1.
      currentFreq++;
    // Else, I reset currentFreq back to 0.
    } else {
      currentFreq = 0;
    }
    
    // If currentFreq is greater than maxFreq
    if (currentFreq > maxFreq) {
      /* The current number being examined is the most frequent number in my array and therefore I assign
      the current number to var mode. */
      mode = arr[j];
      // I then adjust maxFreq to be equal to currentFreq.
      maxFreq = currentFreq;
    }
  }
  
  // From lines 54 - 59 I compare mean to mode and return 1 or 0 accordingly.
  if (mode === mean) {
    return 1;
  } else {
    return 0;
  }	
}
