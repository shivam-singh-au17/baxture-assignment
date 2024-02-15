const express = require('express');
const taskAnalysisController = require('../controllers/taskAnalysisController');
const { parameterValidation, queryValidation } = require("../middleware");
const { analyzeTask, analyzeTaskQuery, getAnalyzedTask } = require('../validations/taskAnalysisValidation');

const router = express.Router();

router.post('/', queryValidation(analyzeTaskQuery), parameterValidation(analyzeTask), taskAnalysisController.analyzeTask);
router.get('/result', queryValidation(getAnalyzedTask), taskAnalysisController.getAnalyzedTask);

module.exports = router;
