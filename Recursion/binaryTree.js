// /Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Base case: target not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Base case: target found
    }

    if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right); // Recursive case: search right half
    } else {
        return binarySearch(arr, target, left, mid - 1); // Recursive case: search left half
    }
}

// Test cases
const testCases = [
    { arr: [1, 3, 5, 7, 9], target: 5, expectedIndex: 2 },
    { arr: [2, 4, 6, 8, 10], target: 8, expectedIndex: 3 },
    { arr: [0, 2, 4, 6, 8, 10], target: 6, expectedIndex: 3 },
    { arr: [1, 2, 3, 4, 5], target: 1, expectedIndex: 0 },
    { arr: [1, 2, 3, 4, 5], target: 5, expectedIndex: 4 },
    { arr: [1, 2, 3, 4, 5], target: 3, expectedIndex: 2 },
    { arr: [1, 2, 3, 4, 5], target: 0, expectedIndex: -1 },
    { arr: [1, 2, 3, 4, 5], target: 6, expectedIndex: -1 }
];

// Logging results
testCases.forEach((testCase, index) => {
    const { arr, target, expectedIndex } = testCase;
    const result = binarySearch(arr, target);
    console.log(`Test case ${index + 1}: Array = ${arr}, Target = ${target}, Expected index = ${expectedIndex}, Actual index = ${result}`);
});
