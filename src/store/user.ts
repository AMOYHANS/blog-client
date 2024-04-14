import { defineStore } from "pinia";
import { User } from "@/types/user";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      // 用户信息
      userInfo: {
        email: 'example@example.com',
        name:  '张三',
        avatar:  'ccc',
        gender: 0,
        desc:  '该用户没有默认签名',
      } as Partial<User>,
      isLogin: false,
    }
  },
  actions: {
    // 修改用户信息
    setUserInfo(userInfo: Partial<User>) {
      this.userInfo = userInfo;
    },
    setIsLogin(isLogin: boolean) {
      this.isLogin = isLogin;
    }
  }
})