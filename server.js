'use strict';

var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json({filename: req.file.originalname, type: req.file.mimetype, size: req.file.size})
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
