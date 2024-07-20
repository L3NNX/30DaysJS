

// Use for...in to iterate over the properties of the book object
const book = {
    author: "J.K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    year: 1997,
    genre: "Fantasy"
};

for (let property in book) {
    if (book.hasOwnProperty(property)) {
        console.log(property + ": " + book[property]);
    }
}
