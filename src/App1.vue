<script setup>
import { ref, onMounted } from 'vue'

const tasks = ref(['task one', 'task two'])

const newTask = ref('')

const addTask = () => {
  if(newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

onMounted(async () => {
  try {
    const response  = await fetch('https://jsonplaceholder.typicode.com./todos')
    const data = await response.json()
    tasks.value = data.map((task) => task.title)
  } catch(error) {
    console.log("nothing happens")
  }
})

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
} 


</script>

<template>
  <form @submit.prevent = 'addTask'>
    <label for="newTask">Add a task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask"/>
    <button type="submit">Submit</button>
  </form>
  <br>
  <ul>
    <li v-for="(task, index) in tasks" :key="t">
      <span>
      {{ task }}
      </span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>

</template>

<style scoped>

</style>
