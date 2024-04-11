"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_controller_1 = require("./post.controller");
const post_services_1 = require("./post.services");
async function postRoutes(server) {
    server.post('/', { schema: {
            tags: ['投稿'],
            description: '投稿を追加するエンドポイント',
        }
    }, post_controller_1.addPostHandler);
    server.get('/', { schema: {
            tags: ['投稿'],
            description: '投稿を取得するエンドポイント',
        }
    }, post_services_1.findPosts);
}
// 外部モジュールから利用可能にする
exports.default = postRoutes;
