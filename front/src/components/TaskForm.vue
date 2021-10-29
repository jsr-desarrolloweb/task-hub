<template>

      <form id="task-form" @submit.prevent="handleTaskFormSubmit">
          <label for="task"></label>
          <input id="task" v-model="newTaskName" type="text" placeholder="Add a new task!">
          <button type="submit">Add Task</button>
      </form>

</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'

export default {
    setup(props, context){
        // Tarea a añadir
        const newTaskName = ref('')

        // Maneja el submit del formulario
        const handleTaskFormSubmit = () => {
            if(newTaskName.value === ""){
                return
            }
            // Emite evento que recibe el padre con la tarea como argumento
            // let newTask = {id: parseInt( Math.random()*10000), name: newTaskName.value}
            let newTask = {name: newTaskName.value, isChecked: false}
            context.emit('taskFormSubmit', newTask)

            newTaskName.value = ""
        }

        return { newTaskName, handleTaskFormSubmit }
    }
}
</script>

<style>
#task-form{
    margin: 10px 0;
    width: 100%;
}

#task-form input{
    padding: 7px;
    text-align: center;
    width: 250px;
}

#task-form button{
    padding: 7px;
    background: #06D6A0;
    border: 1px solid #06D6A0;
    border-radius: 0px 3px 3px 0px;
    color: white;
}
</style>