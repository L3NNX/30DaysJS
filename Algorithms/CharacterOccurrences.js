function countCharacterOccurrences(str) {
    const charCount = {};

    for (const char of str) {
        // Check if the character is already a key in the object
        if (charCount[char]) {
            charCount[char] += 1; // Increment the count
        } else {
            charCount[char] = 1; // Initialize the count
        }
    }

    console.log("Character occurrences:", charCount);
    return charCount; // Optional: return the character count object
}

const inputString = "hello world";
countCharacterOccurrences(inputString);
