const express = require("express");
const auth = require("../middleware/auth");
const bookRouter = express.Router();
// const Book = require("../models/Book");
const bookCtrl = require("../controllers/books");
const multer = require("../middleware/multer-config");

bookRouter.post("/", multer, bookCtrl.postBook);
bookRouter.get("/:id", bookCtrl.getOneBook);
bookRouter.put("/:id", bookCtrl.modifyBook);
bookRouter.delete("/:id", bookCtrl.deleteBook);
bookRouter.get("/", bookCtrl.getAllBooks);

module.exports = bookRouter;
