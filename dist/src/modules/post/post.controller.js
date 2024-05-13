"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostHandler = exports.editPostHandler = exports.getPostsHandler = exports.addPostHandler = void 0;
const post_usecase_1 = require("./post.usecase");
async function addPostHandler(request, reply) {
    const { uuid, content } = request.body;
    const data = await (0, post_usecase_1.addPost)({ uuid, content });
    if (data instanceof Error)
        return reply.code(500).send(data);
    return reply.code(200).send(data);
}
exports.addPostHandler = addPostHandler;
async function getPostsHandler(request, reply) {
    console.log(request);
    const posts = await (0, post_usecase_1.findPosts)();
    if (posts instanceof Error)
        return reply.code(500).send(posts);
    return reply.code(200).send(posts);
}
exports.getPostsHandler = getPostsHandler;
async function editPostHandler(request, reply) {
    const { id, uuid, content } = request.body;
    const data = await (0, post_usecase_1.editPost)({ id, uuid, content });
    if (data instanceof Error)
        return reply.code(500).send(data);
    return reply.code(200).send(data);
}
exports.editPostHandler = editPostHandler;
async function deletePostHandler(request, reply) {
    const { uuid, id } = request.body;
    const result = await (0, post_usecase_1.deletePost)({ uuid, id });
    if (result instanceof Error)
        return reply.code(500).send(result);
    return reply.code(200).send(result);
}
exports.deletePostHandler = deletePostHandler;
