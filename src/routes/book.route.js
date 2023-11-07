const express = require("express");
const router = express.Router();

const createBook = require("../controllers/book.controller");

router.route("/createbook").post(createBook);

module.exports = router;
