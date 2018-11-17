const router = require("express").Router();
const huntingController = require("../../controllers/HuntingController.js");

router.route("/")
    .get(huntingController.findName)
    .post(huntingController.create);

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
