//Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

// Iterative Approach
function countOccurrencesIterative(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

const testArray = [1, 2, 2, 3, 4, 2, 5, 1, 3, 3];
const target = 2;


console.log("Iterative Count:", countOccurrencesIterative(testArray, target)); 