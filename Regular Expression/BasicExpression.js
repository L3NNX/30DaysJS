//Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const regex = /JavaScript/g;
const str = "I love JavaScript! JavaScript is awesome.";
const matches = str.match(regex);
console.log(matches);


//Write a regular expression to match all digits in a string. Log the matches.
const regex1 = /\d/g;
const str1 = "There are 5 apples and 7 oranges. I have $12.50 in my pocket.";
const matches1 = str1.match(regex);
console.log(matches1);


