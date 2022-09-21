// const express = require("express")
// const app = express()

// app.use(express.static("public"))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// app.set("view engine", "ejs")

// const userRouter = require("./routes/users")

// app.use("/users", userRouter)

// app.listen(3000)

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const HttpException = require("./utils/HttpException.utils");
const errorMiddleware = require("./middleware/error.middleware");
const EmployeeRouter = require("./routes/employeeRoute");
// const HtmlRouter = require("./routes/htmlRoute");
const { db } = require("./DBO");
const EmployeeModel = require("./models/employee.model");


const app = express();
app.use(express.urlencoded({ extended: true, limit: "2mb" }));
dotenv.config();
app.use(express.json({ limit: "2mb" }));
app.use(cors());
app.options("*", cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/addEmployee", (req, res) => {
  res.sendFile(__dirname + "/html/addEmployee.html");
});
app.get("/employees", (req, res) => {
  res.sendFile(__dirname + "/html/employees.html");
});

// app.use('/', HtmlRouter)
// console.log(__dirname)
app.use('/', EmployeeRouter)
// app.all("*", (req,res,next)=>{
//     const err = new HttpException(404, "Not Found")
//     next(err)
// })
// app.use(errorMiddleware)



// app.get("/employees", async(req,res) => {
//     const result = await EmployeeModel.findAll().then(data => {
//       console.log(data)
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// })

// app.post("/add", async (req, res) => {
//   const { id, name, department, role } = req.body;
//   console.log(id, name, department, role);
//   if (!id || !name || !department || !role) {
//     throw new HttpException(401, "Missing Parameters");
//   }
//   await EmployeeModel.create({ id, name, department, role })
//     .then((result) => {
//       console.log(result);
//       const { id, name, department, role } = result.dataValues;
//       res.send({ id, name, department, role });
//     })
//     .catch((err) => {
//       if (err.errors) {
//         throw new HttpException(401, "Unable to add employee!", err.errors);
//       }
//       throw new HttpException(401, "Unexpected Error happened!", err);
//     });
// });

const PORT = process.env.PORT || 7575;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
