<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-07 15:45:32
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-09 13:39:22
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <Todos></Todos>
  <p></p>
  <Todos1></Todos1>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Todos from './components/TodoList.vue'
import Todos1 from './components/todos/TodoList.vue'


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
