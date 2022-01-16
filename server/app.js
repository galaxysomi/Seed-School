const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
var cookieParser = require('cookie-parser')

const app = express();
//Cookie-parser
app.use(cookieParser())

//DB config 
const db = require('./sever/config/keys.js').MongoURI;

//connect DB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then (()=> console.log('Connected to Mongo'))
  .catch(err => console.log(err));

app.use(expressLayouts);
app.set('view engine', 'ejs')

//body pasam
app.use(express.urlencoded({extended: false}));



//Routes
app.use('/', require('./sever/routes/router'))

const POST = process.env.PORT || 3000
app.listen(POST, console.log('Sever started on port 3000'));

