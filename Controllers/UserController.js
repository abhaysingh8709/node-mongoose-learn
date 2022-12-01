
const User = require('../Models/UserModel');

const getUsers = (async (req, resp) => {
    let users = await User.find();
    resp.render('profile',{users});

    // resp.send(allData);
});
const getUser = (async (req, resp) => {
    let allData = await User.find();
    resp.send(allData);
});

const createUser = (async (req, resp) => {
    let data = new User(req.body);
    let result = await data.save();

    if (result) {
        resp.send(JSON.stringify("Successfully Created"));
    } else {
        resp.send(JSON.stringify("Failed"));
    }
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
    getUsers,
    getUser,
    createUser,
    // updateUser,
    deleteUser
}
