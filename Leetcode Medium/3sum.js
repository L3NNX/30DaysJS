// Function to find all unique triplets that sum to zero
function threeSum(nums) {
    const triplets = [];
    nums.sort((a, b) => a - b); // Sort the array

    for (let i = 0; i < nums.length; i++) {
        // Skip the same element to avoid duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1; // Left pointer
        let right = nums.length - 1; // Right pointer

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]); // Found a triplet
                // Skip duplicates for the left pointer
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicates for the right pointer
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++; // We need a larger sum
            } else {
                right--; // We need a smaller sum
            }
        }
    }

    return triplets; // Return the list of triplets
}

// Helper function to log the triplets
function testThreeSum(nums) {
    const triplets = threeSum(nums);
    console.log(`Input: ${nums} -> Triplets: ${JSON.stringify(triplets)}`);
}

// Test Cases
testThreeSum([-1, 0, 1, 2, -1, -4]); // Output: [[-1, -1, 2], [-1, 0, 1]]
testThreeSum([1, 2, 3]); // Output: []
testThreeSum([0, 0, 0]); // Output: [[0, 0, 0]]
testThreeSum([1]); // Output: []
testThreeSum([]); // Output: []
testThreeSum([-2, 0, 1, 1, 2]); // Output: [[-2, 0, 2], [-2, 1, 1]]
testThreeSum([-1, 0, 1, 2, -1, -4, -1, -1]); // Output: [[-1, -1, 2], [-1, 0, 1]]
