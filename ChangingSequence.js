function ChangingSequence(arr) { 
  /*I declare a var diff that subtracts the number at index 1 from the number at index 0.
    Based on whether it is negative or positive, I will know if the array starts off increasing or decreasing. 
  */
  var diff = arr[1] - arr[0];
  
  // I declare a var sign that will keep track of whether the array starts out increasing or decreasing.
  var sign;
  
  // I declare a var sign2 that will keep track of whether or not the array changes from increasing to decreasing at any point in the array. 
  var sign2;
  
  // First, I need to assign var sign either "neg" or "pos" based on  the sum of arr[1] - arr[0]. 
  // If diff is less than 0 
  if (diff < 0) {
    // Assign "neg" to var sign.
    sign = "neg";
  // If diff is greater than 0
  } else if (diff > 0) {
    // Assign "pos" to var sign.
    sign = "pos";
  }
  
 // I declare a for loop that will pass over each number in arr...
 for (var i = 0; i < arr.length; i++) {
    // Now, diff is calculated by subtracting the adjacent number to the current number - current number.
    diff = arr[i + 1] - arr[i];
    // If diff is less than 0
    if (diff < 0) {
      // Assign "neg" to sign2
      sign2 = "neg";
    // else if, diff is greater than 0
    } else if (diff > 0) {
      // Assign "pos" to sign2.
      sign2 = "pos";
    }
    // If sign and sign2 are not equal, it is clear that the pattern has changed from increasing to decreasing (vice versa).
    if (sign !== sign2) {
      // I then return the index at which this occured.
      return i;
    }
 }
 // If the pattern never changes, it is clear that the array either increased or decreased throughout and I return -1.
 return -1;  
}
