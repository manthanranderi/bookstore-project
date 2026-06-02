const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  homePage,
  addPage,
  insertBook,
  singleBookPage,
  deleteBook,
  editPage,
  updateBook,
} = require("../controller/bookController");

router.get("/", homePage);

router.get("/add", addPage);

router.post(
  "/insertBook",
  upload.single("image"),
  insertBook
);

router.get(
  "/book/:id",
  singleBookPage
);

router.get(
  "/edit/:id",
  editPage
);

router.post(
  "/update/:id",
  upload.single("image"),
  updateBook
);

router.get(
  "/delete/:id",
  deleteBook
);

module.exports = router;