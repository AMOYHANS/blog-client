<script setup lang="ts">
</script>

<template>
  <div class="container">
    <span>Vue3 + Nestjs<br>博客系统</span>
    <img class="homeBg" src="@/assets/bg2.webp" alt="">
  </div>
</template>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  margin: 20px 20px 0;
  overflow: hidden;
  position: relative;

  span{
    font-size: 24px;
    position: absolute;
    color: var(--light-color);
    text-align: center;
    user-select: none;
  }
  .homeBg{
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
}
</style>
