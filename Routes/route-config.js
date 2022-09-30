const express = require('express')
require('../config');
const app = express()
app.use(express.json());

const user_routes = require('./UserRouter.js')


app.use('/user', user_routes)

app.listen(4500);
