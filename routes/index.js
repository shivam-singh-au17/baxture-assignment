const express = require('express');
const textFileRoutes = require('./textFileRoutes');
const taskAnalysisRoutes = require('./taskAnalysisRoutes');

const router = express.Router();

router.use('/', textFileRoutes);
router.use('/', taskAnalysisRoutes);

module.exports = router;
