"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_controller_1 = require("./post.controller");
async function postRoutes(server) {
    // 投稿追加のルート
    server.post("/", {
        schema: {
            tags: ["投稿追加"],
            description: "投稿を追加するエンドポイント",
        },
    }, post_controller_1.addPostHandler);
    // 投稿前取得のルート
    server.get("/", {
        schema: {
            tags: ["投稿全取得"],
            description: "投稿をすべて取得するエンドポイント",
        },
    }, post_controller_1.getPostsHandler);
    // 投稿編集ルート
    server.post("/edit", {
        schema: {
            tags: ["投稿修正"],
            description: "投稿を更新するエンドポイント",
        },
    }, post_controller_1.editPostHandler);
    // 投稿削除ルート
    server.post("/delete", {
        schema: {
            tags: ["投稿削除"],
            description: "投稿を削除するエンドポイント",
        },
    }, post_controller_1.deletePostHandler);
}
// 外部モジュールから利用可能にする
exports.default = postRoutes;
