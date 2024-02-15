const express = require('express');
const textFileRoutes = require('./textFileRoutes');
const taskAnalysisRoutes = require('./taskAnalysisRoutes');

const router = express.Router();

router.use('/text-file', textFileRoutes);
router.use('/task-analysis', taskAnalysisRoutes);

module.exports = router;
