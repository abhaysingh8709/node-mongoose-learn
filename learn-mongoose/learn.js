const mongoose = require('mongoose');
const dbURI = "mongodb://127.0.0.1:27017/node-db";

(async () => {
    try {
      await mongoose.connect(dbURI)
    } catch (err) {
      console.log('error: ' + err)
    }
  })()

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    price: Number,
});

const saveInDB = async () => {
    const UsersModel = mongoose.model('users', UsersSchema);
    let data = new UsersModel({ name: "Ram Shyam Singh", price: 1000 });
    let result = await data.save();
    console.log(data);

}

const updateInDB = async () => {
    const UsersModel = await mongoose.model('users', UsersSchema);
    let data = await UsersModel.updateOne(
        {
            name:"Ram Shyam Singh"
        },
        {
            $set:{
                name:"RamShyam"
            }
        }
    );
        console.log(data);
}


const deleteInDB = async () => {
    const UsersModel = await mongoose.model('users', UsersSchema);
    let data = await UsersModel.deleteOne(
        {
            name:"RamShyam"
        }
    );
        console.log(data);
}


const findInDB = async () => {
    const UsersModel = await mongoose.model('users', UsersSchema);
    let data = await UsersModel.find({name:"RamShyam"});
        console.log(data);
}

findInDB();