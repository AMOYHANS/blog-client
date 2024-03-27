<script setup lang="ts">
</script>

<template>
  <div class="container">
    <img src="@/assets/default.webp" alt="">
    <span class="title">title</span>
    <span class="date">time</span>
    <span class="content">fsd 房贷首付是否是法国是法国给士大夫大师傅吧发啊hi腐坏发货ua房贷首付是否是法国是法国给士大夫大师傅吧发啊hi腐坏发货ua</span>
  </div>
</template>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  max-height: 500px;
  gap: 4px;
  box-shadow: 1px 1px 20px #322a2a;
  border-radius: 5px;
  margin: 15px;

  &:hover{
    transform: scale(1.02);
  }

  .title{
    color: var(--dark-color);
    font-weight: 900;
    font-size: 32px;
  }

  img{
    width: 90%;
    margin-top: 20px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
  .content{
    padding: 8px;
    line-height: 24px;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
