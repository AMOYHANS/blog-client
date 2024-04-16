<script setup lang="ts">
import Top from '@/components/home/Top.vue'
import Post from '@/components/home/Post.vue'
import {ref} from 'vue'
import {getAllPostsWithUserId} from '@/http/posts'
import { onMounted } from 'vue'
import { Post as PostType } from '@/types/post'
import { useRoute } from 'vue-router' 

const route = useRoute()
const userId = route.params.id as string

const postsData = ref<PostType[]>([])

onMounted(async () => {
  const res = await getAllPostsWithUserId(+userId)
  postsData.value = res.data
})


</script>

<template>
  <div class="container">
    <Top :user-id="+userId"/>
    <div class="tab">
      <span class="mine" :class="'enabled'">他的帖子</span>
    </div>
    <div class="main">
      <Post v-for="item in postsData" :key="item.id" :post="item" />
      <div class="empty" v-if="postsData.length === 0">他什么也没留下</div>
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
        font-size: 20px;
        color: var(--dark-color);
        padding: 20px;
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
