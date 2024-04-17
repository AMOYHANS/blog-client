<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Popup from '@/components/Popup.vue'
import Emoji from '@/components/write/Emoji.vue';
import ImgShow from '@/components/write/ImgShow.vue';
import { usePostStore } from '@/store/post';
import { onBeforeRouteUpdate } from 'vue-router';
import { useUserStore } from '@/store/user';
import {getPost} from '@/http/posts';
import { deletePost, updatepost } from '@/http/posts';
import { useRouter, useRoute } from 'vue-router';
import { uploadFile } from '@/http/upload';
import dayjs from 'dayjs';
import { getUser } from '@/http/users';

const router = useRouter()
const route = useRoute()
const {currentPost, setWritePost} = usePostStore()
const {userId} = useUserStore()
const text = ref(currentPost.content as string)
const title = ref(currentPost.title)
const emjShow = ref(false)
const showPopup = ref(false)
const isEdit = ref(false)
const isImgShow = ref(false)
const url = ref(currentPost.pic);
const file = ref<File>();
const URL = window.URL || window.webkitURL;
const userInfo = ref()

onMounted(async () => {
  const res = await getPost(parseInt(route.params.id as string))
  const userRes = await getUser(res.data.authorId)
  userInfo.value = userRes.data
  setWritePost(res.data)
  text.value = res.data.content as string
  title.value = res.data.title
  url.value = res.data.pic ? res.data.pic : null
})

onBeforeRouteUpdate(async (to, _, next) => {
  const res = await getPost(parseInt(to.params.id as string))
  setWritePost(res.data)
  text.value = res.data.content as string
  title.value = res.data.title
  url.value = res.data.pic ? res.data.pic : null
  next()
})

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
const handleDeleteConfirm = async () => {
  showPopup.value = false
  const res = await deletePost(currentPost.id as number)
  if(res.status === 200){
    router.push('/home')
  }
}

const handleSubmit = async () => {
  if(file.value){
    const formData = new FormData()
    formData.append('file', file.value)
    const res = await uploadFile(formData)
    if(res.status === 201){
      url.value = import.meta.env.VITE_API_URL + res.data
    }
  }
  const post = {
    title: title.value,
    content: text.value,
    pic: url.value
  }
  const res = await updatepost(currentPost.id as number, post)
  if(res.status === 200){
    alert('更新成功')
    isEdit.value = false
  }
}
</script>

<template>
  <div class="container">
    <img :src="url" alt="" @click="isImgShow = true" v-if="url">
    <ImgShow :src="url" v-if="url && isImgShow" @img-close="isImgShow = false"/>
    <div class="title">
      <input type="text" v-if="isEdit" v-model="title">
      <span v-else>{{ title }}</span>
      <div class="edit" v-if="userId === currentPost.authorId">
        <span @click="isEdit = !isEdit" title="编辑">✍</span>
        <span @click="handleDelete" title="删除">🗑️</span>
        <Popup v-if="showPopup" :width="'200px'" :content="'是否删除？'" @confirm="handleDeleteConfirm" @cancel="showPopup = false"/>
      </div>
    </div>
    <div class="writer">
      <!-- <div class="emj" v-show="isEdit">
        <span @click="emjShow=!emjShow">😉</span>
        <label>📸
          <input type="file" @change="setFile" style="display: none;">
        </label>
        <Emoji v-if="emjShow" @emoji-click="handleEmjClick"/>
      </div> -->
      <span><b>作者: </b>{{ userInfo?.name }}</span>
      <span><b>发布时间: </b>{{ dayjs(currentPost.createdAt).format('YYYY-MM-DD HH:mm:ss') }}</span>
      <button v-if="isEdit" @click="handleSubmit">提交</button>
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

@media screen and (max-width: 768px) {
  .writer{
    display: flex;
    flex-direction: column;
    min-height: 70px;
    justify-content: center;
    align-items: flex-start;
    span{
      height: 100%
    }
    button{
      height: 100%;
      margin-top: 5px;
      width: 100%;
    }
  }
  
}
</style>
