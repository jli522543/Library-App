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

function removeBook(event) {
  const bookCard = event.target.parentElement;
  const index = Array.from(bookCard.parentElement.children).indexOf(bookCard);
  myLibrary.splice(index, 1);
  event.target.parentElement.remove();
}

function toggleRead(event) {
  const bookCard = event.target.parentElement;
  const index = Array.from(bookCard.parentElement.children).indexOf(bookCard);

  myLibrary[index].hasRead = !myLibrary[index].hasRead;
  event.target.style.backgroundColor = myLibrary[index].hasRead
    ? "green"
    : "red";
  event.target.textContent = myLibrary[index].hasRead ? "Read" : "Not Read";
}

function displayBookCard() {
  const book = myLibrary.at(-1);

  const bookCard = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("h3");
  const bookPages = document.createElement("h3");
  const bookHasRead = document.createElement("button");
  const trashIcon = document.createElement("i");

  bookCard.classList.add("card");
  bookHasRead.classList.add("btn");
  bookHasRead.setAttribute("onclick", "toggleRead(event)");
  trashIcon.classList.add("fa-solid", "fa-trash", "fa-2x", "trash--icon");
  trashIcon.setAttribute("id", "trash-icon");
  trashIcon.setAttribute("onclick", "removeBook(event)");

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  bookHasRead.style.backgroundColor = book.hasRead ? "green" : "red";
  bookHasRead.textContent = book.hasRead ? "Read" : "Not Read";

  bookCard.append(bookTitle, bookAuthor, bookPages, bookHasRead, trashIcon);
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
  addBooktoLibrary(title, author, pages, hasRead);
  displayBookCard();
  addBookForm.reset();
});
