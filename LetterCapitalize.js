function LetterCapitalize(str) { 
  // I declare var str and split the str parameter into an array of individual words
  var str = str.split(" ");
  
  // I declare a var result and initialize it to an empty array.
  // I will use this empty array to eventually store the new string with each first character of a single word capitalized.
	var result = [];
	
	// I declare a for loop that will pass over each word in my array
  for (var i = 0; i < str.length; i++) {
    // There are two essential steps here:
      // 1. I push the first character as a capitalized letter to the previously empty results array
      // 2. I then use concatenation by adding "str[i].substr(1)". This pushes all characters from index 1 through the end of the current word to the results array.
    result.push(str[i].charAt(0).toUpperCase() + str[i].substr(1));
  }
  // Finally, I join the newly formatted array of strings and return its value.
  return result.join(" ");  
}
