// Create a method each_cons that accepts a list and a number n,
// and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

function each_cons(array, n) {
    if(!array || array.length === 0) return array; //Handling edge cases
    const res=[]

    //Looping over the array till an element will have an array that reaches the last element
    for (let i = 0; i < array.length - n + 1; i++) {
        const temp = []
        //Looping over the next n elements over i to be included in the temporary array
        for (let j = i; j < i+n; j++) {
            const element = array[j];
            temp.push(element)
        }
        res.push(temp)
    }
    return res
}

module.exports = { each_cons };
