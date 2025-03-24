const express = require('express');

// const signupController = require('../controllers/singup');
const signupController = require('../controller/singup');


const router = express.Router()

router.post('/signup', signupController.createUser)

module.exports = router