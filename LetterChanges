function LetterChanges(str) { 
  // I declare var alpha and initialize it to a string that contains the alphabet.
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  
  // I declare var newAlpha and initialize it to a string that contains the alphabet with one letter ahead of the normal sequence and capitalize vowels.
  var newAlpha = "bcdEfghIjklmnOpqrstUvwxyzA";
  
  // I declare var answer and initialize it to an empty string.
  var answer = "";
  
  // I declare a for loop that will pass over each character in the string
  for (var i = 0; i < str.length; i++) {
    // if the current character matches a character in the var alpha
    if (alpha.indexOf(str[i]) !== -1) {
      // I add the character in newAlpha that matches the index where the current character is found in alpha to my answer var.
      answer += newAlpha.charAt(alpha.indexOf(str[i]));
    } else {
      // if the current character does not match any character in the alpha var, I simply add the current character to the answer var.
      answer += str[i];
    }
  }
  // Finally, I return the answer. 
  return answer;    
}
