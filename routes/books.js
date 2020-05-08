const express = require("express");
const Book = require("../models/bookModel");
const booksController = require("../controllers/booksController");

const router = express.Router();

/**
 * @swagger
 * /books:
 *  get:
 *    description: This returns all books available on webbook database
 *    tags:
 *      - Books
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/books", booksController(Book).get);

/**
 * @swagger
 * /books/{bookId}:
 *  get:
 *    description: This returns all books available on webbook database
 *    tags:
 *      - Books
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: bookId
 *        in: path
 *        description: Id of book
 *        type: String
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/books/:bookId", booksController(Book).getByBookId);

/**
 * @swagger
 * /books:
 *  post:
 *    description: Create a new book
 *    tags:
 *      - Books
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: book
 *        description: information of book
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: String
 *            author:
 *              type: String
 *            genre:
 *              type: String
 *            read:
 *              type: Boolean
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/books", booksController(Book).post);

router.put("/books/:bookId", booksController(Book).put);

router.patch("/books/:bookId", booksController(Book).patch);

/**
 * @swagger
 * /books/{bookId}:
 *  delete:
 *    description: Delete a book
 *    tags:
 *      - Books
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: bookId
 *        in: path
 *        description: Book Id
 *        type: String
 *    responses:
 *      '204':
 *        description: Book has been deleted
 */
router.delete("/books/:bookId", booksController(Book).del);

module.exports = router;
