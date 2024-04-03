<script setup lang="ts">
import ImgShow from '../write/ImgShow.vue';
import { ref } from 'vue';
const imgShow = ref(false);
const url = ref('http://localhost:5000/images/default.webp');
const file = ref<File>();
const URL = window.URL || window.webkitURL;
const handleSubmit = (e: Event) => {
  e.preventDefault();
}
const setFile = (e: Event) => {
  file.value = (e.target as HTMLInputElement).files![0];
  url.value = URL.createObjectURL(file.value);
}

</script>

<template>
  <div class="container">
    <div class="title">更新账户</div>
    <form @submit="handleSubmit">
    <div class="avatar">
        <img :src="url" @click="imgShow = true">
        <label title="点击更换" >
        点击更换
          <input type="file" style="display: none;" @change="setFile">
        </label>
      <ImgShow :src="url" v-if="imgShow" @imgClose="imgShow = false" />
     </div>
    <div class="inputItem">
      <label>用户名
      </label>
      <input type="text" placeholder="请输入用户名">
    </div>
    <div class="inputItem">
      <label>邮箱
      </label>
      <input type="text" placeholder="请输入邮箱">
    </div>
    <div class="inputItem">
      <label>密码
      </label>
      <input type="password" placeholder="请输入密码">
    </div>
    <div class="inputItem">
      <label>个性签名
      </label>
      <input type="text" placeholder="请输入个性签名">
    </div>
    <div class="inputItem">
      <button type="submit">确认修改</button>
    </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.container{
  max-width: 1000px;
  height: calc(100% - 100px);
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  .title{
    font-size: 32px;
    margin-bottom: 10px;
    width: 100%;
  }
  form{
    width: 100%;
    .avatar{
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      label{
        font-size: 20px;
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
      }
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transition: 0.3s ease-in-out;
        object-fit: cover;
        &:hover{
          opacity: 0.8;
        }
      }
    }
    .inputItem{
      height: 80px;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      label{
        height: 50%;
        display: flex;
        align-items: center;
      }
      input{
        height: 50%;
        padding: 0 10px;
        margin: 0;
        font-size: 20px;
      }
      button{
        height: 50px;
        width: 100%;
        max-width: 400px;
        background-color:var(--dark-color);
        color:var(--light-color);
        border: none;
        border-radius: 4px;
        align-self: center;
        &:hover{
          scale: 1.02;
        }
      }
    }
  }
}
</style>
