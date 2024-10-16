import { apiClient } from "./apiClient";

export const getAllTests = async () => {
  const res = await apiClient.get("/tests");
  console.log(res);
};
