const Library = [];

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
console.log(Library);