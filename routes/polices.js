const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Police = require('../models/police');

// Add - create new police object then push that to add police
router.post('/add', (req, res, next) => { // The Request (req) is returning undefined values 
  let newPol = new Police({
    name: req.body.name, // undefined
    badge_num: req.body.badge_num // undefined
  });
  // this affects the function addPol which is defined in the police.js file in the models folder
  Police.addPol(newPol, (err, police) => {
    console.log(police);
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to add'
      });
    } else {
      res.json({
        success: true,
        msg: 'User added'
      });
    }
  });
});

// Search Police officers matching the string
// Search Police cant be a post request 
router.get('/findAll', (req, res, next) => { // Change from 'router.post' to 'router.get'

  Police.find({}, (err, police) => {
    res.json(police)
  })

});


router.get('/find/:name', (req, res, next) => { // Change from 'router.post' to 'router.get'
  const name = req.params.name;

  Police.findByName(name, (err, police) => {
    if (err) throw err;

    if (!police) {
      return res.json({
        success: false,
        msg: 'Police not found'
      });
    } else {
      res.json(police);
    }
  });

});


module.exports = router;