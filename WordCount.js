function WordCount(str) { 
  // I declare a var numWords that will end up holding the total word count. 
  var numWords = 0;
  
  // I declare a var str and split the str into an array of individual words. 
	var str = str.split(" ");
	
	// I declare a for loop that will pass over each individual word in the str param being passed...
  for (var i = 0; i < str.length; i++) {
      // on each pass, I update numWords by 1.
      numWords++;
  }
  // Finally, I return numWords.
  return numWords;
}
