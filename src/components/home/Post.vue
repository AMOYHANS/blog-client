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
      <div class="like" :class="'liked'">
        ❤
        <div class="num">100人赞过</div>
      </div>
    </div>
    <img class="cover" src="@/assets/default.webp" alt="">
    <span class="title">发多少江南世家还是风格的 放缩方便</span>
    <span class="content">fsd 房贷首付是否是法国是法国给士大夫大师傅吧发啊hi腐坏发货ua房贷首付是否是法国是法国给士大夫大师傅吧发啊hi腐坏发货ua</span>
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
  cursor: pointer;
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
