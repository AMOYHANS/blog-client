import { defineStore } from "pinia";
import { Post } from "@/types/post";

export const usePostStore = defineStore("post", {
  state: () => {
    return {
      currentPost: {

      } as Partial<Post>,
      posts: [] as Partial<Post>[],
    }
  },
  actions: {
    setWritePost(post: Partial<Post>) {
      this.currentPost = post;
    },
    setPosts(posts: Partial<Post>[]) {
      this.posts.splice(0, this.posts.length);
      Object.assign(this.posts, posts);
    }
  },
  persist: true,
})