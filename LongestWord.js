function LongestWord(sen) { 
    // I declare a largestWord var and initialize it to an emptry string. 
    // I will use this var to return the largestWord.  
    var largestWord = "";
    
    // I declare a longestLength var and initialize it to 0. 
    // I will use this var to keep track of which word is currently the longest in length.
    var longestLength = 0;
    
    // I use a regex expression to replace any character in sen that isn't a-z, A-Z, 0-9, or a space.
    var sen = sen.replace(/[^a-zA-Z0-9\s]/g, "");
    
    // Now, I split the sen wherever there is a space so that I can isolate each word and analyze its length. 
    sen = sen.split(" ");
    
    // I declare a for loop that will iterate over each individual word.
    for (var i = 0; i < sen.length; i++) {
      // if the current word is greater than longestLength
      if (sen[i].length > longestLength) {
        // then assign the current word's length to longestLength.
        longestLength = sen[i].length;
        // then assign the current word to largestWord.
        largestWord = sen[i];
      }
    }
    // Finally, I return the largest word found. 
    return largestWord;
}
