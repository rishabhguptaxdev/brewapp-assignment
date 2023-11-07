const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");
const Book = require("../models/book.model");

const createBook = asyncHandler(async (req, res, next) => {
  const { title, author, summary } = req.body;

  if (!title || !author || !summary) {
    return next(new ApiError(400, "All fields are required"));
  }

  try {
    const book = await Book.create({
      title,
      author,
      summary,
    });

    const response = new ApiResponse(201, book, "Book created successfully");
    res.status(response.statusCode).json(response);
  } catch (error) {
    return next(new ApiError(500, "Failed to create book", false, error));
  }
});

module.exports = createBook;
