const express = require('express');
const htmlRouter = express.Router();
const HtmlController = require('../controllers/html.controller'); 

const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');



htmlRouter.get('/', awaitHandlerFactory(HtmlController.getIndex))
htmlRouter.get('/employees', awaitHandlerFactory(HtmlController.getEmployeeList))
htmlRouter.get('/addEmployee', awaitHandlerFactory(HtmlController.addEmployee)) 

module.exports = htmlRouter;