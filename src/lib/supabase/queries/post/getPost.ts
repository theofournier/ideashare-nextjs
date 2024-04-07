import { Post } from "../../schema/types";
import { postsMock } from "./mocks";

export async function getPost(id: string): Promise<Post | undefined> {
  return postsMock.find((post) => post.id === id);
}
