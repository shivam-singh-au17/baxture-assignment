const mongoose = require('mongoose');

const taskAnalysisSchema = new mongoose.Schema(
    {
        taskId: { type: String },
        fileId: { type: String },
        operation: { type: String },
        options: { type: Object },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('task_analysis', taskAnalysisSchema);
