import { FastifyReply, FastifyRequest } from "fastify";
import { postInput } from "./post.schema";
import { addPost, deletePost, editPost, findPosts } from "./post.usecase";

export async function addPostHandler(
  request: FastifyRequest<{ Body: { uuid: string; content: string } }>,
  reply: FastifyReply,
) {
  const { uuid, content } = request.body;
  const data = await addPost({ uuid, content });
  if (data instanceof Error) return reply.code(500).send(data);
  return reply.code(200).send(data);
}

export async function getPostsHandler(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  console.log(request);
  const posts = await findPosts();
  if (posts instanceof Error) return reply.code(500).send(posts);
  return reply.code(200).send(posts);
}

export async function editPostHandler(
  request: FastifyRequest<{ Body: postInput }>,
  reply: FastifyReply,
) {
  const { id, uuid, content } = request.body;
  const data = await editPost({ id, uuid, content });
  if (data instanceof Error) return reply.code(500).send(data);
  return reply.code(200).send(data);
}

export async function deletePostHandler(
  request: FastifyRequest<{ Body: postInput }>,
  reply: FastifyReply,
) {
  const { uuid, id } = request.body;
  const result = await deletePost({ uuid, id });
  if (result instanceof Error) return reply.code(500).send(result);
  return reply.code(200).send(result);
}
