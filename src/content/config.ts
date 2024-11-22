import { defineCollection, z } from "astro:content";

const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  img: z.string(),
  readtime: z.number(),
  description: z.string(),
  buy: z.object({
    spain: z.string().url(),
    usa: z.string().url(),
  }),
})

// Definir el esquema de la colección
const books = defineCollection({
  schema: bookSchema
});

// Inferir el tipo de Book desde el esquema de zod
export type Book = z.infer<typeof bookSchema>;

// Exportar las colecciones
export const collections = { books };
