<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-05-25 14:22:00
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-05-25 14:22:00
-->
<!--
 * @Files: 订阅 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-05-25 13:54:46
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-05-25 14:10:42
-->
<template>
  <div>
    <h1>{{ h1 }}</h1>
  </div>
</template>

<script>
import pubsub from "@/utils/pubsub.js"

export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      h1:''
    }
  },
  watch: {},
  created() {},
  mounted() {
    let that = this
    pubsub.listen("item",function(data) {
      that.h1 = data
    })
  },
  methods: {}
}
</script>

<style  lang="scss" scoped></style>
