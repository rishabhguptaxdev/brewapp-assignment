const express = require("express");
const router = express.Router();

const {
  createBook,
  getAllBooks,
  getBookById,
} = require("../controllers/book.controller");

router.route("/createbook").post(createBook);
router.route("/getbooks").get(getAllBooks);
router.route("/book/:id").get(getBookById);

module.exports = router;
