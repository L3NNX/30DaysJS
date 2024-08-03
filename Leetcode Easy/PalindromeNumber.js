//Solve the "Palindrome Number" problem on LeetCode.
// • Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// • Log the result for a few test cases, including edge cases like negative numbers.

function isPalindrome(x) {
    // Negative numbers and numbers ending with 0 (except 0 itself) are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    let reversed = 0;
    let original = x;

    // Reverse the integer
    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // Check if the original number is equal to the reversed number
    return original === reversed;
}



const test1 = 121;
console.log(`Is ${test1} a palindrome? ${isPalindrome(test1)}`); // Expected output: true

const test2 = -121;
console.log(`Is ${test2} a palindrome? ${isPalindrome(test2)}`); // Expected output: false

const test3 = 123;
console.log(`Is ${test3} a palindrome? ${isPalindrome(test3)}`); // Expected output: false

const test4 = 10;
console.log(`Is ${test4} a palindrome? ${isPalindrome(test4)}`); // Expected output: false

const test5 = 7;
console.log(`Is ${test5} a palindrome? ${isPalindrome(test5)}`); // Expected output: true

const test6 = 1234321;
console.log(`Is ${test6} a palindrome? ${isPalindrome(test6)}`); // Expected output: true

const test7 = 0;
console.log(`Is ${test7} a palindrome? ${isPalindrome(test7)}`); // Expected output: true
