// Function to find the maximum amount of water
function maxArea(height) {
    let left = 0; // Left pointer
    let right = height.length - 1; // Right pointer
    let maxWater = 0; // Maximum amount of water

    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left); // Calculate the area
        maxWater = Math.max(maxWater, area); // Update the maximum water

        // Move the pointer with the shorter height to potentially find a larger area
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater; // Return the maximum amount of water
}

// Helper function to log the maximum amount of water
function testMaxArea(height) {
    const maxWater = maxArea(height);
    console.log(`Input: ${height} -> Maximum amount of water: ${maxWater}`);
}

// Test Cases
testMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // Output: 49
testMaxArea([1, 1]); // Output: 1
testMaxArea([4, 3, 2, 1, 4]); // Output: 16
testMaxArea([1, 2, 1]); // Output: 2
