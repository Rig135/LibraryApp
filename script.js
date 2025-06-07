const dialog = document.querySelector('dialog');


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


// let finIndex = 0;
// let unFinIndex = 0;




function addBooksToLibrary(title, author, pages, read) {
    let id = crypto.randomUUID();
    const newBook = new Books(id, title, author, pages, read);

    Library.push(newBook);
    createCard(title, author, pages, read);
}

//Function to Create new Cards
function createCard(title, author, pages, read) {

    const div = document.createElement('div');
    div.classList.add("card");


    let str = `${title}  <br>`;
    str += `Author:-    ${author}  <br>`;
    str += `Pages:-   ${pages}  <br>`;
    str += `Read: ${read ? "✅" : "❌"}`

    div.innerHTML = str;

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



// for (let i = 0; i < 2; i++) {
//     addBook[i].addEventListener('click', () => {
//         dialog.showModal();
//     })
// }

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





addBooksToLibrary('babaBlack Sheep', 'mememe', 20, true);
addBooksToLibrary('Atomic Habits', 'James Clear', 390, true);
addBooksToLibrary('The Subtle Art of not giving a fuck', 'idkman', 223, true);
addBooksToLibrary('Programmming Interviews', 'mark leu', 500, false);


console.log(Library);

