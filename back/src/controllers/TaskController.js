import { Op } from 'sequelize';
import model from '../models';

const { Task } = model;

export default {

    // READ
    async getAllTasks(req, res) {
        try {
            const tasks = await Task.findAll()
            if (tasks.length == 0) {
              return  res.status(200).send(tasks)    
            }
            res.status(200).send(tasks)
        } catch (error) {
            return res.status(500).send({
                message: 'Could not perform operation at this time, kindly try again later.'
            })
          }
    },
    
    // CREATE
    async createTask(req, res) {      
        try {
            const {name, isChecked} = req.body       
            const task = await Task.create({
                name,
                isChecked
            })
            return res.status(201).send(task)
        } catch (error) {
            return res.status(500).send({
                message: 'Could not perform operation at this time, kindly try again later...'
            })
        }
    },

    // UPDATE
    async updateTask(req, res) {
        try {
            const task = await Task.findByPk(req.params.taskID)
            if (task) {
                const updatedTask = await Task.update({
                    name: req.body.name,
                    isChecked: req.body.isChecked
                },
                { where: { id:  req.params.taskID} }
                )
                res.status(201).send(updatedTask)
            } else {
                res.status(404).send("Task Not Found")
            }
            
        } catch (error) {
            return res.status(500).send({
                message: 'Could not perform operation at this time, kindly try again later...'
            })      
        }
    },

    // DELETE
    async deleteTask(req, res){
        try {
            const task = await Task.findByPk(req.params.taskID)
            if (task){
                task.destroy()
                res.status(204).send("resource deleted successfully")
            } else {
                res.status(404).send("Task Not Found")
            }
        } catch (error) {
            return res.status(500).send({
                message: 'Could not perform operation at this time, kindly try again later...'
            })                
        }
    }
}
