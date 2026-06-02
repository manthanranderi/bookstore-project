const Book = require("../models/bookmodel");
const fs = require("fs");
const path = require("path");

const homePage = async (req, res) => {
  try {
    const books = await Book.find();

    res.render("index", {
      books,
    });
  } catch (error) {
    console.log(error);
  }
};

const addPage = (req, res) => {
  res.render("add");
};

const insertBook = async (req, res) => {
  try {
    await Book.create({
      bookName: req.body.bookName,
      author: req.body.author,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
      image: req.file.filename,
    });

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const singleBookPage = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    res.render("view", {
      book,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (book.image) {
      const imagePath = path.join(
        __dirname,
        "../uploads",
        book.image
      );

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Book.findByIdAndDelete(req.params.id);

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const editPage = async (req, res) => {
  try {
    const singleBook = await Book.findById(
      req.params.id
    );

    res.render("edit", {
      singleBook,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    let imageName = book.image;

    if (req.file) {
      const imagePath = path.join(
        __dirname,
        "../uploads",
        book.image
      );

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }

      imageName = req.file.filename;
    }

    await Book.findByIdAndUpdate(
      req.params.id,
      {
        bookName: req.body.bookName,
        author: req.body.author,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        image: imageName,
      }
    );

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  homePage,
  addPage,
  insertBook,
  singleBookPage,
  deleteBook,
  editPage,
  updateBook,
};