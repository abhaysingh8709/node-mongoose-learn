const express = require('express');

require('./config');

const Product =require('./Models/UserModel');

const app = express();

app.post("/create", async (req,resp) =>{
    resp.send("Done");
});

app.listen(4500);