<script setup lang="ts">
</script>

<template>
  <div class="container">
    <span>Vue3 + Nestjs</span>
    <span class="title">博客系统</span>
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
  .title{
    position: absolute;
    top: 15%;
    font-size: 50px;
    color: rgb(75, 68, 55);
  }

  span{
    font-size: 32px;
    position: absolute;
    color: var(--light-color);
    text-align: center;
    user-select: none;
  }
  .homeBg{
    width: 80%;
    height: 500px;
    object-fit: cover;
    overflow: hidden;
  }
}
@media screen and (max-width: 768px) {
  .container{
    margin:  0;
    gap: 40px;
    span{
      position: static;
      font-size: 32px;
      color: var(--dark-color);
    }
  }
}
</style>
