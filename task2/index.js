// Create a method each_cons that accepts a list and a number n,
// and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

function each_cons(array, n) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    let subset = array.slice(i, i + n);
    if (subset.length === n) {
      res.push(subset);
    }
  }
  return res;
}

module.exports = { each_cons };
