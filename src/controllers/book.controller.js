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
    console.log(error);
    return next(
      new ApiError(500, `Failed to fetch book with id ${req.params.id}`, error)
    );
  }
});

exports.updateBookById = asyncHandler(async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      try {
        const updatedbook = await Book.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          {
            new: true,
            runValidators: true,
            useFindAndModify: false,
          }
        );
        const response = new ApiResponse(200, updatedbook);
        res.status(response.statusCode).json(response);
      } catch (error) {
        return next(
          new ApiError(
            500,
            `Failed to update book with id ${req.params.id}`,
            error
          )
        );
      }
    } else {
      return next(
        new ApiError(404, `Book with id ${req.params.id} does not exist`, error)
      );
    }
  } catch (error) {
    return next(
      new ApiError(
        500,
        `Something went wrong while finding book with id ${req.params.id}`,
        error
      )
    );
  }
});

exports.deleteBookById = asyncHandler(async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      try {
        await book.deleteOne();
        const response = new ApiResponse(200);
        res.status(response.statusCode).json(response);
      } catch (error) {
        return next(
          new ApiError(
            500,
            `Failed to delete book with id ${req.params.id}`,
            error
          )
        );
      }
    } else {
      return next(
        new ApiError(404, `Book with id ${req.params.id} does not exist`, error)
      );
    }
  } catch (error) {
    return next(
      new ApiError(
        500,
        `Something went wrong while finding book with id ${req.params.id}`,
        error
      )
    );
  }
});
