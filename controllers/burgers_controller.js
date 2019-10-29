const express = require('express');
const Burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res) {
  Burger.all(function(data) {
    var handleBarsObject = {
      burger: data
    }
    console.log(handleBarsObject);
    res.render('index', handleBarsObject);
  })
})


module.exports = router;