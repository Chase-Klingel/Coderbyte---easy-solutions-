function TimeConvert(num) { 
  // I use Math.floor to ensure that the hour portion of the answer is rounded down.
	return Math.floor(num / 60) + ":" + num % 60;
}
