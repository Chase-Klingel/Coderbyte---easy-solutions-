function SimpleAdding(num) { 
  // I declare var sum that will end up equalling 1 + ... num.
  var sum = 0;
  
  // I declare a for loop that is initialized at 1 and terminates when i <= num and I increase i by 1 on each pass.
  for (var i = 1; i <= num; i++) {
      // on each pass, I add i to sum.
      sum += i;
    }
    // Finally, I return the sum.
  	return sum;
}
