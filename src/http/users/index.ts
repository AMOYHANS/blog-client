import request from "../request";
import { User } from "@/types/user";

export const login = (data: Partial<User>) => {
  return request.post("/users/signin", data);
}

export const register = (data: Partial<User>) => {
  return request.post("/users/signup", data);
}