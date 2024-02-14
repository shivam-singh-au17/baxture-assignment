/**
 * Error handling middleware function for Express.js.
 * 
 * @param {Error} err The error object passed by Express.js.
 * @param {import('express').Request} req The request object representing the HTTP request.
 * @param {import('express').Response} res The response object representing the HTTP response.
 * @param {import('express').NextFunction} next The callback function to pass control to the next middleware.
 * @returns {void}
 */
exports.errorHandlerMiddleware = require("./errorHandlerMiddleware");

/**
 * Middleware function for request body validation using Joi schema.
 * 
 * @param {Joi.Schema} schema Joi schema used for request body validation
 * @returns {Function} Express middleware function
 * @param {object} req Express request object
 * @param {object} res Express response object
 * @param {Function} next Express next middleware function
 * @throws {Error} If the request body validation fails, it sends a response with bad request status (400) and error details.
 */
exports.parameterValidation = require("./parameterValidation");

/**
 * Middleware function to validate request query parameters against a Joi schema.
 * 
 * @param {Joi.Schema} schema Joi schema used for validation
 * @returns {Function} Express middleware function
 * @param {object} req Express request object
 * @param {object} res Express response object
 * @param {Function} next Express next function to pass control to the next middleware
 * @throws Will throw an error if validation fails, resulting in a response with status code 400 (Bad Request) and error details
 */
exports.queryValidation = require("./queryValidation");
