function MultiplicativePersistence(num) { 
  // I declare a var count that will keep track of how many times I musts multiply the digits in num until a single digit is reached. 
  var count = 0;
  
  // I declare a var n that converts num to a string.
  var n = num.toString();
  
  // I declare a while loop that continues until the n is one digit.
  while (n.length > 1) {
    // On each pass, I update count by 1.
    count++;
    // 1. I split n into an array.
    // 2. I call the .join() method to add a multiplication sign between each digit and then I get the product.
    // 3. Then, I convert the evaluated product back to a string.
    n = eval(n.split('').join('*')).toString();
  }
  // Finally, I return count.
  return count;  
}
