const mongoose = require('mongoose');

const textFileSchema = new mongoose.Schema(
    {
        fileId: { type: String, required: true },
        fileName: { type: String, required: true },
        uploadDate: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('text_file', textFileSchema);
