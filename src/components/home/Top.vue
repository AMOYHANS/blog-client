<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="container">
    <img class="homeBg" src="@/assets/bg2.webp" alt="">
    <div class="divide">
      <hr class="hr"/>
      <img class="avatar" src="@/assets/bg1.jpg" @click="router.push('/about')">
      <div class="txt">
        <span class="name">姓名</span>
        <span class="desc">个性签名</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 20px 20px 0;
  overflow: hidden;
  position: relative;
  gap: 0;;

  .homeBg{
    width: 80%;
    height: 350px;
    object-fit: cover;
    overflow: hidden;
  }
  .divide{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid gray;
    hr{
      width: 100vw;
    }
  
    .avatar{
      width: 200px;
      min-height: 200px;
      position: relative;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid var(--dark-color);
      padding: 5px;
      transform: translateY(-50%);
      background-color: white;
      &:hover{
        transform: translateY(-50%) scale(1.1);
        transition: all 0.5s ease-in-out;
      }
    }
    .txt{
      position: relative;
      transform: translateY(-60px);
      height: 1%;
      width: 200px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      justify-content: center;

      .name{
        font-size: 32px;
        font-weight: 600;
      }

      .desc{
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

}
</style>
