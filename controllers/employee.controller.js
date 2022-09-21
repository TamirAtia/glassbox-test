const EmployeeModel = require("../models/employee.model");

const HttpException = require("../utils/HttpException.utils");
const { validationResult } = require("express-validator");

class EmployeeController {
  getEmployees = async (req, res) => {
    await EmployeeModel.findAll().then(data => {
        console.log(res)
        res.send(data);
        
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  addEmployee = async (req, res, next) => {
    this.checkValidation(req);
    const { id, name, department, role } = req.body;
    console.log(id, name, department, role);
    if (!id || !name || !department || !role) {
      throw new HttpException(401, "Missing Parameters");
    }
    await EmployeeModel.create({ id, name, department, role })
      .then((result) => {
        console.log(result);
        const { id, name, department, role } = result.dataValues;
        res.send({ id, name, department, role });
      })
      .catch((err) => {
        if (err.errors) {
          throw new HttpException(401, "Unable to add employee!", err.errors);
        }
        throw new HttpException(401, "Unexpected Eroor happend!", err);
      });
  };

  checkValidation = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpException(400, "Validation failed", errors);
    }
  };
}
module.exports = new EmployeeController();
