<template>
  <div class="todo__add-field">
    <input type="text" placeholder="Введите текст задачи..."
      @keyup.enter="addTodo"
      v-model="text"
    >
    <button class="todo__add-field-btn"
      @click="addTodo">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.2973 3V25M3 13.8493C3.71351 13.8493 17.964 13.8493 25 13.8493" stroke="#DCDCDC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
  
</template>

<script>
export default {
  name: 'todo-form',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    addTodo() {
      if (this.text.trim() != ''){
        this.$emit('onAddTodo', this.text)
        this.text = ''
      }
    }
  }
}
</script>

