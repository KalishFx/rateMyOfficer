const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:false}));

// const mongo = require('mongoose');
// const url ="mongodb://localhost:27017/RaMyOff_app";

app.get('/login', (req, res) => {
  res.send('Hello World!')
})
 
app.listen(3000, () => {
    console.log('listening app on port 3000!');
  });