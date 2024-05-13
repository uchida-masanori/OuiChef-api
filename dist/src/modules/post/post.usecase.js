"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.editPost = exports.findPosts = exports.addPost = void 0;
const prisma_1 = __importDefault(require("../../util/prisma"));
const supabase_1 = __importDefault(require("../../util/supabase"));
async function addPost({ uuid, content, }) {
    try {
        const response = await prisma_1.default.posts.create({
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
    }
    catch (e) {
        console.error(e);
        return e;
    }
}
exports.addPost = addPost;
async function findPosts() {
    try {
        const posts = await prisma_1.default.posts.findMany();
        if (posts.length === 0)
            throw new Error("No posts found");
        // BigIntを文字列に変換する処理
        const serializedPosts = posts.map((post) => ({
            ...post,
            id: post.id.toString(),
        }));
        return serializedPosts;
    }
    catch (err) {
        console.error(err);
        return err;
    }
}
exports.findPosts = findPosts;
async function editPost({ id, uuid, content, }) {
    try {
        const { data, error } = await supabase_1.default
            .from("posts")
            .update({ content })
            .match({ id, uuid });
        if (error) {
            console.error("編集エラー:", error);
            return { error: "編集エラーが発生しました" };
        }
        return { data };
    }
    catch (e) {
        console.error(e);
        return e;
    }
}
exports.editPost = editPost;
async function deletePost({ id, uuid }) {
    try {
        const { data, error } = await supabase_1.default
            .from("posts")
            .delete()
            .match({ id, uuid });
        if (error) {
            console.error("削除エラー:", error);
            return { error: "削除エラーが発生しました" };
        }
        return { data };
    }
    catch (e) {
        console.error(e);
        return e;
    }
}
exports.deletePost = deletePost;
