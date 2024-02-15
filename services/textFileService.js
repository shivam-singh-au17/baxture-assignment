const { TextFile } = require('../models');

/**
 * Function to handle the upload of text files and save file details to the database.
 * 
 * @param {object} payload Object containing file details like filename and originalname
 * @returns {Promise<object>} Promise that resolves to the saved file details in the database
 */
exports.textFileUpload = async (payload) => {

    const { filename, originalname } = payload

    const fileId = filename.split('.')[0];
    const fileName = originalname;

    const newFile = new TextFile({ fileId, fileName });

    return await newFile.save();

};
