<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-05-25 13:41:13
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-05-25 14:02:03
-->
<template>
  <div class="hello">
   <input type="text" v-model="name">
   <button @click="doPub">发布</button>
   <Son />
  </div>
</template>

<script>
import Son from './Son'
import pubsub from '@/utils/pubsub.js'
export default {
  name: 'HelloWorld',
  components:{
    Son
  },
  data() {
    return {
      name:''
    }
  },
  methods:{
    doPub() {
      pubsub.trigger('item',this.name)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
