<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-10 16:56:17
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-10 17:23:18
-->
<template>
  <h1>{{ theme }}</h1>
  <button>测试</button>
</template>

<script lang="ts">
import { defineComponent, inject, Ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'Child',
  setup() {
    const theme = inject("test")

    watchEffect(() => {
      console.log("主题被修改了", (theme as unknown as Ref<string>).value);
    })

    return { theme }

  }
})


</script>