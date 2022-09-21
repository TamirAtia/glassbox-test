const path = require("path");
const HttpException = require("../utils/HttpException.utils");

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
// app.get("/addEmployee", (req, res) => {
//   res.sendFile(__dirname + "/html/addEmployee.html");
// });
// // app.get("/employees", (req, res) => {
// //   res.sendFile(__dirname + "/html/employees.html");
// // });

class HtmlController {
  getIndex = (req, res) => {
    try {
      res.sendFile(path.join(__dirname + "/index.html"));
    } catch {
      (err) => {
        throw new HttpException(
          500,
          "An error accrued while trying to get index page",
          err
        );
      };
    }
  };
  addEmployee = (req, res) => {
    try {
      res.sendFile(path.join(__dirname + "/addEmployee.html"));
    } catch {
      (err) => {
        throw new HttpException(
          500,
          "An error accrued while trying to get addEmployee page",
          err
        );
      };
    }
  };
  getEmployees = (req, res) => {
    try {
      res.sendFile(path.join(__dirname + "/employees.html"));
    } catch {
      (err) => {
        throw new HttpException(
          500,
          "An error accrued while trying to get getEmployees page",
          err
        );
      };
    }
  };
}

module.exports = HtmlController;
