const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Police = require('../models/police');

// Add - create new police object then push that to add police
router.post('/add', (req, res, next) => {
    let newPol = new Police({
      name: req.body.name,
      badge_num: req.body.badge_num
    });
  
    Police.addPol(newPol, (err, police) => {
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

module.exports = router;