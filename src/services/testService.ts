import { apiClient } from "./apiClient";

export const getAllTests = async () => {
  const res = await apiClient.get("/tests");
  return res.data;
};

export const attemptTest = async (testId: string, moduleId: string) => {
  const body = {
    test: testId,
    modules: [moduleId],
  };
  const { data } = await apiClient.post("/attempts", body);
  return data.result;
};

export const fetchAttempt = async (attemptId: string) => {
  const { data } = await apiClient.get(`/attempts/${attemptId}`);
  return data.result;
};
