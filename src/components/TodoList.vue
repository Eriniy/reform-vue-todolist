<template>
  <div class="todo__list">
    <todo-item
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
      @onToggleCompleted="$emit('onToggleCompleted', index)"
      @onRemove="$emit('onRemove', index)"
    />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'todo-list',
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array,
      required: true
    },
  },
}
</script>

