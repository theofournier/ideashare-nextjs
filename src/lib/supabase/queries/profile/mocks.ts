import { Profile } from "../../schema/types";

export const currentUserMock: Profile = {
  user: {
    id: "bae0b246-c53d-4fcf-a049-f82f8ffca8bb",
    username: "Theo Test",
    avatarUrl: "",
  },
  activityInfo: {
    followerCount: 10,
    followingCount: 2,
    postCount: 2,
    voteCount: 20,
    postVotedCount: 2,
  },
};

export const profile1: Profile = {
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
};

export const profile2: Profile = {
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
};

export const profile3: Profile = {
  user: {
    id: "USER_3",
    username: "User3 Name3",
    avatarUrl: "",
  },
  activityInfo: {
    followerCount: 100,
    followingCount: 2,
    postCount: 2,
    voteCount: 200,
    postVotedCount: 2,
  },
};

export const profile4: Profile = {
  user: {
    id: "USER_4",
    username: "User4 Name4",
    avatarUrl: "",
  },
  activityInfo: {
    followerCount: 100,
    followingCount: 2,
    postCount: 2,
    voteCount: 200,
    postVotedCount: 2,
  },
};

export const profilesMock: Profile[] = [currentUserMock, profile1, profile2, profile3, profile4];
