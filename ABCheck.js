function ABCheck(str) { 
  // I use a simple regex expression that tests whether the str parameter contains any instances where a and b (ignoring caps) are seperated by 3 places.
	return /a...b/i.test(str) || /b...a/i.test(str);
}
