<script setup lang="ts">
import { ref } from 'vue'
const isFan = ref(true)
const handleTabClick = (type: number) => {
  isFan.value = type === 1
}
</script>

<template>
  <div class="container">
    <div class="top">
      <img src="@/assets/bg1.jpg" alt="">
      <div class="right">
        <div class="name">
        姓名<div class="status"></div>在线
        </div>
        <div class="desc">不要迷恋哥，哥只是个传说</div>
      </div>
    </div>
    <div class="follow">
      <span class="left" :class="isFan ? '' : 'enabled'" @click="handleTabClick(2)">关注: 4</span>
      <span class="right" :class="isFan ? 'enabled' : ''" @click="handleTabClick(1)">粉丝: 100</span>
    </div>
    <div class="friends">
      <div class="item" v-for="index in 100" :key="index">
        <img src="@/assets/bg1.jpg" alt="">
        <div class="right">
          <div class="name">
            姓名{{ index }} <div class="status">√</div>
            在线
          </div>
          <div class="desc">不要迷恋哥，哥只是个传说</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container{
  min-width: 400px;
  margin: 10px;
  margin-right: 20px;
  background-color: #d6dce1;
  border-radius: 5px;
  padding: 8px;
  box-shadow: 0px 1px 5px lightblue;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  height: 100%;
  .top{
    height: 100px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    img{
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 50%;
    }
    .right{
      display: flex;
      flex-direction: column;
      gap: 10px;
      .name{
        font-size: 20px;
        font-weight: 600;
        display: flex;
        gap: 10px;
        align-items: center;
        .status{
          width: 20px;
          height: 20px;
          background-color: #17d75d;
          border-radius: 50%;
          justify-content: center;
        }
      }
      .desc{
        font-weight: 200;
      }
    }
  }
  .follow{
    border-top: 1px solid rgb(69, 64, 64);
    margin-top: 10px;
    padding-top: 10px;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .left, .right{
      flex: 1;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
    .enabled{
      background-color: rgb(244, 244, 244);
      padding: 6px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
  .friends{
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    border-bottom-left-radius: 20px;
    .item{
      height: 70px;
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 310px;
      padding-left: 5px;
      background-color: rgb(244, 244, 244);
      img{
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%;
      }

      .right{
        display: flex;
        flex-direction: column;
        gap: 10px;
        .name{
          font-size: 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          .status{
          width: 20px;
          height: 20px;
          background-color: #17d75d;
          border-radius: 50%;
          justify-content: center;
        }
        }
        .desc{
          font-weight: 200;
        }
    }
    }
  }
}
</style>
