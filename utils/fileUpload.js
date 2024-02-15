const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const uploadDir = './uploads';

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

/**
 * Configuration for multer storage settings.
 * 
 * @param {object} req Express request object
 * @param {object} file File object from the request
 * @param {Function} cb Callback function to call when upload is complete or when an error occurs
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const fileId = uuidv4();
        cb(null, fileId + '.txt');
    }
});

/**
 * Middleware function to handle file uploads using multer.
 * 
 * @param {object} req Express request object
 * @param {object} file File object from the request
 * @param {Function} cb Callback function to call when upload is complete or when an error occurs
 * @throws Will throw an error if the file type is not allowed, resulting in a response with status code 400 (Bad Request) and error details
 */
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['text/plain'];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only text files are allowed.'));
    }
};

/**
 * Limits for file size and other properties for multer upload.
 */
const limits = {
    fileSize: 1024 * 1024 * 5, // 5 MB limit
};

/**
 * Middleware function to handle file uploads with multer middleware.
 * 
 * @param {object} req Express request object
 * @param {object} res Express response object
 * @param {Function} next Express next function to pass control to the next middleware
 */
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: limits,
});

module.exports = upload;
