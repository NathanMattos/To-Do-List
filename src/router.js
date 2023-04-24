const express = require('express');
const router = express.Router();
const tasksController = require('./controllers/tasksController');
const taskMiddleware = require('./middlewares/tasksMiddleware');

router.get('/tasks', tasksController.getAll);
router.post('/tasks', taskMiddleware.validateBodyTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', taskMiddleware.validateBodyTitle,
    taskMiddleware.validateBodyStatus, tasksController.updateTask);



module.exports = router;