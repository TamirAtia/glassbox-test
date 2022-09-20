const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const HttpException = require('./utils/HttpException.utils');
const errorMiddleware = require('./middleware/error.middleware');
const EmployeeRouter = require('./routes/employeeRoute');
const HtmlRouter = require('./routes/htmlRoute');
const {db} = require('./DBO');
const EmployeeModel = require("./models/employee.model");

const app = express();
app.use(express.urlencoded({ extended: true, limit: '2mb'}));
dotenv.config()
app.use(express.json({limit:'2mb'}));
app.use(cors())
app.options("*", cors())


app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods','GET, POST, DELETE, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
//app.use('/', HtmlRouter)
// console.log(__dirname)
// app.use('/employee', EmployeeRouter)
// app.all("*", (req,res,next)=>{
//     const err = new HttpException(404, "Not Found")
//     next(err)
// })
// app.use(errorMiddleware)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
app.get("/addEmployee", (req, res) => {
    res.sendFile(__dirname + "/html/addEmployee.html");
  });
app.get("/employees", (req, res) => {
    res.sendFile(__dirname + "/html/employees.html");
  });

  app.post('/add', async (req,res) => {
    const { id,name, department, role } = req.body;
    console.log(id,name, department, role)
    if (!id || !name || !department || !role){
        throw new HttpException(401, 'Missing Parameters')
    }
    await EmployeeModel.create({ id,name, department, role })
    .then((result)=>{
        console.log(result)
        const {id,name, department, role} = result.dataValues 
        res.send({id,name, department, role})
    }).catch((err) => {
        if(err.errors){
            throw new HttpException(401, 'Unable to add employee!', err.errors);

        }
        throw new HttpException(401, 'Unexpected Error happened!', err);
    })

  });

app.listen('7575', ()=>{
    console.log(`Server Is Alive at 7575`)
})

module.exports=app


