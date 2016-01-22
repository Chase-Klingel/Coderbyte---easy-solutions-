function DivisionStringified(num1,num2) { 
  // I declare a var result that calculates num1 / num2.
  // I then call the .toString() method so that I can split the result into an array for further manipulation.
	var result = Math.round(num1 / num2).toString();
	
	// I call the split method on the result and assign it to var resultArr.
  var resultArr = result.split("");
  
  // If the result is greater than or equal to 1000, I will need to add commas in the appropriate locations...
  if (result >= 1000) {
      // I initialize my for loop three digits in from the end of the result, decreasing by 3 indices on each pass.
      for (var i = result.length - 3; i > 0; i -= 3) {
        // i is where I will insert the new comma character.
        // 0 ensures that no characters are removed.
        and lastly "," is the character that will be addded.
        resultArr.splice(i, 0, ",");
      }
    }
    // Finally, I call the join method on the resultArr and return its value, which will now be a string. 
  	return resultArr.join("");
}
