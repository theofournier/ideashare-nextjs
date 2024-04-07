import { Post, PostComment } from "../../schema/types";
import { profile1, profile2, profile3, profile4 } from "../profile/mocks";

export const postsMock: Post[] = [
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
    user: profile1.user,
    activityInfo: {
      commentCount: 2,
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
    user: profile2.user,
    activityInfo: {
      commentCount: 2,
      viewCount: 200,
    },
    createdAt: "2024-02-01T18:45:00Z",
  },
  {
    id: "POST_3",
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
    user: profile3.user,
    activityInfo: {
      commentCount: 2,
      voteCount: 100,
      viewCount: 200,
    },
    createdAt: "2024-04-06T18:45:00Z",
  },
  {
    id: "POST_4",
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
    user: profile4.user,
    activityInfo: {
      commentCount: 2,
      viewCount: 200,
    },
    createdAt: "2024-04-01T18:45:00Z",
  },
];

export const commentsMock: PostComment[] = [
  {
    id: "POST_1_COMMENT_1",
    postId: "POST_1",
    comment:
      "This is my first post test. It is an incredible idea that will revolutionnize the world. You could even change your life.",
    user: profile1.user,
    createdAt: "2024-02-02T18:45:00Z",
  },
  {
    id: "POST_1_COMMENT_2",
    postId: "POST_1",
    comment:
      "This is my second post test. It is a shitty idea that will destroy the world. You could even change your life. This is my second post test. It is a shitty idea that will destroy the world. You could even change your life.",
    user: profile2.user,
    createdAt: "2024-02-01T18:45:00Z",
  },
  {
    id: "POST_2_COMMENT_1",
    postId: "POST_2",
    comment:
      "This is my first post test. It is an incredible idea that will revolutionnize the world. You could even change your life.",
    user: profile3.user,
    createdAt: "2024-04-02T18:45:00Z",
  },
  {
    id: "POST_2_COMMENT_2",
    postId: "POST_2",
    comment:
      "This is my second post test. It is a shitty idea that will destroy the world. You could even change your life. This is my second post test. It is a shitty idea that will destroy the world. You could even change your life.",
    user: profile4.user,
    createdAt: "2024-04-01T18:45:00Z",
  },
  {
    id: "POST_3_COMMENT_1",
    postId: "POST_3",
    comment:
      "This is my first post test. It is an incredible idea that will revolutionnize the world. You could even change your life.",
    user: profile4.user,
    createdAt: "2024-04-02T18:45:00Z",
  },
  {
    id: "POST_3_COMMENT_2",
    postId: "POST_3",
    comment:
      "This is my second post test. It is a shitty idea that will destroy the world. You could even change your life. This is my second post test. It is a shitty idea that will destroy the world. You could even change your life.",
    user: profile2.user,
    createdAt: "2024-04-01T18:45:00Z",
  },
  {
    id: "POST_4_COMMENT_1",
    postId: "POST_4",
    comment:
      "This is my first post test. It is an incredible idea that will revolutionnize the world. You could even change your life.",
    user: profile1.user,
    createdAt: "2024-04-02T18:45:00Z",
  },
  {
    id: "POST_4_COMMENT_2",
    postId: "POST_4",
    comment:
      "This is my second post test. It is a shitty idea that will destroy the world. You could even change your life. This is my second post test. It is a shitty idea that will destroy the world. You could even change your life.",
    user: profile3.user,
    createdAt: "2024-04-01T18:45:00Z",
  },
];
