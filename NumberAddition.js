function NumberAddition(str) { 
  // I declare a var arr and use a regex expression to create an array of numbers.
  // the asterik ensures that multi-digit numbers are grouped together in one single index of the array.
  var arr = str.match(/[0-9]*/g);
  
  // I declare a var total and initialize it to 0.
  var total = 0;
  
  // I declare a for loop that passes over each number in the array...
  for (var i = 0; i < arr.length; i++) {
    // if current index is anything but ""
    if (arr[i] !== "") {
      // I add current number found to var total.
      total += parseFloat(arr[i]);
    }
  }
  // Finally, I return the total.
  return total;
}
