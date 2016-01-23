function PowersofTwo(num) { 
  // I declare a for loop that terminates when i = num.
	for (var i = 0; i < num; i++) {
	    // If 2^i === num
      if (Math.pow(2, i) === num) {
        // I return the string "true".
        return "true";
      }
    }
    // If the for loop terminates without returning "true", num is not a power of two and I return "false." 
  	return "false";
}
