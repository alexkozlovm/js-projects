const myLibrary = [];

function Book(title, author, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary(title, author, read) {
    myLibrary.push(new Book(title, author, read));
    console.log("Book added to library:", title);
}

// Create rows and cells for the table and display them

function renderLibrary() {
    const tableBody = document.querySelector("#table-body");
    tableBody.innerHTML = "";


    const headRow = document.createElement("tr");

    const titleHead =  document.createElement("th");
    titleHead.textContent = "Title"

    const authorHead = document.createElement("th");
    authorHead.textContent = "Author"

    const readHead = document.createElement("th");
    readHead.textContent = "Read?"

    headRow.appendChild(titleHead);
    headRow.appendChild(authorHead);
    headRow.appendChild(readHead);
    tableBody.appendChild(headRow);


    // Loop through the library and create a row for each book
    myLibrary.forEach((book) => {
        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;

        const authorCell = document.createElement("td");
        authorCell.textContent = book.author;
        
        const readCell = document.createElement("td");
        readCell.textContent = book.read;

        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(readCell);
        tableBody.appendChild(row);
    });
}

// Add Book Button + Dialog Form 

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const submitButton = document.querySelector("#submitButton");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); 

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const read = document.querySelector("#readTrue").checked; 

  addBookToLibrary(title, author, read);
  renderLibrary();
  dialog.close();
});


// Example thing
/* 
addBookToLibrary("test", "me", true);
renderLibrary();
*/