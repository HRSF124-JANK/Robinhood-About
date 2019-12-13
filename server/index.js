const express = require('express')
const app = express()
const port = 3003;
const path = require('path');
const bodyParser = require('body-parser');
const Company = require('../database/Company.js');
const cors = require('cors');

app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/about/getData', function(req, res) {
   let id = req.query.id ? req.query.id : '1';
   Company.findOne({id: id}, (err, result) => {
       if (err) {
           console.log(err)
       } else {
           res.send(result);
       }
   })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
