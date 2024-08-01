//Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const regex = /\b[A-Z]\w*/g;
const str = "Alice went to the Park. Bob and Charlie are friends.";
const matches = str.match(regex);
console.log(matches);

//Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const regex1 = /\d+/g;
const str1 = "There are 5 apples, 7 oranges, and 12 bananas. I owe you $150.";
const matches1 = str1.match(regex1);
console.log(matches1);
