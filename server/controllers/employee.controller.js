const EmployeeModel = require("../models/employee.model");
const HttpException = require("../utils/HttpException.utils");

class EmployeeController {
  getEmployees = async (req, res) => {
    await EmployeeModel.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred.",
        });
      });
  };

  addEmployee = async (req, res, next) => {
    const { id, name, department, role } = req.body;
    console.log(id, name, department, role);

    await EmployeeModel.create({ id, name, department, role })
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        if (err.errors) {
          throw new HttpException(401, "Unable to add employee!", err.errors);
        }
        throw new HttpException(401, "Unexpected Error happened!", err);
      });
  };
}

module.exports = new EmployeeController();
