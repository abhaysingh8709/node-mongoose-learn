const express = require('express')
require('../config');
const app = express();
app.use(express.json());

const UserRoute = require('./UserRouter.js');
const AuthRoute = require('./AuthRouter.js');

app.use('/user', UserRoute);
app.use('/auth', AuthRoute);

app.listen(4500);
