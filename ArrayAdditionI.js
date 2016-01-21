// This algorithm was the most difficult for me to understand. I learned this answer from: http://leaena.com/2013/08/solver-of-problems/
function ArrayAdditionI(arr) { 
  	var arr = arr.sort(function(a, b) {
      return a - b;
    });
	var maxNum = arr.pop(); 
  	var sum = 0;
  	for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
          sum += arr[j];
          if (sum === maxNum) {
            return "true";
          }
        }
      }
      
      for (var k = 0; k < arr.length; k++) {
        if (arr[i] !== arr[k]) {
          sum -= arr[k];
          if (sum === maxNum) {
            return "true";
          }
        }
      }
      sum = 0;
    }
  	return "false";
}
