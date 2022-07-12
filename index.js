function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      hasRead ? "read" : "not read yet"
    }`;
  };
}

function addBooktoLibrary(title, author, pages, hasRead) {
  myLibrary.push(new Book(title, author, pages, hasRead));
}

function displayBookCard() {
  const book = myLibrary.at(-1);

  const bookCard = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("h3");
  const bookPages = document.createElement("h3");
  const bookHasRead = document.createElement("h3");

  bookCard.classList.add("card");

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  bookHasRead.textContent = book.hasRead ? "Read" : "Not Read";

  bookCard.append(bookTitle, bookAuthor, bookPages, bookHasRead);
  bookContainer.append(bookCard);
}

let myLibrary = [];
const addBookButton = document.getElementById("add-book-button");
const addBookForm = document.getElementById("add-book-form");
const submitButton = document.getElementById("submit-button");
const bookContainer = document.getElementById("book-container");

//Unhides addBookForm when addBookButton button is clicked
addBookButton.addEventListener("click", (event) => {
  addBookForm.style.display =
    addBookForm.style.display === "none" ? "block" : "none";
});

//Adds book to myLibrary when submit button on form is clicked
submitButton.addEventListener("click", (event) => {
  const title = addBookForm.querySelector("#title").value;
  const author = addBookForm.querySelector("#author").value;
  const pages = addBookForm.querySelector("#pages").value;
  const hasRead = addBookForm.querySelector("#hasRead").checked;
  //   addBooktoLibrary(title, author, pages, hasRead);
  addBooktoLibrary("The Hobbit", "Tolkien", 500, true);
  displayBookCard();
  addBookForm.reset();
});
