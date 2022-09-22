const express = require("express");
const dotenv = require("dotenv");
const EmployeeRouter = require("./routes/employeeRoute");

const app = express();
app.use(express.urlencoded({ extended: true, limit: "2mb" }));
dotenv.config();
app.use(express.json({ limit: "2mb" }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/addEmployee", (req, res) => {
  res.sendFile(__dirname + "/html/addEmployee.html");
});
app.get("/employees", (req, res) => {
  res.sendFile(__dirname + "/html/employees.html");
});

app.use("/", EmployeeRouter);

const PORT = process.env.PORT || 7575;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
