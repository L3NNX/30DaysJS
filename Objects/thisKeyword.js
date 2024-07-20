const book = {
    author: "J.K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    year: 1997,
    
    getBookInfo: function() {
        return this.title + ' by ' + this.author + ' on ' + this.year;
    },

};


console.log(book.getBookInfo());

