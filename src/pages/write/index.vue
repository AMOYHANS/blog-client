<script setup lang="ts">
import { ref } from 'vue';
import Emoji from '@/components/write/Emoji.vue';
const file = ref<File>();
const URL = window.URL || window.webkitURL;
const isEmjShow = ref<Boolean>(false);
const textContent = ref<string>('dd')


const setFile = (event: Event) => {
  file.value = (event.target as HTMLInputElement).files![0];
  console.log(file.value);
}

const handleEmjClick = (e: EventTarget) => {
  textContent.value += (e as HTMLElement).innerText;
}
</script>

<template>
  <div class="container">
    <img v-if="file" :src="URL.createObjectURL(file)" alt="">
    <div class="fileAndEmoji">
      <label>
        📸
        <input type="file" @change="setFile">
      </label>
      <label @click="isEmjShow = !isEmjShow" @blur="isEmjShow = false">😉
        <Emoji class="emj" v-show="isEmjShow" @emoji-click="handleEmjClick"/>
      </label>
      <input type="">
    </div>
    <textarea v-model="textContent" name="" id="" cols="30" rows="10" @change="() => console.log(textContent)"/>
    <button>发送</button>
  </div>
</template>

<style scoped lang="scss">
.container{
  width: 100%;
  height: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 80%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  .fileAndEmoji{
    align-self: flex-start;
    margin-left: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    label{
      font-size: 32px;
      position: relative;
      user-select: none;
      .emj{
        position: absolute;
        top: 50px;
        left: 10px;
      }
      input{
        display: none;
      }
    }
    span{
      font-size: 30px;
      margin-left: 10px;
    }
  }
  textarea{
    width: 80%;
    height: 100%;
  }
}
</style>
