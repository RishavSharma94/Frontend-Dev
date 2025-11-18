class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`Book "${this.title}" has been issued.`);
        } else {
            console.log(`Book "${this.title}" is already issued.`);
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`Book "${this.title}" has been returned.`);
        } else {
            console.log(`Book "${this.title}" was not issued.`);
        }
    }

    displayDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}, Issued: ${this.isIssued}`);
    }
}

// Creating book objects
let book1 = new Book("The Alchemist", "Paulo Coelho", "101");
let book2 = new Book("Harry Potter", "J.K. Rowling", "102");
let book3 = new Book("Think and Grow Rich", "Napoleon Hill", "103");

// Array of books
let library = [book1, book2, book3];

// Display all available books
function displayAvailableBooks() {
    console.log("Available Books:");
    library.forEach(book => {
        if (!book.isIssued) {
            book.displayDetails();
        }
    });
}

// Issue a book by ISBN
function issueBookByISBN(ISBN) {
    let book = library.find(b => b.ISBN === ISBN);
    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found with this ISBN.");
    }
}

// Example Usage
displayAvailableBooks();
issueBookByISBN("102");
displayAvailableBooks();
book2.returnBook();
displayAvailableBooks();
