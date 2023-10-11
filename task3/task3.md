# Find the BigO notation of you solution

For Task 2 the time complexity of my solution is O(n^2).Because looping over the array using for loop which complexity is O(n) and inside the loop there is slice()method which complexity is O(n).That's why total time complexity of this program is O(n^2).

# If possible write the pseudocode of a solution that would be more optimized

\*\*For Task 2

Step 1: First check the size of subset n is less than or equal 0 or subset n is greater than total array length.

Step 2: Take a empty array to store the subset of the array.

Step 3: Iterate loop over the array it will iterate till array.length and slice() the array based on n and push it into a new array.

step 4:return the new array
