var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');



//gets all the super heroes from DB
router.get('/', function (req, res) {
  console.log("hello from get request")
  Hero.find({}, function (err, heros) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(heros);
  });
});

//post new hero to server
router.post('/', function (req, res) {
  console.log('POST', req.body);
  var hero = Hero(req.body);
  hero.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201); // CREATED
  });
});

//deleting a hero with unique id from client side
router.delete('/:id', function (req, res) {
  var id = req.params.id;
  console.log('server side got',id);
  Hero.findByIdAndRemove(id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});

module.exports = router;
