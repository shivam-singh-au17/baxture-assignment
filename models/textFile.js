const mongoose = require('mongoose');

const textFileSchema = new mongoose.Schema(
    {
        fileId: { type: String },
        fileName: { type: String },
        uploadDate: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('text_file', textFileSchema);
