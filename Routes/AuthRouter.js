const express = require('express');
const router = express.Router();

const {
    showLogin,
    login,
    showRegister,
    register,
} = require('../Controllers/AuthController.js');

router.get('/login', showLogin);
router.post('/login', login);
router.get('/register', showRegister);
router.post('/register', register);

module.exports = router;