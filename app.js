// DEFINE REQUIRED MODULES
const express = require('express');
var router = require('./routes/routes');

// USE EXPRESS MODULE
var app = express();

// USE EXPRESS ROUTER
app.use('/',router);
app.use(express.static('./public'))

// SET VIEW TEMPLATE ENGINE
app.set('view engine', 'ejs');

// LISTEN SERVER
app.listen(3000);
console.log('Server running up on port: 3000')