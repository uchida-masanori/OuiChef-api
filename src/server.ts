import Fastify from "fastify";

import postRoutes from "./modules/post/post.route";

async function buildServer() {
  const server = Fastify({
    logger: true,
  });

  server.register(postRoutes, { prefix: "api/post" });
  return server;
}

export default buildServer;
