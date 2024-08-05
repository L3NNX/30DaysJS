// Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// • Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// • Log the median for a few test cases, including edge cases.

function findMedianSortedArrays(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const half = Math.floor(totalLength / 2);
    let leftMax, rightMin;

    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;

    let low = 0, high = m;

    while (low <= high) {
        const partition1 = Math.floor((low + high) / 2);
        const partition2 = half - partition1;

        const left1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        const right1 = partition1 === m ? Infinity : nums1[partition1];
        const left2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        const right2 = partition2 === n ? Infinity : nums2[partition2];

        if (left1 <= right2 && left2 <= right1) {
            // We found the correct partitions
            if (totalLength % 2 === 0) {
                leftMax = Math.max(left1, left2);
                rightMin = Math.min(right1, right2);
                return (leftMax + rightMin) / 2;
            } else {
                return Math.max(left1, left2);
            }
        } else if (left1 > right2) {
            high = partition1 - 1; // Move towards the left in nums1
        } else {
            low = partition1 + 1; // Move towards the right in nums1
        }
    }

    throw new Error("Input arrays are not sorted.");
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([], [1])); // Output: 1
console.log(findMedianSortedArrays([2], [])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3])); // Output: 2
