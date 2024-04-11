import prisma from "../../util/prisma";

export async function findPosts() {
  try {
    const posts = await prisma.posts.findMany();
    if (posts.length === 0) throw new Error("No posts found");
    // BigIntを文字列に変換する処理を追加
    const serializedPosts = posts.map((post) => ({
      ...post,
      // 仮にidがBigInt型の場合、ここで文字列に変換
      id: post.id.toString(),
      // 他にBigInt型のフィールドがあれば、同様に変換
    }));

    return serializedPosts;
  } catch (err) {
    console.error(err);
  }
}
