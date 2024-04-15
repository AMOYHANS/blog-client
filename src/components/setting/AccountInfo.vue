<script setup lang="ts">
import ImgShow from '../write/ImgShow.vue';
import { ref } from 'vue';
import { User } from '@/types/user';
import { useUserStore } from '@/store/user';
import {uploadFile} from '@/http/upload'
import {filterNullProps} from '@/utils'
import {updateUser} from '@/http/users';
import { useRouter } from 'vue-router';
const router = useRouter();
const {userInfo, userId, setUserInfo} = useUserStore();
const imgShow = ref(false);
const url = ref(userInfo.avatar as string);
const url2 = ref(userInfo.bgImg as string);
const file = ref<File>();
const file2 = ref<File>();
const URL = window.URL || window.webkitURL;
const form = ref<Partial<User>>({...userInfo})
const promiseArray = ref<Array<Promise<void>>>([]) 

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  await Promise.all(promiseArray.value)
  const newUserInfo = await updateUser(userId as number,filterNullProps(form.value));
  if(newUserInfo.status == 200){
    setUserInfo(newUserInfo.data);
    router.push('/home')
  }else{
    alert('更新失败')
  }
}
const setFile = (e: Event) => {
  file.value = (e.target as HTMLInputElement).files![0];
  url.value = URL.createObjectURL(file.value);
  const formData = new FormData();
  formData.append('file', file.value);
  const p1 = uploadFile(formData).then((res: any) => {
    url.value = import.meta.env.VITE_PUBLIC_FOLDER + res.data
    form.value.avatar = url.value;
    // 请求完成后，释放 URL.createObjectURL() 创建的 URL 对象
    URL.revokeObjectURL(url.value);
  })
  promiseArray.value.push(p1)
}

const setFile2 = (e: Event) => {
  file2.value = (e.target as HTMLInputElement).files![0];
  url2.value = URL.createObjectURL(file2.value);
  const formData = new FormData();
  formData.append('file', file2.value);
  const p2 = uploadFile(formData).then((res: any) => {
    url2.value = import.meta.env.VITE_PUBLIC_FOLDER + res.data
    form.value.bgImg = url2.value;
    // 请求完成后，释放 URL.createObjectURL() 创建的 URL 对象
    URL.revokeObjectURL(url2.value);
  })
  promiseArray.value.push(p2)
}

</script>

<template>
  <div class="container">
    <div class="title">更新账户</div>
    <form @submit="handleSubmit">
    <div class="avatar" :style="`background-image: url(${url2});`">
      <img :src="url" @click="imgShow = true">
      <label title="点击更换" >
        更换头像
        <input type="file" style="display: none;" @change="setFile">
      </label>
      <label class="bgEdit" title="更换个人背景" >
        ✍️
        <input type="file" style="display: none;" @change="setFile2">
      </label>
      <ImgShow :src="url" v-if="imgShow" @imgClose="imgShow = false" />
     </div>
    <div class="inputItem">
      <label>用户名
      </label>
      <input type="text" v-model="form.name" placeholder="请输入用户名">
    </div>
    <div class="inputItem">
      <label>邮箱
      </label>
      <input type="text" v-model="form.email" placeholder="请输入邮箱" readonly>
    </div>
    <div class="inputItem">
      <label>密码
      </label>
      <input type="password" v-model="form.password" placeholder="请输入密码">
    </div>
    <div class="inputItem">
      <label>个性签名
      </label>
      <input type="text" v-model="form.desc" placeholder="请输入个性签名">
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
  height: calc(100% - 50px);
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  .title{
    font-size: 32px;
    margin-bottom: 10px;
    width: 100%;
  }
  form{
    width: 100%;
    height: 100%;
    .avatar{
      display: flex;
      height: 160px;
      background-image: url("@/assets/bg1.jpg");
      background-size: cover;
      justify-content: space-between;
      margin-bottom: 40px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      position: relative;
      &:hover{
        background-blend-mode: color;
      }
      label{
        font-size: 20px;
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 160px;
      }
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        transform: translateY(50%);
        transition: 0.3s ease-in-out;
        object-fit: cover;
        align-self: flex-end;
        &:hover{
          scale: 0.9;
        }
      }
      .bgEdit{
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 24px;
        cursor: pointer;
      }
    }
    .inputItem{
      height: 70px;
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
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
        margin-top: 10px;
        &:hover{
          scale: 1.02;
        }
      }
    }
  }
}
</style>
