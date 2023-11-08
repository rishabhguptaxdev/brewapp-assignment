const express = require("express");
const router = express.Router();

const { createBook, getAllBooks } = require("../controllers/book.controller");

router.route("/createbook").post(createBook);
router.route("/getbooks").get(getAllBooks);

module.exports = router;
