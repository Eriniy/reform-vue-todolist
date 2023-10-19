<template>
  <div class="todo">
    <div class="todo__header">
        <h1>Todo's list</h1>
      </div>
    <div class="todo__filter">
      <a class="todo__filter-link"
        :class="{ 'todo__filter-link--active': filterParm=='' }"
        @click="filterParm=''">All
      </a>
      <a 
        class="todo__filter-link"
        :class="{ 'todo__filter-link--active': filterParm == 'completed' }"
        @click="filterParm = 'completed'">Completed
      </a>
      <a 
        class="todo__filter-link"
        :class="{ 'todo__filter-link--active': filterParm == 'remaning' }"
        @click="filterParm = 'remaning'">Remaning
      </a>
  
    </div>
    <div class="todo__container">
      <todo-form 
        @onAddTodo="onAddTodo"
      />
      
      <todo-list 
        :todos="filterTodosList"
        @onToggleCompleted="onToggleCompleted"
        @onRemove="onRemove"
      />
    </div>
  </div>
  
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  },
  data() {
    return{
      todos: [],
      filterParm: '',
    }
  },
  mounted() {
    const dataTodos = localStorage.getItem('todos')
    if (dataTodos){
      this.todos = JSON.parse(dataTodos )
    }
  },
  computed: {
    filterTodosList() {
      switch (this.filterParm) {
        case 'completed': return this.todos.filter(todo => todo.completed ==  true);
        case 'remaning': return this.todos.filter(todo => todo.completed == false);
        default: return this.todos
      }
    }
  },
  methods: {
    onToggleCompleted(index) {
      this.todos[index].completed = !this.todos[index].completed
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    onRemove(index){
      this.todos.splice(index, 1)
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    onAddTodo(text) {
      this.todos = this.todos || [];
      this.todos.unshift({
        text,
        completed: false
      })
      
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
}
</script>
