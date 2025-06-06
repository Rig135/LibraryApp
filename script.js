const Library = [];
const addBook = document.querySelector('#addFinishedBook');
const finishedBooks = document.querySelectorAll('.finished-cardArea > div')
const unfinishedBooks = document.querySelectorAll('.toRead-cardArea > div')

function Books(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



function addBooksToLibrary(title, author, pages, read) {
    let id = crypto.randomUUID();
    const newBook = new Books(id, title, author, pages, read);

    Library.push(newBook);
}

addBooksToLibrary('babaBlack Sheep', 'mememe', 20, true);
addBooksToLibrary('Atomic Habits', 'James Clear', 390, true);
addBooksToLibrary('The Subtle Art of not giving a fuck', 'idkman', 223, true);
addBooksToLibrary('Programmming Interviews', 'mark leu', 500, false);


console.log(Library);

let finIndex = 0;
let unFinIndex = 0;
for (let i = 0; i < Library.length; i++) {

    let str = Library[i].title + "<br>";
    str += "Author:-  " + Library[i].author + "<br>";
    str += "Pages:- " + Library[i].pages + "<br>";

    if (Library[i].read === true && finIndex < finishedBooks.length) {
        str += "Read:- ✅";
        finishedBooks[finIndex].innerHTML = str;
        finIndex++;
    }
    else if (unFinIndex < unfinishedBooks.length) {
        str += "Read:- ❌";
        unfinishedBooks[unFinIndex].innerHTML = str;
        unFinIndex++;
    }

}

