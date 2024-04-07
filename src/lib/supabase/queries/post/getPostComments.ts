import { PostComment } from "../../schema/types";
import { commentsMock } from "./mocks";

export async function getPostComments(id: string): Promise<PostComment[]> {
  return commentsMock;
}
