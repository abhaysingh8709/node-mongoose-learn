const User = require('../Models/UserModel');
const cors = require('cors');

const showLogin = (async (req, resp) => {
    resp.send(req.body);
});
const login = (async (req, resp) => {
    resp.send(req.body);
});
const showRegister = (async (req, resp) => {
    resp.send(req.body);
});
const register = (async (req, resp) => {
    resp.send(req.body);
});

module.exports = {
    showLogin,
    login,
    showRegister,
    register,
};