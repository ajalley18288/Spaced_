const express = require('express')
const { createTask, getTasks, editTask, deleteTask } = require('../controllers/task')

const router = express.Router()

router.post('/task', createTask)

router.get('/task', getTasks)

router.patch('/task/:id', editTask)

router.delete('/task/:id', deleteTask)

module.exports = router