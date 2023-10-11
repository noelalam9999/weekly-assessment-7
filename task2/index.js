// Create a method each_cons that accepts a list and a number n,
// and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

function each_cons(array, n) {
      if (n <= 0 || n > array.length) {
            return [];
      }

      const result = [];
      for (let i = 0; i <= array.length - n; i++) {
            const subset = array.slice(i, i + n);
            result.push(subset);
      }

      return result;
}

module.exports = { each_cons };

