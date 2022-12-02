
const User      = require('../Models/UserModel');
const Employee  = require('../Models/EmployeeModel');

const getEmployees = (async (req, resp) => {
    let employees = await Employee.find().populate('user_id');
    resp.render('employees',{employees});
});
const getUser = (async (req, resp) => {
    let allData = await User.find();
    resp.send(allData);
});

const createEmployee = (async (req, resp) => {
    let data = new Employee(req.body);
    let result = await data.save();

    if(result){
        resp.redirect('/empl');
    }else{
        resp.send(JSON.stringify("Failed"));
    }
});

const create = (async (req, resp) => {
    
    let users = await User.find();
    resp.render('createEmployee',{users});
});

const deleteUser = (async (req, resp) => {
    const _id = req.params.userID;
    let data = await User.deleteOne({ _id: _id });
    if (data.acknowledged) {
        resp.send(JSON.stringify("Successfully Deleted"));
    } else {
        resp.send(JSON.stringify("Failed"));
    }
});



// const updateProduct = ((req, res) => {
//     const id = Number(req.params.productID)
//     const index = products.findIndex(product => product.id === id)
//     const updatedProduct = {
//         id: products[index].id,
//         name: req.body.name,
//         price: req.body.price
//     }

//     products[index] = updatedProduct
//     res.status(200).json('Product updated')
// })


module.exports = {
    getEmployees,
    // getUser,
    create,
    createEmployee,
    // updateUser,
    // deleteUser
}
