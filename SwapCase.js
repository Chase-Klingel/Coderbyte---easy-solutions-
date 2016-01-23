function SwapCase(str) {
  // I declare a var answer and initialize it to an emptry string. 
  var answer = "";
  
  // I declare a for loop that will pass over each character in the string...
  for (var i = 0; i < str.length; i++) {
      // if current character is uppercase
      if (str[i] === str[i].toUpperCase()) {
      	// I call the .toLowerCase() method on the current character and add it to var answer.
        answer += str[i].toLowerCase();
      // Otherwise, if current character is lowercase
      } else if (str[i] === str[i].toLowerCase()) {
      	// I call the .toUpperCase() method on the current character and add it to var answer.
        answer += str[i].toUpperCase();
      }
    }
    // Finally, I return the answer. 
    return answer;
}
