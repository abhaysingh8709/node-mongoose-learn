const {Schema, model} = require('mongoose');
const userSchema =require('../Schemas/UserSchema');
const User      = require('../Models/UserModel');

const employeeSchema = new Schema({
    salary: String,
    phone: String,
    department: String,
    designation: String,
    user_id:{type:Schema.Types.ObjectId,ref:User}
});
module.exports = employeeSchema;
