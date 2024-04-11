"use strict";
// import { createClient } from '@supabase/supabase-js';
// import { FastifyReply, FastifyRequest } from "fastify";
// import { CreateEmailUserInput } from "./user.schema";
// // SupabaseのURLとアプリケーションの公開キーを使用してクライアントを初期化
// // TODO: 秘匿化する
// const supabase = createClient('https://uaalfxnunnkytcjxtlts.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhYWxmeG51bm5reXRjanh0bHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyNTg5MzksImV4cCI6MjAyMTgzNDkzOX0.lRdxvBytULaa2UmC8KaPQ1Nk4pe5n1mOJb6Unz9qK_A');
// // メールアドレスでのユーザー登録時に走る処理
// export async function signInWithEmail(
//     request: FastifyRequest<{
//     Body: CreateEmailUserInput;
//   }>,
//     reply: FastifyReply,
// ) {
//  const email = 'uchida.m@docodoor.co.jp';
//  const password = 'Dd180209';
//   try{
//     console.log('hello');
//     const { data, error } = await supabase.auth.signUp({
//     email: email,
//     password: password,
//   })
//     if (error) {
//       throw error;
//     }
//     // ログイン成功時、ユーザー情報を返す
//     reply.send({ data });
//     console.log(data);
//   }catch(e){
//     // エラーが発生した場合の処理
//     console.error('ログインエラー:', e);
//     reply.code(500).send({ error: 'ログインエラーが発生しました' });
//   }
// }
