<template>
  <div class="task">

      <input type="checkbox" @click="toogleChecked" :disabled="!isEditing ? disabled : ''">

      <input :class="{checked : isChecked}" class="task-name" type="text" v-model="taskName" :disabled="isEditing ? disabled : ''" />

      <button v-if="isEditing" id="saveBtn" class="btn" @click="update">Guardar</button>
      <button v-show="!isChecked" v-else id="editBtn" class="btn" @click="activateEditMode">Editar</button>
      <button id="deleteBtn" class="btn" @click="eliminate">Borrar</button>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    props: ['task'],
    setup(props, context){
        const isChecked = ref(false)
        const isEditing = ref(false)
        const taskName = ref(props.task.name)

        const toogleChecked = (e) => {
            isChecked.value = e.target.checked
        }

        const eliminate = () => {
            //Emite evento para eliminar la tarea
            context.emit('eliminate', props.task.id)
        }

        const activateEditMode = () => {
            // Habilita editar el input
            isEditing.value = true
        }

        const update = () => {
            if(taskName.value === ""){
                return
            }

            // Emit evento actualizar con id y nuevo nombre
            context.emit('update', props.task.id, taskName.value)
            isEditing.value = false
        }
        
        return { taskName, isEditing, isChecked, toogleChecked, activateEditMode, update, eliminate }
    }
}
</script>

<style>
.task{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    padding: 5px;
    background: gainsboro;
    border-radius: 5px;
}


.task input:disabled{
    background: gainsboro;
    text-align: center;
    border: none;
    color: black;
}


.task-name{
    background: white;
    text-align: center;
    border: none;
    border: 1px solid black;
    color: black;
    padding: 2px;
}

.btn{
    border: none;
    padding: 7px;
    color: black;
    border-radius: 3px;
}

#saveBtn{
    background: #007bff;
    color: white;
}

#deleteBtn{
    background: #EF476F;
    color: white;
}

#editBtn{
    background: #FFD166;
}

.checked{
    text-decoration: line-through;
}
</style>