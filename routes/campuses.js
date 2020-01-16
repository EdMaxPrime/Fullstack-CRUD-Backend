const express = require("express");
const router = express.Router();
const { Campus } = require("../database/models");

router.put("/add", function(req, res, next) {
  let jsonified = req.body;
  Campus.create(jsonified)
    .then(obj => res.send(obj))
    .catch(err => res.send(err));
});

router.post("/edit", function(req, res, next) {
  let jsonified = req.body;
  Campus.update(
    {
      name: jsonified.name,
      address: jsonified.address,
      description: jsonified.description,
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

router.delete("/delete", function(req, res, next) {
  Campus.destroy({
    where: {
      id: req.body.id
    }
  })
    .then(obj => res.send(obj))
    .catch(err => res.send(err));
  res.send("???");
});

router.get("/", function(req, res, next) {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(err => console.log(err));
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
