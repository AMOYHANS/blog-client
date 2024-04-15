<script setup lang="ts">
import {onMounted} from 'vue'
import {getUser} from '@/http/users'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import dayjs from 'dayjs'

const {userId} = useUserStore()
const router = useRouter()
const avatar = ref('')
const name = ref('')
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

onMounted(async () => {
  const res = await getUser(props.post.authorId)
  avatar.value = res.data.avatar ? res.data.avatar : import.meta.env.VITE_DEFAULT_AVATAR
  name.value = res.data.name
})

const naviToUserPage = () => {
  if(props.post.authorId === userId){
    router.push('/home')
  }else{
    router.push(`/user/${props.post.authorId}`)
  }
}
</script>

<template>
  <div class="container">
    <div class="top">
      <img class="avatar" :src="avatar" alt="" @click="naviToUserPage">
      <div class="right">
        <div class="name">{{name}}</div>
        <div class="desc">{{ dayjs(post.createdAt).format('MM-DD HH:mm') }}</div>
      </div>
      <div class="like" :class="'liked'">
        ❤
        <div class="num">100人赞过</div>
      </div>
    </div>
    <img class="cover" :src="post.pic" alt="" v-if="post.pic">
    <span class="title" @click="router.push(`/post/${post.id}`)">{{ post.title }}</span>
    <span class="content">{{ post.content }}</span>
  </div>
</template>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
  max-height: 500px;
  gap: 4px;
  box-shadow: 1px 1px 10px #8a8181;
  border-radius: 5px;
  margin: 15px;
  padding: 0;
  background-color: var(--light-color);

  .top{
    display: flex;
    align-items: center;
    width: 94%;
    height: 80px;
    gap: 10px;
    position: relative;
    .avatar{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-left: 10px;
      object-fit: cover;
    }

    .right{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
    }

    .like{
      position: absolute;
      right: 30px;
      width: 32px;
      height: 32px;
      color: rgb(197, 191, 191);
      font-size: 32px;
      display: flex;
      text-align: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .num{
        font-size: 16px;
        color: #8a8181;
        width: 80px;
      }
    }

    .liked{
      color: red;
    }
  }

  .title{
    color: var(--dark-color);
    font-weight: 900;
    font-size: 32px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 0px 40px;
    line-height: 40px;
    height: 40px;
    cursor: pointer;
  }

  .cover{
    width: 90%;
    max-width: 300px;
    margin-top: 20px;
    max-height: 300px;
    height: 90%;
    object-fit: cover;
    border-radius: 10px;
  }
  .content{
    padding: 10px 40px;
    line-height: 24px;
    height: 48px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
