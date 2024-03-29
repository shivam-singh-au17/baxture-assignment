const express = require('express');
const upload = require('../utils/fileUpload');
const textFileController = require('../controllers/textFileController');

const router = express.Router();

router.post('/upload', upload.single('file'), textFileController.textFileUpload);

module.exports = router;
