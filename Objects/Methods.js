const book = {
    author: "J.K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    year: 1997,
    
    getBookInfo: function() {
        return this.title + ' by ' + this.author;
    },

    updateYear: function(newYear) {
        this.year = newYear;
    }
};

console.log(book);
book.updateYear(2000);
console.log(book.getBookInfo());

