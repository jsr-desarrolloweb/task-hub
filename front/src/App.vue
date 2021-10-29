<template>
  <div class="container">
    <h1>Task Hub</h1>
    <p>Manage what things you need to deal with</p>
    <TaskForm @taskFormSubmit="addTask" />
    <div class="task-list">
      <div v-if="tasks.length == 0" class="message">You have not added any task yet...</div>
        <div class="task-item" v-for="task in tasks" :key="task.id">
          <Task :task="task" @update="updateTask"  @eliminate="eliminateTask"/>
        </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted } from 'vue'
import TaskForm from './components/TaskForm.vue'
import Task from './components/Task.vue'

export default {
  name: 'App',
  components: {
    TaskForm, Task
  },
  setup(){
    // Lista de tareas iniciales
    // const tasks = ref([
    //   {id: 1, name: 'Task 01'},
    //   {id: 2, name: 'Task 02'},
    //   {id: 3, name: 'Task 03'}
    // ])
    const tasks = ref([])

    onBeforeMount(() => {
      getAllTasks()
    })

    // Obtener todas las tareas
    const getAllTasks = async () => {
      await fetch('http://localhost:5000/tasks')
      .then(response => response.json())
      .then(result => tasks.value = result)
      .catch(err => console.log(err))
    }

    // Añade tarea
    const addTask = async (task) => {
      await fetch('http://localhost:5000/task/create', {
              method: 'POST',
              body: JSON.stringify(task), 
              headers:{
                'Content-Type': 'application/json'
      }})
      .then(() => tasks.value.push(task))
      .catch(err => console.log(err))
    }

    // Actualiza tarea por ID
    const updateTask = async (id, editedTask) => {
      // for (const task of tasks.value) {
      //   if (task.id === id) {
      //     task.name = newName
      //   }
      // }
      console.log(editedTask)
      await fetch('http://localhost:5000/task/'+ id +'/update', {
              method: 'PUT',
              body: JSON.stringify({
                name: editedTask.name,
                isChecked: editedTask.isChecked
              }), 
              headers:{
                'Content-Type': 'application/json'
      }})
      .then( ()=> console.log('tarea actualizada correctamente'))
      .catch(err => console.log(err))
    }

    // // Elimina tarea por ID
    const eliminateTask = async (id) => {
      await fetch('http://localhost:5000/task/'+ id +'/delete', {method: 'DELETE'})
      .then(()=>{
        let filteredArray = tasks.value.filter((item) => {
        return item.id !== id
      })
      tasks.value = filteredArray
      })
      .catch(err => console.log(err))  
    }

    return { tasks, getAllTasks, addTask, updateTask, eliminateTask }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #073b4c;
  height: 100vh;
  padding-top: 60px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app p{
  margin-bottom: 20px;
}

.task-list{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
}

.task-item{
  margin: 10px 0;
}

button{
  cursor: pointer;
}
</style>
