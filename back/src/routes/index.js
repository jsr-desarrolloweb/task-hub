import TaskController from '../controllers/TaskController'

export default (app) => {
    app.get('/tasks', TaskController.getAllTasks);
};