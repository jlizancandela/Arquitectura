import { z, defineCollection } from 'astro:content';


const contenido = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        h1: z.string(),
        tags: z.array(z.string()),
        images: z.array(z.object({ url: z.string(), alt: z.string(), grid: z.string().optional() })).optional()
    })


});

export const collections = {
    'cards': contenido,
};