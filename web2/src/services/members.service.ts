import { customAxios } from "@/lib/customAxios";

export const signup = async (payload: SignupPayload) => {
  const { data } = await customAxios.post("/members/sign-up", payload);
  return data;
};

export const login = async (payload: SigninPayload) => {
  const { data } = await customAxios.post("/members/login", payload);
  return data;
};
