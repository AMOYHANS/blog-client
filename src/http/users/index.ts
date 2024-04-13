import request from "../request";

export const login = (data: any) => {
  return request.post("/users/signin", data);
}

export const register = (data: any) => {
  return request.post("/users/signup", data);
}