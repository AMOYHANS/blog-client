<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="top">
      <img class="avatar" src="@/assets/bg1.jpg" alt="">
      <div class="right">
        <div class="name">项目</div>
        <div class="desc">1小时前</div>
      </div>
    </div>
    <img class="cover" src="@/assets/default.webp" alt="">
    <span class="title">发多少江南世家还是方便</span>
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
  padding: 0;
  cursor: pointer;
  background-color: var(--light-color);

  &:hover{
    transform: scale(1.02);
  }

  .top{
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    gap: 10px;
    .avatar{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-left: 10px;
    }

    .right{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
    }
  }

  .title{
    color: var(--dark-color);
    font-weight: 900;
    font-size: 32px;
  }

  .cover{
    width: 90%;
    margin-top: 20px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
  .content{
    padding: 8px;
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
