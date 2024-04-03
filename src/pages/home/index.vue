<script setup lang="ts">
import Top from '@/components/home/Top.vue'
import Post from '@/components/home/Post.vue'
import {ref} from 'vue'
const isPublic = ref(true)
</script>

<template>
  <div class="container">
    <Top/>
    <div class="tab">
      <span class="public" :class="isPublic ? 'enabled' : ''" @click="isPublic = true">广场</span> |
      <span class="mine" :class="!isPublic ? 'enabled' : ''" @click="isPublic = false">我的</span>
    </div>
    <div class="main">
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    .main{
      min-width: 800px;
      width: 50%;
      background-color: rgb(243, 243, 243);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .tab{
      font-size: 20px;
      max-width: 400px;
      width: 90%;
      display: flex;
      justify-content: center;
      padding: 10px;
      gap: 10px;
      .public, .mine{
        background-color: var(--light-color);
        width: 200px;
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
          transform: scale(1.05);
        }
      }

      .enabled{
        background-color: var(--dark-color);
        color: var(--light-color);
      }
    }
  } 

</style>
