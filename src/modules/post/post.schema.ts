import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const addPostSchema = z.object({
  content: z.string().max(140),
  images: z.array(z.string().url()),
  uuid: z.string().uuid(),
});

export type postInput = z.infer<typeof addPostSchema>;

export const { schemas: postSchemas, $ref } = buildJsonSchemas(
  {
    addPostSchema,
  },
  { $id: "postSchema" },
);
