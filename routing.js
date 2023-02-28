const getRandomNumber = require('./randomNumber.js');
const createBook = require('./books/create.js')
const getAllBook = require('./books/readAll.js')
const getOneBook = require('./books/readOne.js')
const updateBook = require('./books/update.js')
const deleteBook = require('./books/delete.js')

module.exports = function(req, res) {
    if(req.url === "/random-number" && req.method === "GET") {
        getRandomNumber(res);
    }
    else if(req.url === "/books" && req.method === "POST") {
        console.log('CREATE BOOK')
        createBook(req, res)
    }
    else if(req.url === "/books" && req.method === "GET") {
        console.log('READ ALL')
        getAllBook(req, res)
        // get all books
    }
    else if (req.url.match(/\/books\/\d+/) && req.method === "GET") {
        console.log('READ ONE')
        getOneBook(req, res)
        // get the book with the specified id
    }
    else if (req.url.match(/\/books\/\d+/) && req.method === "PUT") {
        updateBook(req, res)
        // update the book with the specified id
    }
    else if (req.url.match(/\/books\/\d+/) && req.method === "DELETE") {
        deleteBook(req, res)
        // delete the book with the specified id
    }
}

