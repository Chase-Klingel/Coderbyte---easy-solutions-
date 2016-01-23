function AdditivePersistence(num) {
  // I declare a var numStr and convert num to a string by calling the .toString method on it.
  var numStr = num.toString();
  
  // I declare a var count that will keep track of how many times it takes to get to add the digits in num to reach a single digit.
  var count = 0;
  
  // I take care of the cases where there is just 1 digit and return count, which will be 0.
  if (numStr.length === 1) {
      return count;
  } else {
      // I declare a for loop that will pass over numStr
      // Note: the length of numStr will change on each pass due to the equation that occurs on line 14.
      for (var i = 0; i <= numStr.length; i++) {
      	// Update count on each pass.
      	count++;
      	
      	// 1. I split numStr into an array 
      	// 2. I join numStr with "+" between each number in numStr
      	// 3. I use eval to determine what the new numStr value is 
      	// 4. Lastly, I convert numStr back to a string so that my for loop can test properly.
      	numStr = eval(numStr.split("").join("+")).toString();
      }
  }
  // Finally, I return count.
  return count;
}
