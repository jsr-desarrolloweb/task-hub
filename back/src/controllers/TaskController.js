import { Op } from 'sequelize';
import model from '../models';

const { Task } = model;

export default {

    async getAllTasks(req, res) {
        try {
            const tasks = await Task.findAll()
            if (tasks.length == 0) {
              return  res.status(200).send({message: 'There are not tasks'})    
            }
            res.status(200).send(tasks)

        } catch (error) {
            return res.status(500).send({
                message: 'Could not perform operation at this time, kindly try again later.'
            });
          }
        }
    }

//   async signUp(req, res) {
//     const {email, password, name, phone} = req.body;
//     try {
//       const user = await User.findOne({where: {[Op.or]: [ {phone}, {email} ]}});
//       if(user) {
//         return res.status(422)
//         .send({message: 'User with that email or phone already exists'});
//       }

//       await User.create({
//         name,
//         email,
//         password,
//         phone,
//       });
//       return res.status(201).send({message: 'Account created successfully'});
//     } catch(e) {
//       console.log(e);
    //   return res.status(500)
    //   .send(
    //     {message: 'Could not perform operation at this time, kindly try again later.'});
    // }
//   }
