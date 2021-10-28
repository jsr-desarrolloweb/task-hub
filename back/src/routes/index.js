import TaskController from '../controllers/TaskController'

export default (app) => {
    // CRUD de Task
    app.get('/tasks', TaskController.getAllTasks)
    app.post('/task/create', TaskController.createTask)
    app.put('/task/:taskID/update', TaskController.updateTask)
    app.delete('/task/:taskID/delete', TaskController.deleteTask)
}