<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
const {userInfo, setIsLogin} = useUserStore()
const router = useRouter();
const handleOut = () => {
  setIsLogin(false)
  localStorage.removeItem('user')
  localStorage.removeItem('post')
  router.push('/login')
}
</script>

<template>
  <div class="container">
    <div class="left">
      <i class="iconfont icon-xinlangweibo"></i>
      <i className="iconfont icon-weixin"></i>
      <i className="iconfont icon-QQ"></i>
    </div>
    <div class="mid">
      <span class="midItem"  @click="router.push('/home')">首页</span>
      <span class="midItem" @click="router.push('/post')">关于</span>
      <span class="midItem" @click="router.push('/about')">好友</span>
      <span class="midItem" @click="router.push('/write')">创作</span>
      <span class="midItem" @click="handleOut">退出</span>
    </div>
    <div class="right">
      <div class="avartarBg" @click="router.push('/setting')">
        <img :src="(userInfo.avatar as string)" class="avatar">
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 48px;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: var(--primary-color);
  user-select: none;
}

.left{
    height: 100%;
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--light-color);
}

@media screen and (max-width: 768px) {
  .left{
    display: none;
  }
  .mid{
    width: 100%;
    margin-left: 10px;
    justify-content: space-around;
  }
  .right{
    width: 100%;
  }
  .avatar{
    width: 30px;
    height: 30px;
    position: relative;
  }
  .avartarBg{
    margin: 0 15px;
    position: absolute;
    right: 5px;
  }
}

.midItem{
    cursor: pointer;
    width: 50px;
    color: #333;
    font-size: 20px;
    &:hover{
        color: var(--dark-color);
        font-size: 25px;
    }
}
.mid{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    span{
      color: var(--light-color);
    }
}
.right{
    height: 100%;
    width: 100%;
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    .avartarBg{
      position: absolute;
      right: 20px;
      img{
        object-fit: cover;
      }
    }
    .avatar{
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
    
}

</style>
