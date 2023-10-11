// Create a method each_cons that accepts a list and a number n,
// and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

function each_cons(array, n) {
  let res = [];
  for (let i = 0; i < array.length - n + 1; i++) {
    let subRes = [];
    for (let j = i; j < i + n; j++) {
      const element = array[j];
      subRes.push(element);
    }
    res.push(subRes);
  }
  return res;
}

// console.log(each_cons([1, 2, 3, 4], 2));
// console.log(each_cons([1, 2, 3, 4], 3));

module.exports = { each_cons };
