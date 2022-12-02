const express = require('express');
const router = express.Router();

const {
    getEmployees,
    // getEmployee,
    create,
    createEmployee,
    // updateUser,
    // deleteEmployee
} = require('../Controllers/EmployeeController.js');

router.get('/', getEmployees);

// router.get('/:emplID', getEmployee);

router.get('/create/', create);

router.post('/createEmp/', createEmployee);

// router.put('/:productID', updateUser)

// router.delete('/:emplID', deleteEmployee)

module.exports = router;
