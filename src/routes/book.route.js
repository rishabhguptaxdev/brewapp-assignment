const express = require("express");
const router = express.Router();

const {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} = require("../controllers/book.controller");

router.route("/createbook").post(createBook);
router.route("/getbooks").get(getAllBooks);
router
  .route("/book/:id")
  .get(getBookById)
  .put(updateBookById)
  .delete(deleteBookById);

module.exports = router;
