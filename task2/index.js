// Create a method each_cons that accepts a list and a number n,
// and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

function each_cons(array, n) {
  /// edge case handle
  /// if my number of subset n is less than or equal to zero or my array length less than n then it will return empty array.
  if (n <= 0 || n > array.length) {
    return [];
  }

  ///taking a empty array to store the subset
  const subset = [];

  ///looping through the array and pushing the subset in the subset array

  for (let i = 0; i <= array.length - n; i++) {
    subset.push(array.slice(i, i + n));
  }

  return subset;
}

module.exports = { each_cons };
