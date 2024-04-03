<script setup lang="ts">
import Top from '@/components/home/Top.vue'
import Post from '@/components/home/Post.vue'
</script>

<template>
  <div class="container">
    <Top/>
    <div class="main">
      <div class="left">
        left
      </div>
      <div class="right">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    height: 100%;

    .main{
      width: 100%;
      height: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      .left{
        flex: 1;
      }
      .right{
        flex: 2;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 10px;
        column-gap: 20px;
        height: 100%;
        margin-top: 10px;
      }
    }
  } 
</style>
