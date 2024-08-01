//Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log captures

const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const str = "Call me at (123) 456-7890!";
const matches = str.match(regex);
console.log(matches);


//Write a regular expression to capture the username and domain from an email address. Log the captures.
const regex1 = /([^@]+)@([a-zA-Z0-9.-]+)/;
const str1 = "Contact me at username@example.com for more information.";
const matches1 = str1.match(regex1);
console.log(matches1);

// Explanation:

//     * The regular expression /([^@]+)@([a-zA-Z0-9.-]+)/ captures the username and domain from an email address.
//        > ([^@]+) captures the username:
//           # [^@] is a negated character class that matches any character except for the @ symbol.
//           #  The + quantifier means "one or more" occurrences of the preceding element, ensuring that the username has at least one character.
//        > @ matches the @ symbol literally, which separates the username from the domain.
//        > ([a-zA-Z0-9.-]+) captures the domain:
//           # This matches one or more characters that can be letters (both uppercase and lowercase), digits, dots (.), or hyphens (-).
