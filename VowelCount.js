function VowelCount(str) { 
  // I declare a var vCount that will keep track of how many vowels are found in the str param being passed.
	var vCount = 0;
	
	// I declare a var vList that contains all vowels (cap insensitive) 
  var vList = "aeiouAEIOU";
  
  // I declare a for loop that will pass over each character in the str param being passed...
  for (var i = 0; i < str.length; i++) {
    // If the current character is found in vList
    if (vList.indexOf(str[i]) !== -1) {
      // I update vCount by 1.
      vCount++;
    }
  }
  // Finally, I return the vCount.
  return vCount;    
}
   
