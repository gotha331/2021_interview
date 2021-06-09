<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-09 14:01:34
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-09 14:43:29
-->
<template>
  <li
    v-for="todo in filterdTodos"
    :key="todo.id"
    :class="{ completed: todo.completed, editing: todo === editedTodo }"
  >
    <!-- 绑定完成状态 -->
    <div class="view">
      <input type="checkbox" v-model="todo.completed" />
      <label :for="todo.id" @dblclick="editTodo(todo)">{{ todo.title }}</label>
      <button @click="removeTodo(todo)">X</button>
    </div>
    <!-- 编辑待办 -->
    <!-- <input
          type="text"
          class="edit"
          v-model="todo.title"
          v-todo-focus="todo === editedTodo"
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
          @keyup.escape="cancelEdit(todo)"
    />-->

    <EditTodo
      class="edit"
      v-model:todo-title="todo.title"
      @keyup.enter="doneEdit(todo)"
      v-todo-focus="todo === editedTodo"
      @blur="doneEdit(todo)"
      @keyup.escape="cancelEdit(todo)"
    ></EditTodo>
  </li>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    editedTodo: Object
  },
  emits: ['remove-todo', 'update:edited-todo'],
  setup(props, { emit }) {
    const state = reactive({
      beforeEditCache: "" // 缓存编辑前的title
    })

    function removeTodo(todo) {
      emit("remove-todo", todo)
    }

    function editTodo(todo) {
      state.beforeEditCache = todo.title
      // state.editedTodo = todo
      emit('update:edited-todo', todo)
    }

    function cancelEdit(todo) {
      todo.title = state.beforeEditCache
      // state.editedTodo = null
      emit('update:edited-todo', null)
    }

    function doneEdit(todo) {
      // state.editedTodo = null
      emit('update:edited-todo', null)
    }

    return { ...toRefs(state), removeTodo, editTodo, cancelEdit, doneEdit }
  },
  directives: {
    "todo-focus": (el, { value }) => {
      if (value) {
        el.focus()
      }
    }
  }
};
</script>

<style scoped>
ul li {
  list-style: none;
}
.completed label {
  text-decoration: line-through;
}

.edit,
.editing .view {
  display: none;
}

.view,
.editing .edit {
  display: block;
}
</style>
