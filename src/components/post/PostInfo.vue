<script setup lang="ts">
import { ref } from 'vue';
import Popup from '@/components/Popup.vue'
import Emoji from '@/components/write/Emoji.vue';
import ImgShow from '@/components/write/ImgShow.vue';
const text = ref('fdsfsfsdfsd')
const title = ref('实例标题')
const emjShow = ref(false)
const showPopup = ref(false)
const isEdit = ref(false)
const isImgShow = ref(false)
const url = ref('http://localhost:5173/bg3.jpeg');
const file = ref<File>();
const URL = window.URL || window.webkitURL;
const setFile = (e: Event) => {
  file.value = (e.target as HTMLInputElement).files![0];
  url.value = URL.createObjectURL(file.value);
}
const handleDelete = (e: Event) => {
  e.preventDefault()
  showPopup.value = true
}
const handleEmjClick = (e: EventTarget) => {
  text.value += (e as HTMLElement).innerText;
  emjShow.value = false
}
</script>

<template>
  <div class="container">
    <img :src="url" alt="" @click="isImgShow = true">
    <ImgShow :src="url" v-if="isImgShow" @img-close="isImgShow = false"/>
    <div class="title">
      <input type="text" v-if="isEdit" v-model="title">
      <span v-else>{{ title }}</span>
      <div class="edit">
        <span @click="isEdit = !isEdit" title="编辑">✍</span>
        <span @click="handleDelete" title="删除">🗑️</span>
        <Popup v-if="showPopup" :width="'200px'" :content="'是否删除？'" @confirm="showPopup = false" @cancel="showPopup = false"/>
      </div>
    </div>
    <div class="writer">
      <div class="emj" v-show="isEdit">
        <span @click="emjShow=!emjShow">😉</span>
        <label>📸
          <input type="file" @change="setFile" style="display: none;">
        </label>
        <Emoji v-if="emjShow" @emoji-click="handleEmjClick"/>
      </div>
      <span>作者: cai</span>
      <span>更新时间: xxx</span>
      <button v-if="isEdit">提交</button>
    </div>
    <textarea :readonly="!isEdit" v-model="text"></textarea>
  </div>
</template>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  height: 100%;
  width: 100%;

  img{
    width: 90%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }

  .title{
    width: 90%;
    text-align: center;
    display: flex;
    justify-content: space-between;
    input{
      padding: 0 5px;
      width:100%;
      height: 33px;
      font-size: 24px;
      border: none;
      background: #cdc9c9;
      border-radius: 5px;
      padding: 4px;
      &:focus{
        outline: none;
      }
    }
    span{
      font: 500 32px 'sans';
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .edit{
      display: flex;
      gap: 10px;
      user-select: none;
      span{
        font-size: 20px;
        display: flex;
        cursor: pointer;
        align-items: center;
      }
    }
  }

  .writer{
    width: 90%;
    display: flex;
    justify-content: space-between;
    height: 20px;
    .emj{
      position: relative;
      font-size: 20px;
      cursor: pointer;
    }
    button{
      padding: 0px 8px;
      border-radius: 5px;
      outline: none;
      border: none;
      color: var(--light-color);
      background-color: var(--dark-color);
      cursor: pointer;
      &:hover{
        scale: 0.95;
      }
    }
  }

  textarea{
    width: 90%;
    min-height: 300px;
    height: 70%;
    font-family: "Varela Round", san-serif;
    outline: none;
    resize: none;
    font-size: 16px;
  }
}
</style>
