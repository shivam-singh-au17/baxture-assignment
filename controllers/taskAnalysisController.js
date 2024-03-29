const taskAnalysisService = require('../services/taskAnalysisService');
const { responseHandler, httpStatusCodes, responseStatus } = require('../utils');

const { handleResponse, handleError } = responseHandler;
const { CREATED, INTERNAL_SERVER_ERROR, OK } = httpStatusCodes;
const { SUCCESS, FAIL } = responseStatus;

exports.analyzeTask = async (req, res) => {

    const fileId = req.query.fileId;

    try {

        const task = await taskAnalysisService.analyzeTask(fileId, req.body);

        return handleResponse(
            res,
            CREATED,
            SUCCESS,
            "Task analyzed successfully",
            { taskId: task.taskId }
        );

    } catch (err) {

        return handleError(
            res,
            INTERNAL_SERVER_ERROR,
            FAIL,
            `Error analyzing task, ${err}`
        );
    }
};

exports.getAnalyzedTask = async (req, res) => {

    const taskId = req.query.taskId;

    try {

        const taskResult = await taskAnalysisService.getAnalyzedTask(taskId);

        return handleResponse(
            res,
            OK,
            SUCCESS,
            "Successfully received task analysis result",
            taskResult
        );

    } catch (err) {

        return handleError(
            res,
            INTERNAL_SERVER_ERROR,
            FAIL,
            `Error while getting task analysis results, ${err}`
        );
    }
};
