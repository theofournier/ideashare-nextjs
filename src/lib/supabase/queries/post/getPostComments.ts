import { Post, PostComment } from "../../schema/types";

export async function getPostComments(id: string): Promise<PostComment[]> {
  return [
    {
      id: "POST_1_COMMENT_1",
      comment:
        "This is my first post test. It is an incredible idea that will revolutionnize the world. You could even change your life.",
      user: {
        id: "USER_1",
        username: "User Name",
        avatarUrl: "",
      },
      createdAt: "2024-02-02T18:45:00Z",
    },
    {
      id: "POST_1_COMMENT_2",
      comment:
        "This is my second post test. It is a shitty idea that will destroy the world. You could even change your life. This is my second post test. It is a shitty idea that will destroy the world. You could even change your life.",
      user: {
        id: "USER_2",
      },
      createdAt: "2024-02-01T18:45:00Z",
    },
  ];
}
