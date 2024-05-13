"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ref = exports.postSchemas = void 0;
const fastify_zod_1 = require("fastify-zod");
const zod_1 = require("zod");
const addPostSchema = zod_1.z.object({
    content: zod_1.z.string().max(140),
    images: zod_1.z.array(zod_1.z.string().url()),
    uuid: zod_1.z.string().uuid(),
    id: zod_1.z.number(),
});
_a = (0, fastify_zod_1.buildJsonSchemas)({
    addPostSchema,
}, { $id: "postSchema" }), exports.postSchemas = _a.schemas, exports.$ref = _a.$ref;
