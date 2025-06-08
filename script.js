const dialog = document.querySelector('dialog');

//Array of Objects to store books data
const Library = [];


const addBook = document.querySelector('#addBook');
const finishedBooks = document.querySelectorAll('.finished-cardArea > div')
const finishedArea = document.querySelector('.finished-cardArea');
const unfinishedBooks = document.querySelectorAll('.toRead-cardArea > div')
const unfinishedArea = document.querySelector('.toRead-cardArea');

const closeButton = document.querySelector("#close");
const form = document.querySelector('#formDialog');


//Inputs
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

Books.prototype.toggle = function () {
    this.read = !this.read;
}

function addBooksToLibrary(title, author, pages, read) {
    let id = crypto.randomUUID();
    const newBook = new Books(id, title, author, pages, read);

    Library.push(newBook);
    createCard(id, title, author, pages, read);
}

//Function to Create new Cards
function createCard(id, title, author, pages, read) {

    const div = document.createElement('div');
    div.classList.add("card");
    div.setAttribute('data-id', id);


    //card delete button
    const delButton = document.createElement('button');
    delButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';

    delButton.classList.add('deleteButton');
    div.appendChild(delButton);

    delButton.addEventListener('click', () => {
        div.remove();
        for (let i = 0; i < Library.length; i++) {
            if (Library[i].id == div.dataset.id) {
                Library.splice(i, 1);
                break;
            }
        }
    })

    //Book Finished Button
    const completed = document.createElement('button');
    completed.innerText = 'Completed 🎉';
    completed.classList.add('completedButton');
    if (read === false) {
        div.appendChild(completed);
    }

    completed.addEventListener('click', () => {
        const book = Library.find(b => b.id === div.dataset.id);
        if (book) {
            book.toggle();
            div.remove();
            createCard(book.id, book.title, book.author, book.pages, book.read);
        }
    })


    const cardInfo = `
        <h2>${title}</h2>
        <p>Author: ${author}</p>
        <p>Pages: ${pages}</p>
        <p>Read: ${read ? "✅" : "❌"}</p>
    `;


    div.insertAdjacentHTML('afterbegin', cardInfo);

    if (read) {
        finishedArea.appendChild(div);
    }
    else {
        unfinishedArea.appendChild(div);
    }

}


addBook.addEventListener('click', () => {
    dialog.showModal();
})



closeButton.addEventListener('click', () => {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
    dialog.close();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();


    addBooksToLibrary(title.value, author.value, pages.value, read.checked);

    dialog.close();
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;

})

function Books(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}


//Sample Books
addBooksToLibrary('The 48 Laws of Power', 'Robert Greene', 480, true);
addBooksToLibrary('Atomic Habits', 'James Clear', 390, true);
addBooksToLibrary('The Subtle Art of not giving a fuck', 'Mark Manson', 212, true);
addBooksToLibrary('The Hobbit', 'J.R.R Tolkien', 400, false);


console.log(Library);

