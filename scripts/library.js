// Select the table body where rows will be added
const tableBody = document.querySelector("#table-body");

const myLibrary = [];

function Book(title, author) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    myLibrary.push(new Book(title, author));
    console.log("Book added to library:", title, author);
}

function renderLibrary() {
    tableBody.innerHTML = "";

    myLibrary.forEach((book) => {
        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;

        const authorCell = document.createElement("td");
        authorCell.textContent = book.author;

        row.appendChild(titleCell);
        row.appendChild(authorCell);
        tableBody.appendChild(row);
    });
}

addBookToLibrary("test", "me");
renderLibrary();