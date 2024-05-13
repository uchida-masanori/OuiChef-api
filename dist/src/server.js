"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const post_route_1 = __importDefault(require("./modules/post/post.route"));
async function buildServer() {
    const server = (0, fastify_1.default)({
        logger: true,
    });
    server.register(post_route_1.default, { prefix: "api/post" });
    return server;
}
exports.default = buildServer;
