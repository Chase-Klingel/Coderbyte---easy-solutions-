function SimpleSymbols(str) {
  // I declare a var str and split the str parameter into an array of individual characters.
  var str = str.split("");

  // I declare a var alpha and initialize it to a regex expression that contains all letters from a-z
  // Note: the "/i" says ignore capitalization. 
  var alpha = /[a-z]/i;
  
  // I declare a for loop that will pass over each individual character in var str... 
 for (var i = 0; i < str.length; i++) {
    // I test whether the current character is contained in my regex expression.
    if (alpha.test(str[i])) {
      // If it is, I look to see if the character before and after the current character is equal to "+"
      if (str[i - 1] === "+" && str[i + 1] === "+") {
        // If it is, I return the string "true".
        return "true";
      } else {
        // Else, I return the string "false".
        return "false";
      }
    }
  }
}
