function ThirdGreatest(strArr) { 
  // First, I sort the strArr from largest to smallest. 
  strArr = strArr.sort(function(a, b) { return b.length - a.length; });
  // Then, I simply return the word contained in index 2 because this is now the third largest word in strArr.
  return strArr[2];
}
