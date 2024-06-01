import { customAxios } from '@/utils/customAxios';

export const getChallenges = async (sortBy: 'POPULAR' | 'LATEST') => {
  const { data } = await customAxios.get('/challenges', {
    params: {
      sortBy,
    },
  });
  return data;
};

export const getChallenge = async (challengeId: number) => {
  const { data } = await customAxios.get(`/challenges/${challengeId}`);
  return data;
};

export const participateChallenge = async (
  challengeId: number,
  token: string
) => {
  const { data } = await customAxios.post(`/challenges/${challengeId}`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
