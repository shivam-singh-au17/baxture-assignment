const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const { TaskAnalysis, TextFile } = require('../models');
const { COUNT_WORDS, COUNT_UNIQUE_WORDS, FIND_TOP_K_WORDS } = require('../utils/operationNames');

/**
 * Function to analyze a task based on the specified operation and options, and save the analysis results to the database.
 * 
 * @param {string} fileId ID of the file to be analyzed
 * @param {object} payload Object containing operation and options for the analysis
 * @returns {Promise<object>} Promise that resolves to the saved task analysis details in the database
 * @throws Will throw an error if the file does not exist, resulting in an error message
 */
exports.analyzeTask = async (fileId, payload) => {

    const { operation, options } = payload;

    const file = await TextFile.findOne({ fileId });
    if (!file) throw new Error(`File does not exist for fileId ${fileId}`);

    const rootDir = path.join(__dirname, '../');
    const filePath = path.join(rootDir, 'uploads', `${fileId}.txt`);

    const content = fs.readFileSync(filePath, 'utf-8');

    let result = {};
    const taskId = uuidv4();

    if (operation === COUNT_WORDS) {

        const wordCount = content.split(/\s+/).length;
        result = { wordCount };

    } else if (operation === COUNT_UNIQUE_WORDS) {

        const uniqueWords = new Set(content.split(/\s+/));
        result = { uniqueWordCount: uniqueWords.size };

    } else if (operation === FIND_TOP_K_WORDS) {

        const words = content.split(/\s+/);

        const wordFrequency = {};
        words.forEach(word => {
            wordFrequency[word] = (wordFrequency[word] || 0) + 1;
        });

        const sortedWords = Object.keys(wordFrequency).sort(
            (a, b) => wordFrequency[b] - wordFrequency[a]
        );

        const k = options.topWords || 10;
        result = { topWords: sortedWords.slice(0, k) };

    } else {
        throw new Error(`Invalid operation`);
    }

    const newTaskAnalysis = new TaskAnalysis({ taskId, fileId, operation, options, result });

    return await newTaskAnalysis.save();
};

/**
 * Function to retrieve analyzed task results from the database based on the provided taskId.
 * 
 * @param {string} taskId ID of the task analysis to retrieve
 * @returns {Promise<object>} Promise that resolves to the task analysis details from the database
 * @throws Will throw an error if the task analysis results do not exist, resulting in an error message
 */
exports.getAnalyzedTask = async (taskId) => {

    const taskResult =  await TaskAnalysis.findOne({ taskId });
    if (!taskResult) throw new Error(`Task analysis results does not exist for taskId ${taskId}`);

    return taskResult;
};
