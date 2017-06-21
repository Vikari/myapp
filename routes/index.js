var Vastaus = require('./model.js').Vastaus;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/supersankari', function (req, res) {
  //res.send('Moi ' + req.body.nimi + '! Suosikkisupersankarisi on siis ' + req.body.supersankari + '. Hienoa!');
  const nimi = req.body.nimi;
  const supersankari = req.body.supersankari;
  Vastaus.create({
    nimi,
    supersankari
  }).then(function () {
    res.render('index', { nimi, supersankari });
  },
    function () {
      res.status(500).send('Tietokantavirhe.');
    });
});

router.get("/vastaukset", function(req, res) {
    Vastaus.find(function (err, vastaukset) {
    if (err) return console.error(err);
    console.log(vastaukset);
    res.render('vastaukset', {vastaukset: vastaukset});
  });
});

router.get("/tyhjenna", function(req, res) {
    Vastaus.remove({}, function (err) {
    if (err) return console.error(err);
    console.log('Tyhjennety');
    res.send('Tyhjennetty');
  });
});

router.get('/tulokset', function(req, res) {
  Vastaus.aggregate([{
    $group: { _id: '$supersankari', arvo: {$sum: 1}}
  }]).then(function(data) {
    var tulokset = {};
    data.forEach(function(v) {
      tulokset[v._id] = v.arvo;
    });
    res.json(tulokset);
  },
  function () {
    res.status(500).send('Tietokantavirhe.');
  })
});

module.exports = router;
