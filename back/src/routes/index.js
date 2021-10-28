import TaskController from '../controllers/TaskController'

export default (app) => {
    app.get('/tasks', TaskController.getAllTasks)
    app.post('/task/create', TaskController.createTask)
    app.put('/task/:taskID/update', TaskController.updateTask)
}