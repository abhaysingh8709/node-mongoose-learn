const express = require('express')
const cors = require('cors');

require('../Database/Connection.js');
const app = express();
app.set('view engine','ejs');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));
const UserRoute = require('./UserRouter.js');
const AuthRoute = require('./AuthRouter.js');

app.use('/user', UserRoute);
app.use('/auth', AuthRoute);

app.listen(4500);
