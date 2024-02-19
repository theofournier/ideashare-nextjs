export type User = {
  id: string;
  username?: string;
  avatarUrl?: string;
};

export type ActivityInfo = {
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
  activityInfo?: ActivityInfo;
  createdAt: string;
};

export type PostComment = {
  id: string;
  comment: string;
  user: User;
  createdAt: string;
};
