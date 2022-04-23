const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    completeTime: { type: String }
}, {
    timestamps: true,
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task