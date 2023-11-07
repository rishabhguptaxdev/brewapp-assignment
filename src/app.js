const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(morgan("tiny"));

const bookRoutes = require("./routes/book.route");

app.use("/api/v1", bookRoutes);

module.exports = app;
