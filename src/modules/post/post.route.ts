import { FastifyInstance, FastifySchema } from "fastify";
import {
  addPostHandler,
  deletePostHandler,
  editPostHandler,
  getPostsHandler,
} from "./post.controller";

async function postRoutes(server: FastifyInstance) {
  // 投稿追加のルート
  server.post(
    "/",
    {
      schema: {
        tags: ["投稿追加"],
        description: "投稿を追加するエンドポイント",
      } as FastifySchema,
    },
    addPostHandler,
  );

  // 投稿前取得のルート
  server.get(
    "/",
    {
      schema: {
        tags: ["投稿全取得"],
        description: "投稿をすべて取得するエンドポイント",
      } as FastifySchema,
    },
    getPostsHandler,
  );

  // 投稿編集ルート
  server.post(
    "/edit",
    {
      schema: {
        tags: ["投稿修正"],
        description: "投稿を更新するエンドポイント",
      } as FastifySchema,
    },
    editPostHandler,
  );

  // 投稿削除ルート
  server.post(
    "/delete",
    {
      schema: {
        tags: ["投稿削除"],
        description: "投稿を削除するエンドポイント",
      } as FastifySchema,
    },
    deletePostHandler,
  );
}
// 外部モジュールから利用可能にする
export default postRoutes;
