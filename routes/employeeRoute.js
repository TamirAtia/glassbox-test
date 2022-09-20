const express = require('express');
const EmployeeRouter = express.Router();
const EmployeeController = require('../controllers/employee.controller'); //login by username and password

const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');



EmployeeRouter.post('/addEmployee', awaitHandlerFactory(EmployeeController.addEmployee)) 
EmployeeRouter.get('/getEmployees', awaitHandlerFactory(EmployeeController.getEmployees))

module.exports = EmployeeRouter;