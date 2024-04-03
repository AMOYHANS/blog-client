<script setup lang="ts">
import PostInfo from '@/components/post/PostInfo.vue'
</script>

<template>
  <div class="container">
    <PostInfo/>
    <div class="right">zsfcsvsdvdsvddsa
    </div>
  </div>
</template>

<style scoped lang="scss">
.container{
  display: flex;

  .right{
    flex: 1;
  }
}
@media screen and (max-width: 768px) {
  .container{
    flex-direction: column;
}
  
}
</style>
