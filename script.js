const bookArray = []

function Book(title, name, author, pages, read){
    this.title = title;
    this.name = name;
    this.pages = pages;
    this.read = read
};

function addBookToLibrary(book){
    bookArray.push(book);
}