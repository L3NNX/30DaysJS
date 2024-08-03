//Solve the "Reverse Integer" problem on LeetCode.
// • Write a function that takes an integer and returns it with its digits reversed.
// • Handle edge cases like negative numbers and numbers ending in zero.
// • Log the reversed integers for a few test cases.

function reverseInteger(x) {
    // Define the sign of the number
    const sign = Math.sign(x);
    
    // Convert the number to a string, reverse it, and convert back to a number
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;

    // Check for 32-bit integer overflow
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0; // Return 0 if overflow occurs
    }

    return reversed;
}


const test1 = 123;
console.log(`Reversed integer of ${test1}: ${reverseInteger(test1)}`); // Expected output: 321

const test2 = -456;
console.log(`Reversed integer of ${test2}: ${reverseInteger(test2)}`); // Expected output: -654

const test3 = 120;
console.log(`Reversed integer of ${test3}: ${reverseInteger(test3)}`); // Expected output: 21

// Test Case 4: Large integer causing overflow
const test4 = 1534236469; // This will overflow
console.log(`Reversed integer of ${test4}: ${reverseInteger(test4)}`); // Expected output: 0

const test5 = 0;
console.log(`Reversed integer of ${test5}: ${reverseInteger(test5)}`); // Expected output: 0

const test6 = 7;
console.log(`Reversed integer of ${test6}: ${reverseInteger(test6)}`); // Expected output: 7
