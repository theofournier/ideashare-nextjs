import { Post } from "../../schema/types";
import { postsMock } from "./mocks";

export async function getProfilePosts(userId: string): Promise<Post[]> {
  return postsMock.filter((post) => post.user.id === userId);
}
