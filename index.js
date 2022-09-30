const express = require('express');
require('./config');
const User =require('./Models/UserModel');
const app = express();
app.use(express.json());
app.post("/create", async (req,resp) =>{
    let data = new User(req.body);
    let result = await data.save();

    let allData = await User.find(); 

    if(result){
        resp.send(allData);
    }else{
        resp.send("Failed");
    }
});

app.listen(4500);