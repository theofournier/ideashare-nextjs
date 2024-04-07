export type User = {
  id: string;
  username?: string;
  avatarUrl?: string;
};

export type PostActivityInfo = {
  voteCount?: number;
  commentCount?: number;
  viewCount?: number;
};

export type Post = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  user: User;
  activityInfo?: PostActivityInfo;
  createdAt: string;
};

export type PostComment = {
  id: string;
  comment: string;
  user: User;
  createdAt: string;
};

export type ProfileActivityInfo = {
  followerCount?: number;
  followingCount?: number;
  postCount?: number;
  voteCount?: number;
  postVotedCount?: number;
};

export type Profile = {
  user: User;
  activityInfo: ProfileActivityInfo;
};
