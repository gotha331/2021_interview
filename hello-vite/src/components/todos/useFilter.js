/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-09 15:16:00
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-09 15:19:26
 */

import { reactive, computed } from 'vue'

// 过滤
const filters = {
  all (todos) {
    return todos
  },
  active (todos) {
    return todos.filter(todo => !todo.completed)
  },
  completed (todos) {
    return todos.filter(todo => todo.completed)
  },
}

export function useFilter (todos) {
  const filterState = reactive({
    filterItems: [
      { label: 'ALL', value: "all" },
      { label: 'Active', value: "active" },
      { label: 'Completed', value: "completed" }
    ],
    visibility: 'all',
    filterdTodos: computed(() => {
      return filters[filterState.visibility](todos.value)
    })
  })

  return filterState
}