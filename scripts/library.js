const myLibrary = [];

function Book(title, author) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    myLibrary.push(new Book(title, author));
}

addBookToLibrary("book", "alex");

function display() {
    document.getElementById("r1c1").innerHTML = "I need the value of "
}

