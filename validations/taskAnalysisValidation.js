const Joi = require('joi');
const { COUNT_WORDS, COUNT_UNIQUE_WORDS, FIND_TOP_K_WORDS } = require('../utils/operationNames');

module.exports = {
    analyzeTask: Joi.object({
        operation: Joi.string().valid(COUNT_WORDS, COUNT_UNIQUE_WORDS, FIND_TOP_K_WORDS).required(),
        options: Joi.number().optional(),
    }),

    analyzeTaskQuery: Joi.object({
        fileId: Joi.string().required(),
    }),

    getAnalyzedTask: Joi.object({
        taskId: Joi.string().required(),
    }),
};
