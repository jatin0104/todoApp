// REQUIRED MODULES
var express = require('express'),
    todoController = require('../controllers/todoController.js');

// USE EXPRESS MODULE
var app = express();

var router = express.Router();

// ROUTE FOR INDEX PAGE
router.get('/', function(req,res){
    // CONTROLLER
   // var todoController =  await todoController.getPerson();
   todoController(app)
    res.render('pages/index', { name:  todoController(app)})
})



// EXPORT MODULE ROUTER
module.exports = router;