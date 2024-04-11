"use strict";
// SupabaseのURLとアプリケーションの公開キーを使用してクライアントを初期化
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsHandler = exports.addPostHandler = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const post_services_1 = require("./post.services");
async function addPostHandler(request, reply) {
    const supabase = (0, supabase_js_1.createClient)('https://uaalfxnunnkytcjxtlts.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhYWxmeG51bm5reXRjanh0bHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyNTg5MzksImV4cCI6MjAyMTgzNDkzOX0.lRdxvBytULaa2UmC8KaPQ1Nk4pe5n1mOJb6Unz9qK_A');
    // const body = request.body;
    // const { content,images} = body;
    const content = 'RLSポリシーを追加してます';
    // const images = ['test images'];
    const uuid = '5cedb5fb-97d7-4841-b68c-a0590192a7b0';
    try {
        const { data, error } = await supabase.from('posts').insert([
            { uuid, content },
        ]);
        if (error) {
            throw error;
        }
        reply.send({ data });
    }
    catch (e) {
        console.error('投稿エラー:', e);
        reply.code(500).send({ error: '投稿エラーが発生しました' });
    }
}
exports.addPostHandler = addPostHandler;
async function getPostsHandler(request, reply) {
    const posts = await (0, post_services_1.findPosts)();
    if (posts instanceof Error)
        return reply.code(500).send(posts);
    return reply.code(200).send(posts);
}
exports.getPostsHandler = getPostsHandler;
