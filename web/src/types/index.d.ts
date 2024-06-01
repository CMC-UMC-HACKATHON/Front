type SignupPayload = {
  loginId: string;
  username: string;
  gender: string;
  password: string;
  checkPassword: string;
  phoneNumber: string;
};

type SigninPayload = {
  loginId: string;
  password: string;
};

type ChallengeType = {
  challengeId: number;
  title: string;
  endDate: string;
  startDate: string;
  category: 'COMMON' | 'EXERCISE' | 'DAILY' | 'CULTURE';
  rewardType: 'MONEY' | 'RANDOM_BOX';
  participantNum: number;
  challengeAmount: number;
  challengeTotalAmount: number;
};

type MissionType = {
  missionId: number;
  proofUrl: string;
  missionStatus: 'COMPLETE' | 'IN_PROGRESS';
  missionType: 'REQUIRE' | 'OPTION';
  missionName: string;
};
