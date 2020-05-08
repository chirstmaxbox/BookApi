function booksController(Book) {
  function get(req, res) {
    const query = req.query;
    Book.find(query, (err, books) => {
      if (err) {
        return res.send(err);
      }
      const returnBook = books.map((book) => {
        let newBook = book.toJSON();
        newBook.links = {};
        newBook.links.self = `http://${req.headers.host}/api/books/${book._id}`;
        return newBook;
      });
      return res.json(returnBook);
    });
  }

  function getByBookId(req, res) {
    const query = req.params.bookId;
    Book.findById(query, (err, book) => {
      if (err) {
        return res.send(err);
      }
      return res.json(book);
    });
  }

  function post(req, res) {
    const new_book = new Book(req.body);
    new_book.save();
    res.json(new_book);
  }

  function put(req, res) {
    const query = req.params.bookId;
    Book.findById(query, (err, book) => {
      if (err) {
        return res.send(err);
      }
      book.title = req.body.title;
      book.author = req.body.author;
      book.genre = req.body.genre;
      book.read = req.body.read;
      book.save();
      return res.json(book);
    });
  }

  function patch(req, res) {
    const query = req.params.bookId;
    Book.findById(query, (err, book) => {
      if (err) {
        return res.send(err);
      }
      if (req.body._id) {
        delete req.body._id;
      }
      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        book[key] = value;
      });
      book.save();
      return res.json(book);
    });
  }

  function del(req, res) {
    const query = req.params.bookId;
    Book.findById(query, (err, book) => {
      if (err) {
        return res.send(err);
      }
      book.remove();
      return res.sendStatus(204);
    });
  }

  return { get, getByBookId, post, put, patch, del };
}

module.exports = booksController;
