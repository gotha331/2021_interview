<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-10 09:19:38
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-10 17:07:27
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <Hello></Hello> -->
  <!-- <Ref msg="hello vite "></Ref> -->
  <!-- <TemplateRefs></TemplateRefs> -->
  <!-- <Computed></Computed> -->
  <!-- <Watch></Watch> -->
  <!-- <WatchEffect></WatchEffect> -->
  <Parent></Parent>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import Hello from '@/components/Hello.vue'
import Ref from '@/components/Ref.vue'
import TemplateRefs from '@/components/TemplateRefs.vue'
import Computed from '@/components/Computed.vue'
import Watch from '@/components/Watch.vue'
import WatchEffect from '@/components/WatchEffect.vue'
import Parent from '@/components/Parent.vue'


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
