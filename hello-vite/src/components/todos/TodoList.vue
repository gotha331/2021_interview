<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-09 09:14:35
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-09 15:42:18
-->
<template>
  <div>
    <!-- 新增todo -->
    <EditTodo
      v-model:todo-title="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日待办"
      autocomplete="off"
    ></EditTodo>
    <ul>
      <TodoItem
        v-for="todo in filterdTodos"
        :key="todo.id"
        :todo="todo"
        v-model:edited-todo="editedTodo"
        @remove-todo="removeTodo"
      ></TodoItem>
    </ul>
    <Filter :items="filterItems" v-model="visibility"></Filter>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import EditTodo from './EditTodo.vue'
import TodoItem from './TodoItem.vue'
import Filter from './Filter.vue'
import { useTodos } from './useTodos.js'
import { useFilter } from './useFilter.js'

export default {
  components: {
    EditTodo,
    TodoItem,
    Filter
  },
  setup() {
    const todoState = reactive({
      newTodo: '',
      editedTodo: null, // 正在编辑的todo
    })
    const { todos, addTodo, removeTodo } = useTodos(todoState)
    const filterState = useFilter(todos)

    return { ...toRefs(todoState), ...toRefs(filterState), addTodo, removeTodo }
  }
};
</script>

<style scoped>
</style>
