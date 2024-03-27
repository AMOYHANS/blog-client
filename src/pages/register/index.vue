<script setup lang="ts">
import { ref } from 'vue'
const isLogin = ref<Boolean>(false)
</script>

<template>
  <div class="container">
    <div class="inputForm">
      <div class="title">{{isLogin ? '登录' : '注册'}}</div>
      <div class="formItems">
        <div class="formItem">
          <label class="formLabel">
            <span>邮箱:</span>
            <input type="email" placeholder="请输入电子邮箱">
          </label>
        </div>
        <div class="formItem" v-if="!isLogin">
          <label class="formLabel">
            <span>用户名:</span>
            <input type="text" placeholder="请输入用户名">
          </label>
        </div>
        <div class="formItem">
          <label class="formLabel">
            <span>密码:</span>
            <input type="password" placeholder="请输入密码">
          </label>
        </div>
        <div class="formItem">
          <button>{{ isLogin ? '确认登录' : '立即注册' }}</button>
        </div>
        <span class="moreInfo" v-if="isLogin">没有账号?点我去注册</span>
        <span class="moreInfo" v-else>已有账号？点我去登录</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container{
    width: 100%;
    height: calc(100% - 48px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: linear-gradient(rgba(15, 13, 13, 0.5), rgba(54, 15, 15, 0.5)),url('@/assets/bg1.jpg');


    .inputForm{
      width: 300px;
      height: 400px;
      border-radius: 20px;

      .title{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        font-size: 32px;
        color: var(--light-color);
      }

      .formItems{
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        .formLabel{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          font-size: 20px;
          gap: 6px;

          span{
            width: 80px;
            color: var(--light-color);
          }

          input{
            border: none;
            border-radius: 5px;
            outline: none;
            width: 90%;
            padding-left: 10px;
            height: 30px;
          }
        }

        button{
          width: 95%;
          height: 36px;
          border: none;
          border-radius: 5px;
          background-color: var(--dark-color);
          color: var(--light-color);
          margin-right: 20px;

          &:hover{
            background-color: var(--light-color);
            color: var(--dark-color);
            cursor: pointer;
          }
        }

        .moreInfo{
          color: var(--light-color);
          font-size: 14px;
          border-bottom: 1px solid var(--light-color);
          width: 150px;
          cursor: pointer;
        }
      }
    }
  }

</style>
