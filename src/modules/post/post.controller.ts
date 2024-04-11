// SupabaseのURLとアプリケーションの公開キーを使用してクライアントを初期化

import { createClient } from "@supabase/supabase-js";
import { FastifyReply, FastifyRequest } from "fastify";
import { postInput } from "./post.schema";
import { findPosts } from "./post.services";

export async function addPostHandler(
  request: FastifyRequest<{ Body: postInput }>,
  reply: FastifyReply,
) {
  const supabase = createClient(
    "https://uaalfxnunnkytcjxtlts.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhYWxmeG51bm5reXRjanh0bHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyNTg5MzksImV4cCI6MjAyMTgzNDkzOX0.lRdxvBytULaa2UmC8KaPQ1Nk4pe5n1mOJb6Unz9qK_A",
  );
  // const body = request.body;
  // const { content,images} = body;
  const content = "RLSポリシーを追加してます";
  // const images = ['test images'];
  const uuid = "5cedb5fb-97d7-4841-b68c-a0590192a7b0";

  try {
    const { data, error } = await supabase
      .from("posts")
      .insert([{ uuid, content }]);

    if (error) {
      throw error;
    }

    reply.send({ data });
  } catch (e) {
    console.error("投稿エラー:", e);
    reply.code(500).send({ error: "投稿エラーが発生しました" });
  }
}

export async function getPostsHandler(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const posts: unknown = await findPosts();
  if (posts instanceof Error) return reply.code(500).send(posts);

  return reply.code(200).send(posts);
}
