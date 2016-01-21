function FirstReverse(str) {
  // step 1: I split the string into an array so that I can call the reverse method. 
  // step 2: I call the reverse method in order to reverse each character in the array.
  // step 3: I call the join method to reassemble the reversed characters into a string.
	return str.split("").reverse().join("");
}
