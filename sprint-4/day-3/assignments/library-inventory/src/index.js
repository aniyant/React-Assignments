"use strict";
console.log("console.logsdfsdf");
var Genre;
(function (Genre) {
    Genre[Genre["Fiction"] = 0] = "Fiction";
    Genre[Genre["NonFiction"] = 1] = "NonFiction";
    Genre[Genre["Mystery"] = 2] = "Mystery";
    Genre[Genre["Thriller"] = 3] = "Thriller";
    Genre[Genre["ScienceFiction"] = 4] = "ScienceFiction";
    Genre[Genre["Fantasy"] = 5] = "Fantasy";
})(Genre || (Genre = {}));
// Initial library inventory with a predefined set of books
const library = {
    books: [
        { id: 1, title: "1984", author: "George Orwell", genre: Genre.Fiction, quantity: 5, format: 'paperback' },
        { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", genre: Genre.Fantasy, quantity: 3, format: 'hardcover' },
        { id: 3, title: "Dune", author: "Frank Herbert", genre: Genre.ScienceFiction, quantity: 4, format: 'ebook' }
    ]
};
// Function to display the library inventory
function displayInventory(library) {
    library.books.forEach(book => {
        console.log(`${book.title} by ${book.author}, Genre: ${Genre[book.genre]}, Quantity: ${book.quantity}, Format: ${book.format}`);
    });
}
// Function to search for books by title, author, or genre
function searchBooks(library, searchTerm) {
    return library.books.filter(book => book.title.includes(searchTerm) ||
        book.author.includes(searchTerm) ||
        Genre[book.genre].includes(searchTerm));
}
// Function to update the quantity of books in the inventory
function updateBookQuantity(library, bookId, newQuantity) {
    const book = library.books.find(book => book.id === bookId);
    if (book) {
        book.quantity = newQuantity;
    }
    else {
        console.log(`Book with ID ${bookId} not found.`);
    }
}
// Testing the TypeScript code
// Display the initial inventory
console.log("Initial Inventory:");
displayInventory(library);
// Search for books by title
console.log("\nSearch Results for 'Fiction':");
const searchResults = searchBooks(library, 'Fiction');
searchResults.forEach(book => console.log(book.title));
// Update the quantity of a book
console.log("\nUpdating quantity of '1984' to 10:");
updateBookQuantity(library, 1, 10);
displayInventory(library);
