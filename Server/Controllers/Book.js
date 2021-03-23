const { updateMany } = require("../Models/Book");
const BookModel = require("../Models/Book");

/* Add Book To DB */
exports.addBooks = async (req, res) => {
  const { name, category, author, description, bookImage } = req.body;
  const book = new BookModel({
    name,
    category,
    author,
    description,
    bookImage,
  });
  try {
    const newBook = await book.save();
    // const addedBook = await BookModel.findById({ _id: newBook._id }).populate('category').populate('author');
    return res.status(200).json(newBook);
  } catch (err) {
    return res.status(500).json(err);
  }
};

/* List All Books From DB */
exports.getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.find()
      .populate("category")
      .populate("author")
      .exec();
    if (!books) {
      res.status(404);
      return res.send({ error: "books not found" });
    }

    return res.status(200).json(books);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

/* List one Book From DB */
exports.getOneBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await BookModel.findById({ _id: bookId })
      .populate("category")
      .populate("author");
    if (!book) {
      return res.status(404).send({ error: "book not found" });
    }
    return res.status(200).json(book);
  } catch (err) {
    return res.status(500).json(err);
  }
};

/* Delete one Book From DB */
exports.deleteBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const deletedState = await BookModel.findByIdAndDelete(bookId);
    if (!deletedState) {
      return res.status(404).json({ message: "Book not found!" });
    }
    return res.status(200).json(deletedState);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

/* Update one Book From DB */
exports.editBook = async (req, res) => {
  const { id } = req.params;
  const newBookData = req.body;

  try {
    const updatedBook = await BookModel.updateOne({ _id: id }, newBookData);
    if (!updatedBook) {
      return res.status(404).json({ message: "book not exist" });
    }
    return res.status(200).json({ message: "updated book successfully!" });
  } catch (err) {
    return res.status(500).json(err);
  }
};
