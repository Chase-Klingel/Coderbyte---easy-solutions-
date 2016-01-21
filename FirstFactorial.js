function FirstFactorial(num) { 
   
   // I declare a for loop that is initialized at num - 1 and terminates when i = 2 and I increase i by 1 on each pass.
   for (var i = num - 1; i > 1; i--) {
      // multiply num * i 
      num *= i;
   }
   // return the final num
   return num;
}
