"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const server = (0, server_1.default)();
async function main() {
    try {
        await (await server).listen({ port: 3000 });
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}
main();
