function longestSubstringWithoutRepeating(s) {
    const charIndexMap = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If the character is already in the map and its index is greater than or equal to 'left'
        if (charIndexMap[char] !== undefined && charIndexMap[char] >= left) {
            left = charIndexMap[char] + 1; // Move the left pointer to the right of the last occurrence
        }

        charIndexMap[char] = right; // Update the index of the character
        maxLength = Math.max(maxLength, right - left + 1); // Calculate the max length
    }

    console.log("Length of the longest substring without repeating characters:", maxLength);
    return maxLength; // Optional: return the length of the longest substring
}

const inputStringForLongestSubstring = "abcabcbb";
longestSubstringWithoutRepeating(inputStringForLongestSubstring);
