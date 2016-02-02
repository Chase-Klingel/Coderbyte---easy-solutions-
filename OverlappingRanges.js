function OverlappingRanges(arr) {
   // I declare a var firstRange that will hold the range found from arr[1] - arr[0].
   var firstRange = [];
   // I declare a var secondRange that will hold the range found from arr[3] - arr[2].
   var secondRange = [];
   // I declare a var count that will give me the number of times the two ranges overlap.
   // I will compare count to the number at indice arr[4].
   var count = 0;
   
   // I declare a for loop that is initialized to the number at arr[0]
   // the loop terminates when it is equal to the number at arr[1]
   for (var i = arr[0]; i <= arr[1]; i++) {
       // I push i (starts at the number found at arr[0] and increases until i reaches the number found at arr[1]) to the firstRange on each pass. 
       firstRange.push(i);
   }
   
   // I declare a for loop that is initialized to the number at arr[2].
   // the loop terminates when it is equal to the number at arr[3].
   for (var j = arr[2]; j <= arr[3]; j++) {
      // I push j (starts at the number found at arr[2] and increases until j reaches the number found at arr[3]) to the secondRange on each pass. 
      secondRange.push(j);
   }
   
   // Here, I declare a nested for loop that will keep track of times that the firstRange and secondRange overlap.
   // If they overlap, I increase count by 1.
   for (var k = 0; k < firstRange.length; k++) {
       for (var l = 0; l < secondRange.length; l++) {
           if (firstRange[k] === firstRange[l]) {
              count++;
           }
        }
    }
    // Finally, if count is at least equal to the number found at arr[4], I return "true"
    if (count >= arr[4]) {
       return "true";
    // Else, I return "false"
    } else {
       return "false";
    }
}
