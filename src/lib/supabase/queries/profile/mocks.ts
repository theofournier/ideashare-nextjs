import { Profile } from "../../schema/types";

export const profilesMock: Profile[] = [
  {
    user: {
      id: "USER_1",
      username: "User Name",
      avatarUrl: "",
    },
    activityInfo: {
      followerCount: 10,
      postCount: 2,
      voteCount: 20,
    },
  },
  {
    user: {
      id: "USER_2",
      username: "User2 Name2",
      avatarUrl: "",
    },
    activityInfo: {
      followerCount: 100,
      postCount: 20,
      voteCount: 200,
    },
  },
];
