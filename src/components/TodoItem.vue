<template>
  <div class="todo__list-item" v-bind:class="{ 'todo__list-item--completed': todo.completed}">
    <toggle-button
      :todo="todo"
      @click="toggleCompleted(index)"
    />
    <p>{{ todo.text }}</p>
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
  methods: {
    removeTodo(index) {
      this.$emit('onRemove', index)
    },
    toggleCompleted(index) {
      this.$emit('onToggleCompleted', index) 
    }
  }
}
</script>

