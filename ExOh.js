function ExOh(str) { 
  // On the left side of the equation, I replace anything that is not an "x" (cap insensitive) with a space and then find the updated strings length
  // Similarly, on the right side of the equation, I replace anything that is not an "o" (cap insensitive) with a space and then find the updated strings length
  // If the lengths are equal, the string does in fact contain the same amount of x's and o's and therefore true will be returned
	return str.replace(/[^x]/ig, "").length === str.replace(/[^o]/ig, "").length;    
}
