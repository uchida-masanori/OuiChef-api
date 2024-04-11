import Fastify from 'fastify';

import postRoutes from './modules/post/post.route';
// import userRoutes from './modules/user/user.route';

async function buildServer(){
    const server = Fastify({
        logger: true
    })



    // server.register(userRoutes, { prefix: "api/user" });
    server.register(postRoutes, { prefix: "api/post" });
    return server;
}

export default buildServer;