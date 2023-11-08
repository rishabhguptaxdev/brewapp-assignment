const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");
const Book = require("../models/book.model");

exports.createBook = asyncHandler(async (req, res, next) => {
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

exports.getAllBooks = asyncHandler(async (req, res, next) => {
  try {
    const books = await Book.find();
    const response = new ApiResponse(200, books);
    res.status(response.statusCode).json(response);
  } catch (error) {
    return next(new ApiError(500, "Failed to fetch all books", _, error));
  }
});

exports.getBookById = asyncHandler(async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    const response = book
      ? new ApiResponse(200, book)
      : new ApiResponse(404, null, "Book not found");
    res.status(response.statusCode).json(response);
  } catch (error) {
    return next(
      new ApiError(500, `Failed to fetch book with id ${req.params.id}`, error)
    );
  }
});
