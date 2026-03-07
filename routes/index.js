var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    { name: 'Home', rating: 10},
    {name: 'School', rating: 8 },
    {name: 'San Antonio', rating: 10}  
  ];

  //create a name

  var myname = "Manny Rocha";

  res.render('index', { 
    title: 'Favorite Places',
    places: places,
    myname: myname
  });
});

module.exports = router;
