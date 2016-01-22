
function SecondGreatLow(arr) {
    // I sort my array from smallest to largest 
    arr = arr.sort(function(a, b) {return a - b;});

    // I declare a for loop that that is initalized at the end of the sorted array...
    for (var i = arr.length - 1; i > 0; i--) {
        // if current val is equal to previous val
        if (arr[i] == arr[i - 1]) {
            // I use the .splice method to remove it.
            arr.splice(i, 1);
        }
    }
    
    // if the array contains more than two items, I return the 2nd item and the second two last item in the array.
    if (arr.length > 2) {
        return arr[1] + " " + arr[arr.length - 2];
    // if the array contains only two items, I return the 2nd item and then the first item in the array.
    } else if (arr.length == 2) {
        return arr[1] + " " + arr[0];
    // if the array is less than 2 items, I return the only item twice.
    } else {
        return arr[0] + " " + arr[0];
    }

}
