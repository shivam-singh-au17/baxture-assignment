const textFileService = require('../services/textFileService');
const { responseHandler, httpStatusCodes, responseStatus } = require('../utils');

const { handleResponse, handleError } = responseHandler;
const { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR } = httpStatusCodes;
const { SUCCESS, FAIL } = responseStatus;

exports.textFileUpload = async (req, res) => {

    if (!req.file) {
        return handleError(res, BAD_REQUEST, FAIL, 'No file uploaded');
    }

    try {

        const uploadedFile = await textFileService.textFileUpload(req.file);

        return handleResponse(
            res,
            CREATED,
            SUCCESS,
            "File uploaded successfully",
            { fileId: uploadedFile.fileId }
        );

    } catch (err) {

        return handleError(
            res,
            INTERNAL_SERVER_ERROR,
            FAIL,
            `Error uploading file, ${err}`
        );
    }
};
