const express = require('express');
const textFileRoutes = require('./textFileRoutes');

const router = express.Router();

router.use('/', textFileRoutes);

module.exports = router;
