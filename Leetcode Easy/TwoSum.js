// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// Log the indices for a few test cases.

function twoSum(nums, target) {
    // Create a map to store the indices of the numbers
    const numToIndex = new Map();
    
    // Iterate through the array of numbers
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const complement = target - num;
        
        // Check if the complement exists in the map
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), index];
        }
        
        // Store the index of the current number
        numToIndex.set(num, index);
    }
    
    // Return an empty array if no solution is found
    return [];
}

// Test Case 1
const nums1 = [2, 7, 11, 15];
const target1 = 9;
const result1 = twoSum(nums1, target1);
console.log(`Indices for ${nums1} with target ${target1}: ${result1}`);

const nums2 = [3, 2, 4];
const target2 = 6;
const result2 = twoSum(nums2, target2);
console.log(`Indices for ${nums2} with target ${target2}: ${result2}`);

const nums3 = [3, 3];
const target3 = 6;
const result3 = twoSum(nums3, target3);
console.log(`Indices for ${nums3} with target ${target3}: ${result3}`);

const nums4 = [1, 5, 3, 4];
const target4 = 8;
const result4 = twoSum(nums4, target4);
console.log(`Indices for ${nums4} with target ${target4}: ${result4}`);
