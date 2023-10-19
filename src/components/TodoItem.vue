<template>
  <div class="todo__list-item" v-bind:class="{ 'todo__list-item--completed': todo.completed}">
    <toggle-button
      :todo="todo"
      @click="toggleCompleted(index)"
    />
    <div class="todo__list-item-text">
      <div v-if="!this.todoEditing" class="todo__list-item-label"
        @dblclick="editTodo(todo)"
      >{{ todo.text }}</div>
      <input v-else ref="myInput" class="todo__list-item-edit" type="text"
        v-model="localTodo.text"
        @blur="doneEdit(localTodo)"
        @keyup.enter="doneEdit(localTodo)"
        v-focus
      >
    </div>
    <remove-button
      @click="removeTodo(index)"
    />
  </div>
  
</template>

<script>
export default {
  name: 'todo-item',
  props: {
    todo: {
      type: Object,
      require: true
    },
    index: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      localTodo: this.todo,
      todoEditing: false,
      beforeEditCache: ''
    }
  },
  directives: {
    focus: {
      mounted: function (el) {
        console.log(el)
        el.focus()
      }
    }
  },  
  methods: {
    removeTodo(index) {
      this.$emit('onRemove', index)
    },
    toggleCompleted(index) {
      this.$emit('onToggleCompleted', index) 
    },
    editTodo(todo) {
      this.beforeEditCache = todo.text
      this.todoEditing = true
    },
    doneEdit(todo) {
      if (todo.text.trim() == '') {
        todo.text = this.beforeEditCache
      }
      this.todoEditing = false
    }
  }
}
</script>

