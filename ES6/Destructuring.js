//Array Destructuring
const numbers = [10, 20, 30, 40, 50];

const [firstNumber, secondNumber] = numbers;

console.log("First number:", firstNumber);
console.log("Second number:", secondNumber);


//Object Destructuring
const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
};

const { title, author } = book;

console.log("Title:", title);
console.log("Author:", author);
