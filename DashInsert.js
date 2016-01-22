function DashInsert(str) {
  // I declare a var str that converts the str param being passed (that is confusingly a number) into a string 
  // by calling the .toString() method. 
  var str = str.toString();

  // I then split the string into an array. 
  str = str.split("");

  // I declare a var answer that will hold our newly formatted string with dashes in the appropriate locations.
  var answer = [];
  
  // I declare a for loop that passes over each character in the str array...
  for (var i = 0; i < str.length; i++) {
      // if the current character and the adjacent character are odd...
      if (str[i] % 2 === 1 && str[i + 1] % 2 === 1) {
        // I push the current character and a "-" to var answer.
        answer.push(str[i] + "-");
      // else, I push only the current character to var answer.
      } else {
        answer.push(str[i]);
      }
  }
    // Finally, I call the join method on var answer to convert the array to a string and return the value.
    return answer.join("");
}
