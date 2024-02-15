const express = require('express');
const taskAnalysisController = require('../controllers/taskAnalysisController');
const { parameterValidation, queryValidation } = require("../middleware");
const { analyzeTask, analyzeTaskQuery } = require('../validations/taskAnalysisValidation');

const router = express.Router();

router.post('/task-analysis', queryValidation(analyzeTaskQuery), parameterValidation(analyzeTask), taskAnalysisController.analyzeTask);

module.exports = router;
