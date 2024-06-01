import { customAxios } from '@/utils/customAxios';

export const getMissions = async (challengeId: number) => {
  const { data } = await customAxios.get(`/missions/${challengeId}`);
  return data;
};

export const getMissionsByWeek = async (challengeId: number) => {
  const { data } = await customAxios.get(`/missions/${challengeId}/week`);
  return data;
};
