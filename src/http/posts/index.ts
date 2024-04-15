import request from "../request";
import { Post } from "@/types/post";

export const createPost = (data: Partial<Post>) => {
  return request.post("/posts", data);
}

export const getPost = (postId: number) => {
  return request.get(`/posts/${postId}`);
}

export const getAllPosts = () => {
  return request.get('/posts');
}

export const getAllPostsWithUserId = (userId: number) => {
  return request.get(`/posts?userId=${userId}`);
}

export const updatepost = (postId: number, data: Partial<Post>) => {
  return request.patch(`/posts/${postId}`, data);
}

export const deletePost = (postId: number) => {
  return request.delete(`/posts/${postId}`);
}