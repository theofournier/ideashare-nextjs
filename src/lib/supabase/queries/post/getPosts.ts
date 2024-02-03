import { Post } from "../../schema/types";

export async function getPosts(): Promise<Post[]> {
  return [
    {
      id: "POST_1",
      title: "My first post test",
      shortDescription:
        "This is my first post test. It is an incredible idea that will revolutionnize the world. You could even change your life.",
      description: `
    <h2 style="text-align: center;">My first post test</h2>
    <h3><em>What you see is what you get</em></h3>
    <p>This idea will revolutionnize the world, be ready:</p>
    <ul>
    <li><p>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s></p></li>
    <li><p>Headings (h1-h6)</p></li>
    <li><p>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</p></li>
    <li><p>Ordered and bullet lists</p></li>
    <li><p>Text align&nbsp;</p></li>
    <li><p><span style="color: #40c057">Colored text</span> and <mark>highlighted text</mark></p></li>
    <li><p><code>Code quote</code></p></li>
    </ul>
    `,
      user: {
        id: "USER_1",
        username: "User Name",
        avatarUrl: "",
      },
      activityInfo: {
        commentCount: 10,
        voteCount: 100,
        viewCount: 200,
      },
      createdAt: "2024-02-02T18:45:00Z",
    },
    {
      id: "POST_2",
      title: "My second post test with a long title",
      shortDescription:
        "This is my second post test. It is a shitty idea that will destroy the world. You could even change your life. This is my second post test. It is a shitty idea that will destroy the world. You could even change your life.",
      description: `
    <h2 style="text-align: center;">My second post test</h2>
    <h3><em>What you see is what you get</em></h3>
    <p>This idea will revolutionnize the world, be ready:</p>
    <ul>
    <li><p>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s></p></li>
    <li><p>Headings (h1-h6)</p></li>
    <li><p>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</p></li>
    <li><p>Ordered and bullet lists</p></li>
    <li><p>Text align&nbsp;</p></li>
    <li><p><span style="color: #40c057">Colored text</span> and <mark>highlighted text</mark></p></li>
    <li><p><code>Code quote</code></p></li>
    </ul>
    `,
      user: {
        id: "USER_2",
      },
      activityInfo: {
        commentCount: 10,
        viewCount: 200,
      },
      createdAt: "2024-02-01T18:45:00Z",
    },
  ];
}
