import { isLoggedIn } from '$lib/auth/auth';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const load: PageServerLoad = async ({ params, cookies }) => {
  const loggedIn = isLoggedIn(cookies);
  const session = cookies.get('session');
  

  const post = await db.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
    include: {
      author: true, 
    },
  });

  if (!post) {
    throw redirect(303, "/success/unotfound")
  }

  return {
    loggedIn,
    session,
    post,
  };
}
