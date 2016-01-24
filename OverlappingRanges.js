function OverlappingRanges(arr) { 
  /* I declare a var count that will be used to determine if range (a to b) and range (b to c) overlap 
    by at least the number contained in the last index of arr (aka arr[4]).
  */
  var count = 0;
  
  // I declare a var firstDiff to determine what the number contained in arr[1] - the number contained in arr[0] is equal to. 
  var firstDiff = arr[1] - arr[0];
  
  /*I declare a var firstRange that will be initialized to the number contained in arr[0]. I will later build upon this array
    to get the total firstRange. 
  */
  var firstRange = [arr[0]];
  
  // I declare a for loop that will be used to build my firstRange array.
  for (var i = 1; i <= firstDiff; i++) {
      // On each pass, I push the number found at arr[0] + i
  	   /* Example arr = [4, 10] --> 
	      First pass: 4 + 1 = 5 --> firstRange = [4, 5];
	      Second pass: 5 + 1 = 6 --> firstRange = [4, 5, 6]
	   */
      firstRange.push(firstRange[0] + i)
   }
  	
   // I repeat a very similar process but now I am creating the secondRange array.
   var secondDiff = arr[3] - arr[2];
   var secondRange = [arr[2]];
   for (var j = 1; j <= secondDiff; j++) {
      secondRange.push(secondRange[0] + i);
   }
  	
   // I declare a nested for loop that checks whether the current index of firstRange is equal to secondRange.
   for (var k = 0; k < firstRange.length; k++) {
      for (var l = 0; l < secondRange.length; l++) {
        // If the current index of firstRange and secondRange are equal
        if (firstRange[k] === secondRange[l]) {
          // I increase count by 1.
          count++;
        }
      }
    }
    
    // Lastly, I check if count is at least equal to the final index in arr.
    if (count >= arr[4]) {
      // If it is, I return "true" because the two ranges overlap at least the number found at arr[4].
      return "true";
    } else {
      // Else, I return "false".
      return "false";
    }
}
