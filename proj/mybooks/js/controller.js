'use strict'

function onInit() {
    if(!gBooks) {
        gBooks=[]
        createBooks();
    }
    // createBooks()
    renderBooks();

}

function renderBooks() {
    var books = getBooks();
    var strId = ''


    books.forEach(function (book) {
        strId += `<tr>
        <td>${book.id} </td><td>${book.name}
         </td><td>${book.price}$</td>
         <td>
         <button onclick=onRead('${book.id}')>Read</button>
          <button onclick="onUpdate('${book.id}')">Update price</button> 
          <button onclick="onDeleteBook('${book.id}')">Delete</button>
          </td><td>${book.rating}/10</td>

        </tr>`
    })

    var elBooks = document.querySelector('.my-books');
    elBooks.innerHTML = strId;
}

function onCreateBook(id, bookname, price, img) {
    bookname = prompt("Enter Book Name")
    price = prompt("Enter Book Price")
    gBooks.push(createBook(bookname, price, img))
    saveToStorage('books',gBooks)

    renderBooks();
}

function onDeleteBook(id) {
    deleteBook(id)
    renderBooks()
    saveToStorage('books',gBooks)


}

function onUpdate(id) {
    var newPrice;
    if (typeof (newPrice) !== 'number') {
        newPrice = +prompt('Please enter new price for the book!')
    }
    updatePrice(id, newPrice)
    renderBooks();
    saveToStorage('books',gBooks)

}
function onRead(id) {
    renderModal(id)

}

function renderModal(id) {
    var bookToRead = getBooks().filter(function (book) {return (book.id === id)});
    var str = `
            <h1 class="book-name">Book Name: ${bookToRead[0].name}</h1>
            <h4 class="book-price">Price: ${bookToRead[0].price}$</h4>
            <h6 class="book-img"><img src="${bookToRead[0].imgUrl}" alt="Book Image"></h6>
            <h5 class="book-rating">Add Rating:</h5>
            <div class="ratings">
            <input class="rating-${bookToRead[0].id}" type="number" min="0" max="10" placeholder="0-10" value="0">
            <button onclick=onAddRating('${bookToRead[0].id}')>Submit!</button>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vitae dolorum voluptatum,
            quas doloribus consequuntur, recusandae repudiandae ab qui velit suscipit in ratione 
            odio earum provident iure modi ipsa veniam!</p>
            `

    var elBookModal = document.querySelector('.bookinfo');
    elBookModal.style.display = 'block'
    elBookModal.innerHTML = str;
}

function onAddRating(id) {
    var elRating = document.querySelector(`.rating-${id}`);
    var ratingValue = elRating.value;
    addRating(id, ratingValue);
    renderBooks();
    saveToStorage('books',gBooks)

}

 // local storage

