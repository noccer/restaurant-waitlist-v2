var express = require('express');
var router = express.Router();
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var secret = "waiting_list";

var restaurantController = require('../controllers/restaurantController');
var usersController = require('../controllers/UserController');

// router.use('/add', expressJWT({secret: secret}));
// router.use('/remove', expressJWT({secret: secret}));

// index
router.get('/', restaurantController.showRestaurants);
// customers
router.get('/customers', restaurantController.getAllCustomers);
router.get('/customers/customer/:id', restaurantController.showCustomer);
// restaurants
router.post('/add', restaurantController.addCustomer);
router.get('/populate', restaurantController.populate);
router.post('/restaurant/add', restaurantController.addRestaurant);
router.post('/remove', restaurantController.removeCustomer);
// users
router.post('/signin', usersController.authenticateUser);

module.exports = router;
