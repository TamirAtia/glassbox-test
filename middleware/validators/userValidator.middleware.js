const { body } = require('express-validator');

exports.validateEmployee = [
    body('id')
        .exists()
        .withMessage('id is required')
        .notEmpty()
        .withMessage('Must be a valid id'),
    body('name')
        .exists()
        .withMessage('name is required')
        .notEmpty()
        .withMessage('Name must be filled')
        .withMessage('Must be a valid Name'),
    body('department')
        .exists()
        .withMessage('Department is required')
        .notEmpty()
        .withMessage('department must be filled')
        .withMessage('Must be a valid department'),
    body('role')
        .exists()
        .withMessage('Role is required')
        .notEmpty()
        .withMessage('role must be filled')
];