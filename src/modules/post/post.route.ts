import { FastifyInstance, FastifySchema } from "fastify";
import { addPostHandler } from "./post.controller";
import { findPosts } from "./post.services";

async function postRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      schema: {
        tags: ["投稿"],
        description: "投稿を追加するエンドポイント",
      } as FastifySchema,
    },
    addPostHandler,
  );

  server.get(
    "/",
    {
      schema: {
        tags: ["投稿"],
        description: "投稿を取得するエンドポイント",
      } as FastifySchema,
    },
    findPosts,
  );
}
// 外部モジュールから利用可能にする
export default postRoutes;
