const express = require('express')
require('../config');
const app = express()
app.use(express.json());

const user_routes = require('./UserRouter.js')
const auth_routes = require('./AuthRouter.js')

app.use('/user', user_routes)
app.use('/auth', auth_routes)

app.listen(4500);
