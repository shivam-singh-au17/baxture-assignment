const mongoose = require('mongoose');

const taskAnalysisSchema = new mongoose.Schema(
    {
        taskId: { type: String, required: true },
        fileId: { type: String, required: true },
        operation: { type: String, required: true },
        options: { type: Object },
        result: { type: Object, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('task_analysis', taskAnalysisSchema);
