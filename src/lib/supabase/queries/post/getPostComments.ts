import { PostComment } from "../../schema/types";
import { commentsMock } from "./mocks";

export async function getPostComments(postId: string): Promise<PostComment[]> {
  return commentsMock.filter((comment) => comment.postId === postId);
}
