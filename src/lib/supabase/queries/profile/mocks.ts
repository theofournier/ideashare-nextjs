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
      followingCount: 2,
      postCount: 2,
      voteCount: 20,
      postVotedCount: 2,
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
      followingCount: 2,
      postCount: 2,
      voteCount: 200,
      postVotedCount: 2,
    },
  },
];
