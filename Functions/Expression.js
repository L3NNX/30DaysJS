var prompt = require('prompt-sync')();

const max = function (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

console.log(max(4, 7));
console.log(max(9, 2));


const concatenate=function (str1, str2) {
    return str1 + str2;
}

const str1 =prompt("Enter the first string:");
const str2 =prompt("Enter the second string:");

console.log(concatenate(str1, str2));