import request from "../request";
import { User } from "@/types/user";

export const login = (data: Partial<User>) => {
  return request.post("/users/signin", data);
}

export const register = (data: Partial<User>) => {
  return request.post("/users/signup", data);
}

export const updateUser = (id: number, data: Partial<User>) => {
  return request.put(`/users/${id}`, data);
}
export const getUser = (id: number) => {
  return request.get(`/users/${id}`);
}