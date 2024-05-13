import prisma from "../../util/prisma";
import supabaseClient from "../../util/supabase";

export async function addPost({
  uuid,
  content,
}: {
  uuid: string;
  content: string;
}) {
  try {
    const response = await prisma.posts.create({
      data: {
        uuid,
        content,
      },
    });
    // BigIntを文字列に変換する処理
    const serializedResponse = {
      ...response,
      id: response.id.toString(),
    };

    return serializedResponse;
  } catch (e) {
    console.error(e);
    return e;
  }
}

export async function findPosts() {
  try {
    const posts = await prisma.posts.findMany();
    if (posts.length === 0) throw new Error("No posts found");
    // BigIntを文字列に変換する処理
    const serializedPosts = posts.map((post) => ({
      ...post,
      id: post.id.toString(),
    }));

    return serializedPosts;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function editPost({
  id,
  uuid,
  content,
}: {
  id: number;
  uuid: string;
  content: string;
}) {
  try {
    const { data, error } = await supabaseClient
      .from("posts")
      .update({ content })
      .match({ id, uuid });

    if (error) {
      console.error("編集エラー:", error);
      return { error: "編集エラーが発生しました" };
    }
    return { data };
  } catch (e) {
    console.error(e);
    return e;
  }
}

export async function deletePost({ id, uuid }: { id: number; uuid: string }) {
  try {
    const { data, error } = await supabaseClient
      .from("posts")
      .delete()
      .match({ id, uuid });

    if (error) {
      console.error("削除エラー:", error);
      return { error: "削除エラーが発生しました" };
    }
    return { data };
  } catch (e) {
    console.error(e);
    return e;
  }
}
