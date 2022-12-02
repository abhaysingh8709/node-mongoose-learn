const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')

require('../Database/Connection.js');
const app = express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:4200'
}));
const UserRoute = require('./UserRouter.js');
const AuthRoute = require('./AuthRouter.js');
const EmplRoute = require('./EmplRouter.js');

app.use('/user', UserRoute);
app.use('/auth', AuthRoute);
app.use('/empl', EmplRoute);

app.listen(4500);
