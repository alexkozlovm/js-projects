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

for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
}

const element = document.getElementById('r1c1');
const htmlContent = element.innerHTML;
console.log(htmlContent);