const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/node-db");
    const UsersSchema = new mongoose.Schema({
        name:String,
        price:Number
    });
    const UsersModel = mongoose.model('users',UsersSchema);
    let data = new UsersModel({name:"Birju Singh",price:1000});
    let result = await data.save();
    console.log(result); 
    
}

main();