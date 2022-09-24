const express = require("express");
const EmployeeRouter = express.Router();
const EmployeeController = require("../controllers/employee.controller");

EmployeeRouter.post("/add", EmployeeController.addEmployee);
EmployeeRouter.get("/getEmployees", EmployeeController.getEmployees);

module.exports = EmployeeRouter;
