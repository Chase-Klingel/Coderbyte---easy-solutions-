function ArithGeo(arr) { 
  // I declare a var arrDif and arrQuo that will contain the differences and quotients of each item in the arr param being passed.
	var arrDif = [];
  var arrQuo = [];
  
  // I declare an ariFlag and a geoFlag that are initialized to true. 
  // I will use these vars to mark whether the arr param being passed follows and arith or geo pattern. 
  var ariFlag = true;
  var geoFlag = true;
  
  // I declare a for loop that will pass over each item in the arr param being passed..
  for (var i = 0; i < arr.length - 1; i++) {
    // I push the next val - current val to arrDif
    arrDif.push(arr[i + 1] - arr[i]);
    // I push the next val / current val to arrQuo 
    arrQuo.push(arr[i + 1] / arr[i]);
  }
  
  // I declare a for loop to pass over my now populated arrDif array and arrQuo array.
  for (var j = 0; j < arrDif.length - 1; j++) {
    // If the current val in arrDif does not equal the next val in arrDif...
    if (arrDif[j] !== arrDif[j + 1]) {
      // I change the boolean value of ariFlag to false b/c it is no longer an arithmetic pattern.
      ariFlag = false;
    }
    // If the current val in arrQuo does not equal the next val in arrQuo...
    if (arrQuo[j] !== arrQuo[j + 1]) {
      // I change the boolean value of geoFlag to false b/c it is no longer a geometric pattern.
      geoFlag = false;
    }
  }
  
  // If ariFlag is still true, then return "Arithmetic".
  if (ariFlag) {
    return "Arithmetic";
  // If geoFlag is still true, then return "Geometric".
  } else if (geoFlag) {
    return "Geometric";
  // If arithmetic pattern and geometric pattern were not found, return -1.
  } else {
    return -1;
  }
}
