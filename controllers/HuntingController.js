const db = require("../models");

module.exports = {
  findName: function(req, res) {

    const animalName = req.params.animal.charAt(0).toUpperCase()+ req.params.animal.slice(1);


    db.hunting_data.find({Category: {$regex: animalName, $options : "i"}}).then((data) => {
      console.log("this")
      res.json(data)
      console.log(data);
    }).catch(err => console.log(err));
  },
  create: function(req, res) {
    db.hunting_data.create(req.body).then(data => {
      res.json(data);
    }).catch(err => {
      res.json(err);
    })
  }
}
// Defining methods for the booksController
// module.exports = {
//   findAll: function(req, res) {
//     db.Book
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.Book
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.Book
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.Book
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Book
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };
