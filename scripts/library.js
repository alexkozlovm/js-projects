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

    // Header row
    const headRow = document.createElement("tr");

    const titleHead =  document.createElement("th");
    titleHead.textContent = "Title"

    const authorHead = document.createElement("th");
    authorHead.textContent = "Author"

    const readHead = document.createElement("th");
    readHead.textContent = "Read?"

    const toggleHead = document.createElement("th");
    toggleHead.textContent = "Toggle Read";
    
    const removeHead = document.createElement("th");
    removeHead.textContent = "Remove Book";

    headRow.appendChild(titleHead);
    headRow.appendChild(authorHead);
    headRow.appendChild(readHead);
    headRow.appendChild(toggleHead);
    headRow.appendChild(removeHead);
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

        const toggleCell = document.createElement("td");

        const readToggle = document.createElement("button");
        readToggle.classList.add("table-button");
        readToggle.innerHTML = book.read ? "Mark Unread" : "Mark Read";
        
        const removeCell = document.createElement("td");

        const removeButton = document.createElement("button");
        removeButton.classList.add("table-button");
        removeButton.innerHTML = "Remove";

        readToggle.addEventListener("click", () => {
            const index = myLibrary.findIndex((b) => b.id === book.id);
            if (index !== -1) {
                myLibrary[index].read = !myLibrary[index].read;
                readCell.textContent = myLibrary[index].read;
                readToggle.innerHTML = myLibrary[index].read ? "Mark Unread" : "Mark Read";
            }
        });
        
        removeButton.addEventListener("click", () => {
            const index = myLibrary.findIndex((b) => b.id === book.id);
            if (index !== -1) {
                myLibrary.splice(index, 1);
                renderLibrary();
            }
        });


        toggleCell.appendChild(readToggle);
        removeCell.appendChild(removeButton);
        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(readCell);
        row.appendChild(toggleCell);
        row.appendChild(removeCell);
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

// addBookToLibrary("test", "me", true);
renderLibrary();