const express = require("express");
const router = express.Router();
const { Student } = require("../database/models");

router.post("/add", function(req, res, next) {
  let jsonified = req.body;
  Student.create(jsonified)
    .then(obj => res.send(obj))
    .catch(err => res.send(err));
});

router.post("/edit", function(req, res, next) {
  let jsonified = req.body;
  Student.update(
    {
      firstName: jsonified.firstName,
      lastName: jsonified.lastName,
      GPA: jsonified.GPA,
      email: jsonified.email,
      image: jsonified.image
    },
    {
      where: {
        id: jsonified.id
      }
    }
  );
  res.send("?????????");
});

router.post("/delete", function(req, res, next) {
  Student.destroy({
    where: {
      id: req.body.id
    }
  })
    .then(obj => res.send(obj))
    .catch(err => res.send(err));
  res.send("???");
});

router.get("/", function(req, res, next) {
  Student.findAll()
    .then(students => res.json(students))
    .catch(err => console.log(err));
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
