const { TextFile } = require('../models');

exports.textFileUpload = async (payload) => {

    const { filename, originalname } = payload

    const fileId = filename.split('.')[0];
    const fileName = originalname;

    const newFile = new TextFile({ fileId, fileName });

    return await newFile.save();

};
