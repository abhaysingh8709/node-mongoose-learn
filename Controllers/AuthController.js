const User = require('../Models/UserModel');
const cors = require('cors');

//FOR LOGIN PAGE SHOW
const showLogin = (async (req, resp) => {
    resp.send(req.body);
});

// FOR LOGIN
const login = (async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user);
        } else {
            resp.send({ result: "No User Found" });
        }
    } else {
        resp.send({ result: "Please fill data" });
    }
});

//FOR REGISTER PAGE SHOW
const showRegister = (async (req, resp) => {
    resp.send(req.body);
});

//FOR REGISTER
const register = (async (req, resp) => {
    resp.send(req.body);
});

module.exports = {
    showLogin,
    login,
    showRegister,
    register,
};