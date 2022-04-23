const Task = require('../models/task')

const createTask = async (req, res) => {
    const { name, description, completeTime } = req.body
    try {
        const task = new Task({ name, description, completeTime })
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(500).json({ "error":"Error occured on the server"})
    }
}

const getTasks = async (req, res) => {
    const tasks = await Task.find({})
    try {
        // if(!tasks) return res.status(404).json({ "message":"No tasks found"})
        res.status(200).send(tasks)
    } catch (e){
        res.status(500).json({ "message":"Error occured on the server"})
    }
}

const editTask = async (req, res) => {
    const edits = Object.keys(req.body)
    try {
        const task = await Task.findById(req.params.id)
        
        if(!task) return res.status(404).json({ "message":"No task found"})
        
        edits.forEach((edit) => { // for each edit, update it in the tile from the req.body
            task[edit] = req.body[edit]
        })

        await task.save()
        res.send(task)

    } catch (e) {
        res.status(500).json({ "message":"Error occured on the server"})
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task) return res.status(404).json({ "message":"No task found"})
        res.status(200).send(task)
    } catch (e) {
        res.status(500).json({ "message":"Error occured on the server"})
    }
}

module.exports = {
    createTask,
    getTasks,
    editTask,
    deleteTask
}