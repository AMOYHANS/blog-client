import { requestFile } from "../request";

export const uploadFile = (data: FormData) => {
  return requestFile.post("/upload", data);
}