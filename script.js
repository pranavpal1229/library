const bookArray = []
const rowOne = document.querySelector("#rowOne")
const rowTwo = document.querySelector("#rowTwo")
const rowThree = document.querySelector("#rowThree")
const addBookButton = document.querySelector("#addBook")
const closeBookModal = document.querySelector("#bookSubmit")
const modal = document.querySelector(".modal")
const form = document.querySelector("#addBookForm")
let deleting = false
let deleteButton = document.querySelector("#deleteBook")

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
};

function addBookToLibrary(book){
    bookArray.push(book);
}

function displayBooks(bookArray){
    // Clear existing books in the display
    rowOne.innerHTML = '';

    for(let i = 0; i < bookArray.length; i++){
        let book = bookArray[i];
        let bookTitle = document.createElement('h3')
        let bookAuthor = document.createElement('h3')
        let bookPages = document.createElement('h3')
        let bookItem = document.createElement('div')
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookItem.append(bookTitle, bookAuthor, bookPages)
        
        bookItem.addEventListener('click', () => deleteBook(i));

        if(book.read){
        bookItem.classList.add("book")
        }
        else{
            bookItem.classList.add('book-nr')
        }
        if(i <= 11){
            rowOne.appendChild(bookItem)
        }
        else if(i <= 22){
            rowTwo.appendChild(bookItem);
        }
        else if(i < 33){
            rowThree.appendChild(bookItem)
        }
        else{alert('Too Many Books')}
    }
}

addBookButton.addEventListener('click', function(){
    form.reset();
    modal.showModal();
})

closeBookModal.addEventListener('click', function(){
    modal.close();
})

closeBookModal.addEventListener('click', function(event){
    if (form.checkValidity()){
        event.preventDefault()
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let read = document.getElementById('read');
        if(read.checked){
            read = true
        }
        else{
            read = false
        }
        
        let newBook = new Book(title, author, pages, read)
        addBookToLibrary(newBook)
        displayBooks(bookArray)
    }
})

function deleteBook(index) {
    if (deleting) {
        bookArray.splice(index, 1); // Remove book from the array
        displayBooks(bookArray); // Update the display
        deleting = false;
    }
}

deleteButton.addEventListener('click', ()=>{
    console.log('hi')
    deleting = true
})



displayBooks(bookArray);