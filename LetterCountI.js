function LetterCountI(str) { 
  // I declare a var words that splits str into an array of individual strings. 
	var words = str.split(" ");
	
	// I declare a var largestDif that will keep track of 
  var largestDif = 0;
  
  // I declare a var result that will contain the word with the most repeating letters.
  var result;
  
  // I declare a for loop that passes over each individual word in my array of strings...
  for (var i = 0; i < words.length; i++) {
      // I declare a var currentWord that is initialized to the current word being passed over.
      var currentWord = words[i];
      
      // I declare a var currentWordLength that is initialized to the length of the current word being passed over.
      var currentWordLength = words[i].length;
      
      // I declare a var currentWordSorted that splits the currentWord at each character into an array and sorts it alphabetically.
      var currentWordSorted = currentWord.split("").sort();
      
      // I declare a for loop that passes over each character in currentWordSorted array...
      for (var j = 0; j < currentWordSorted.length; j++) {
        // If the current character and the adjacent character are equal in currentWordSorted array
        if (currentWordSorted[j] === currentWordSorted[j + 1]) {
          /* I call the splice method on currentWordSorted to mutate the array by taking out the current character.
          This will help me find the currentDif on line 32, which I will use to compare against largestDif to determine 
          whether or not the currentWord should be assigned to result. /* 
          currentWordSorted.splice(j, 1);
        }
      }
      /* I take the original currentWordLength and subtract it from currentWordSorted.length 
      (recall that currentWordSorted.length is the currentWord.length - all repeated letters), which essentially gives me the number of repeated letters in currentWord. */
      var currentDif = currentWordLength - currentWordSorted.length;
      
      // I check if currentDif is greater than largestDif.
      if (currentDif > largestDif) {
        // If it is, largestDif is now equal to currentDif.
        largestDif = currentDif;
        // I assign currentWord to result because it had the most repeated letters thus far.
        result = currentWord;
      }
    }
    // if largestDif was ever changed, I know that there was a word with repeated letters and thus I return the result.
  	if (largestDif > 0) {
      return result;
    // Else, no repetition was found in any word and I return -1.
    } else {
      return -1;
    }
}
