function Palindrome(str) { 
  // First, I convert the string param being passed to all caps.
	var str = str.toUpperCase();
	
	// This ensures there are no spaces which will allow me to assess strings that are multiple words.
  str = str.replace(/[\s]/g, "");
  
  // Then I simply return "true" if the reversed version of the string is equal to the original string.
  if (str.split("").reverse().join("") === str) {
    return "true";
  // Else, I return "false".
  } else {
    return "false";
  }
}
