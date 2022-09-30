
const User = require('../Models/UserModel');

const getUsers = (async (req, resp) => {
    let allData = await User.find();
    resp.send(allData);
});
const getUser = (async (req, resp) => {
    let allData = await User.find();
    resp.send(allData);
});

const createUser = (async (req, resp) => {
    let data = new User(req.body);
    let result = await data.save();

    let allData = await User.find();

    if (result) {
        resp.send("Successfully Created");
    } else {
        resp.send("Failed");
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

// const deleteProduct = ((req, res) => {
//     const id = Number(req.params.productID)
//     const index = products.findIndex(product => product.id === id)
//     products.splice(index,1)
//     res.status(200).json('Product deleted')
// })

module.exports = {
    getUsers,
    getUser,
    createUser,
    // updateUser,
    // deleteUser
}