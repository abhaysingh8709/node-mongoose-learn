const mongoose = require('mongoose');
const employeeSchema =require('../Schemas/EmployeeSchema');


module.exports = mongoose.model('employees',employeeSchema);