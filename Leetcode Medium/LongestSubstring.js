// Function to find the length of the longest substring without repeating characters
function lengthOfLongestSubstring(s) {
    let charIndexMap = new Map(); // To store the last index of each character
    let maxLength = 0; // To store the maximum length found
    let start = 0; // Left pointer for the sliding window

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If the character is already in the map and its index is within the current window
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1; // Move the start to the right of the last occurrence
        }

        charIndexMap.set(char, i); // Update the last index of the character
        maxLength = Math.max(maxLength, i - start + 1); // Update the maximum length
    }

    return maxLength; // Return the maximum length found
}

// Helper function to log the length of the longest substring
function testLongestSubstring(s) {
    const length = lengthOfLongestSubstring(s);
    console.log(`Input: "${s}" -> Length of Longest Substring Without Repeating Characters: ${length}`);
}

// Test Cases
testLongestSubstring("abcabcbb"); // Output: 3 (abc)
testLongestSubstring("bbbbb"); // Output: 1 (b)
testLongestSubstring("pwwkew"); // Output: 3 (wke)
testLongestSubstring(""); // Output: 0 (empty string)
testLongestSubstring("a"); // Output: 1 (a)
testLongestSubstring("dvdf"); // Output: 3 (vdf)
testLongestSubstring("anviaj"); // Output: 5 (nvia)
