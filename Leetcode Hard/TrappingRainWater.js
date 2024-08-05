// Solve the "Trapping Rain Water" problem on LeetCode.
// • Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much
//   water it can trap after raining.
// • Log the amount of trapped water for a few test cases.


function trap(height) {
    if (height.length === 0) return 0;

    const n = height.length;
    let left = 0;
    let right = n - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
}

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
console.log(trap([1, 0, 2])); // Output: 1
console.log(trap([3, 1, 2, 4, 0])); // Output: 6
console.log(trap([])); // Output: 0
