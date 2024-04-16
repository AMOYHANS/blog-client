<script setup lang="ts">
import Top from '@/components/home/Top.vue'
import Post from '@/components/home/Post.vue'
import {ref} from 'vue'
import {useUserStore} from '@/store/user'
import {getAllPosts, getAllPostsWithUserId} from '@/http/posts'
import { onMounted } from 'vue'
import { Post as PostType } from '@/types/post'

const {userId} = useUserStore()
const postsData = ref<PostType[]>([])

onMounted(async () => {
  const res = await getAllPosts()
  
  postsData.value = res.data
})

const isPublic = ref(true)
const handlePublic = async () => {
  isPublic.value = true
  const res = await getAllPosts()
  postsData.value = res.data.sort((a:any, b:any) => a.updatedAt - b.updatedAt)
}
const hanldeMine  = async () => {
  isPublic.value = false
  const res = await getAllPostsWithUserId(userId)
  postsData.value = res.data.sort((b:any, a:any) => a.updatedAt - b.updatedAt)
}
</script>

<template>
  <div class="container">
    <Top :user-id="userId"/>
    <div class="tab">
      <span class="public" :class="isPublic ? 'enabled' : ''" @click="handlePublic">广场</span> |
      <span class="mine" :class="!isPublic ? 'enabled' : ''" @click="hanldeMine">我的</span>
    </div>
    <div class="main">
      <Post v-for="item in postsData" :key="item.id" :post="item" />
      <div class="empty" v-if="postsData.length === 0">空空如也，快去创作吧！</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    .main{
      min-width: 800px;
      width: 50%;
      background-color: rgb(243, 243, 243);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .empty{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px
      }
    }
    .tab{
      font-size: 20px;
      max-width: 400px;
      width: 90%;
      display: flex;
      justify-content: center;
      padding: 10px;
      gap: 10px;
      .public, .mine{
        background-color: var(--light-color);
        width: 200px;
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
          transform: scale(1.05);
        }
      }

      .enabled{
        background-color: var(--dark-color);
        color: var(--light-color);
      }
    }
  } 

</style>
