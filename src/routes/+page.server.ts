import prisma from '$lib/server/primsa';
import { json } from '@sveltejs/kit';

export const actions = {
  search: async ({ request }) => {
    const formData = await request.formData();

    const collections = await prisma.collection.findMany({
      where: {
        name: {
          contains: formData.get('search') as string,
        }
      }
    });

    return json(collections);
  }
};
