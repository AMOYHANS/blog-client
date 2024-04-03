<script setup lang="ts">
import { ref } from 'vue';
import Emoji from '@/components/write/Emoji.vue';
import ImgShow from '@/components/write/ImgShow.vue';
const file = ref<File>();
const URL = window.URL || window.webkitURL;
const isEmjShow = ref<Boolean>(false);
const textContent = ref<string>('dd')
const emjRef = ref<HTMLElement>()
const imgShow = ref(false)

const setFile = (event: Event) => {
  file.value = (event.target as HTMLInputElement).files![0];
}

const handleEmjClick = (e: EventTarget) => {
  textContent.value += (e as HTMLElement).innerText;
}

const handleTopClick = (e: Event) => {
  if(e.target !== emjRef.value)
  isEmjShow.value = false;
}
</script>

<template>
  <div class="container" @click="handleTopClick">
    <div class="imgBox" v-if="file">
      <ImgShow :src="URL.createObjectURL(file)" v-if="imgShow" @imgClose="imgShow = false"/>
      <img :src="URL.createObjectURL(file)" alt="" @click="imgShow = true">
      <span @click="file = undefined">X</span>
    </div>
    <div class="fileAndEmoji">
      <div style="display: flex;">
        <label title="封面" @click="file = undefined">
          📸
          <input v-if="!file" type="file" @change="setFile">
        </label>
        <label title="emoji" ref="emjRef" @click="isEmjShow = !isEmjShow">😉
          <Emoji v-show="isEmjShow" @emoji-click="handleEmjClick"/>
        </label>
      </div>
      <div class="submit">
        <input type="" placeholder="起个标题吧..." autofocus>
        <button>提交</button>
      </div>
    </div>
    <textarea v-model="textContent" placeholder="写点什么..." id="" cols="30" rows="10" @change=""/>
  </div>
</template>

<style scoped lang="scss">
.container{
  width: 100%;
  margin-top: 20px;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .imgBox{
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    img{
      width: 80%;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
    }
    span{
      position: absolute;
      right: calc(10% + 10px);
      top: 2%;
      color: var(--light-color);
      transform: scaleX(1.4);
      user-select: none;
      &:hover{
        color: rgb(225, 78, 78);
        cursor: pointer;
        scale: 1.02;
      }
    }
  }
  .fileAndEmoji{
    align-self: flex-start;
    margin-left: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    label{
      font-size: 32px;
      position: relative;
      user-select: none;
      input{
        display: none;
        width: 100%;
      }
    }
    .submit{
      margin-left: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70%;
      input{
        padding: 0 5px;
        width:100%;
        height: 24px;
        font-size: 24px;
        border: none;
        background: #cdc9c9;
        border-radius: 5px;
        padding: 4px;
        &:focus{
          outline: none;
        }
      }
      button{
        color: var(--light-color);
        background-color: var(--dark-color);
        padding: 5px 10px;
        border-radius: 6px;
        margin-left: 10px;
        width: 80px;
        &:hover{
          scale: 1.05;
        }
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
    border-radius: 10px;
    margin-top: 10px;
    font-size: 20px;
    padding: 10px;
    outline: none;
  }
}
@media screen and (max-width: 768px) {
  .fileAndEmoji{
    .submit{
      input{
        position: relative;
        right: 60px;
      }

      button{
        position: fixed;
        right: 10%;
        max-width: 60px;
      }
    }
  }
}
</style>
