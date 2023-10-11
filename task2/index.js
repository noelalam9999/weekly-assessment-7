// Create a method each_cons that accepts a list and a number n,
// and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

function each_cons(array, n) {
  //giving one edge case to check n's validity against array length and n being next to nothing
  if (n > array.length || n <=0) {
    return [];
  }
  
  let resultArray = [];
  //looping through array
  for (let i = 0; i < array.length - n ; i++) {
    //creating sub arrays, starting from index i(current) and ending at index i+n(given), then pushing it to resultArray
    resultArray.push(array.slice(i, i + n));
  }

  return resultArray;
}

module.exports = { each_cons };
