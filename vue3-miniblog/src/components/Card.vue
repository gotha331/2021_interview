<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-11 16:51:01
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-14 14:15:13
-->
<template>
  <div class="card">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {

}

</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  // height: 444px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  margin: 5px 0;
  cursor: pointer;

  .title {
    height: 60px;
    // font-size: 1.25em;
  }

  .content {
    height: 300px;
  }

  .description {
    height: 84px;

    div {
      height: 100%;
      display: flex;
    }
  }

  .title,
  .content,
  .description {
    padding: 16px;
    text-align: center;
    border-bottom: 1px solid silver;
  }
}
</style>