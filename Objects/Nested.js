const library = {
    name: "Hogwarts Library",
    books: [
        {
            author: "J.K. Rowling",
            title: "Harry Potter and the Philosopher's Stone",
            year: 1997
        },
        {
            author: "J.K. Rowling",
            title: "Harry Potter and the Chamber of Secrets",
            year: 1998
        },
        {
            author: "J.K. Rowling",
            title: "Harry Potter and the Prisoner of Azkaban",
            year: 1999
        }
    ]
};

console.log(library);
console.log(library.name);
for (let i = 0; i < library.books.length; i++) {
    console.log("Book Title:", library.books[i].title);
}
