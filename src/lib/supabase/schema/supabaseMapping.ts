import { Database } from "./supabase.schema";
import {
  Post,
  PostActivityInfo,
  PostComment,
  PostVote,
  Profile,
  ProfileActivityInfo,
  User,
} from "./types";

type SupabaseUser = Database["public"]["Tables"]["profiles"]["Row"];

export const userMapping = (user: SupabaseUser): User => ({
  id: user.id,
  username: user.username || undefined,
  avatarUrl: user.avatar_url || undefined,
});

export const profileMapping = (
  user: SupabaseUser,
  activityInfo:
    | Database["public"]["Tables"]["profile_activity_infos"]["Row"]
    | null
): Profile => ({
  user: userMapping(user),
  activityInfo: profileActivityInfoMapping(activityInfo),
});

export const profileActivityInfoMapping = (
  activityInfo:
    | Database["public"]["Tables"]["profile_activity_infos"]["Row"]
    | null
): ProfileActivityInfo => ({
  voteCount: activityInfo?.vote_count,
  postVotedCount: activityInfo?.post_voted_count,
  postCount: activityInfo?.post_count,
  followerCount: activityInfo?.follower_count,
  followingCount: activityInfo?.following_count,
});

export const postMapping = (
  post: Database["public"]["Tables"]["posts"]["Row"],
  activityInfo:
    | Database["public"]["Tables"]["post_activity_infos"]["Row"]
    | null,
  user: SupabaseUser | null
): Post => ({
  id: post.id,
  title: post.title,
  shortDescription: post.short_description,
  description: post.description,
  createdAt: post.created_at,
  user: user ? userMapping(user) : undefined,
  activityInfo: postActivityInfoMapping(activityInfo),
});

export const postCommentMapping = (
  postComment: Database["public"]["Tables"]["post_comments"]["Row"],
  user?: SupabaseUser | null
): PostComment => ({
  id: postComment.id,
  postId: postComment.post_id,
  comment: postComment.comment,
  createdAt: postComment.created_at,
  user: user ? userMapping(user) : undefined,
});

export const postVoteMapping = (
  postVote: Database["public"]["Tables"]["post_votes"]["Row"]
): PostVote => ({
  id: postVote.id,
  userId: postVote.user_id,
  postId: postVote.post_id,
  createdAt: postVote.created_at,
});

export const postActivityInfoMapping = (
  activityInfo:
    | Database["public"]["Tables"]["post_activity_infos"]["Row"]
    | null
): PostActivityInfo => ({
  voteCount: activityInfo?.vote_count,
  commentCount: activityInfo?.comment_count,
  viewCount: activityInfo?.view_count,
});
