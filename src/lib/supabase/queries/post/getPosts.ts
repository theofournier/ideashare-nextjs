import { Post } from "../../schema/types";
import { postsMock } from "./mocks";

export async function getPosts(): Promise<Post[]> {
  return postsMock;
}
