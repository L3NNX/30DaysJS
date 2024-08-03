// Solve the "Valid Parentheses" problem on LeetCode.
// • Write a function that takes a string containing just the characters (,), [, }, [' and T, and determines if the input string is valid.
// • A string is valid if open brackets are closed in the correct order.
// • Log the result for a few test cases.

function isValid(s) {
    // Create a stack to store the opening parentheses
    const stack = [];

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If the character is an opening parenthesis, push it onto the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            // If the character is a closing parenthesis
            if (stack.length === 0) {
                // If the stack is empty, it means there is no matching opening parenthesis
                return false;
            }

            // Get the last opening parenthesis from the stack
            const lastOpen = stack.pop();

            // Check if the closing parenthesis matches the last opening parenthesis
            if (
                (char === ')' && lastOpen !== '(') ||
                (char === ']' && lastOpen !== '[') ||
                (char === '}' && lastOpen !== '{')
            ) {
                return false;
            }
        }
    }

    // If the stack is empty, it means all parentheses are balanced
    return stack.length === 0;
}


const test1 = "()";
console.log(`Is "${test1}" valid? ${isValid(test1)}`); // Expected output: true

const test2 = "()[]{}";
console.log(`Is "${test2}" valid? ${isValid(test2)}`); // Expected output: true

const test3 = "(]";
console.log(`Is "${test3}" valid? ${isValid(test3)}`); // Expected output: false

const test4 = "([)]";
console.log(`Is "${test4}" valid? ${isValid(test4)}`); // Expected output: false

const test5 = "{[]}";
console.log(`Is "${test5}" valid? ${isValid(test5)}`); // Expected output: true

// Test Case 6: Empty string (valid)
const test6 = "";
console.log(`Is "${test6}" valid? ${isValid(test6)}`); // Expected output: true
