import { defineStore } from "pinia";
import { User } from "@/types/user";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      // 用户信息
      userInfo: {
        email: 'example@example.com',
        name:  '张三',
        avatar:  import.meta.env.VITE_DEFAULT_AVATAR,
        bgImg: import.meta.env.VITE_DEFAULT_BGIMG,
        gender: 0,
        desc:  '该用户没有默认签名',
      } as Partial<User>,
      isLogin: false,
      userId: 0,
    }
  },
  actions: {
    // 修改用户信息
    setUserInfo(userInfo: Partial<User>) {
      const {id, ...others} = userInfo
      this.userInfo = others;
      this.userId = id || 0;
      !this.userInfo.avatar && (this.userInfo.avatar = import.meta.env.VITE_DEFAULT_AVATAR)
      !this.userInfo.bgImg && (this.userInfo.bgImg = import.meta.env.VITE_DEFAULT_BGIMG)
    },
    setIsLogin(isLogin: boolean) {
      this.isLogin = isLogin;
    }
  },
  persist: true,
})