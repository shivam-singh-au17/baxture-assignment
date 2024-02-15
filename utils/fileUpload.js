const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const uploadDir = './uploads';

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const fileId = uuidv4();
        cb(null, fileId + '.txt');
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['text/plain'];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only text files are allowed.'));
    }
};

const limits = {
    fileSize: 1024 * 1024 * 5, // 5 MB limit
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: limits,
});

module.exports = upload;
