import { isLoggedIn } from '$lib/auth/auth';
import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();


export const load: PageServerLoad = async ({ cookies }) => {
  const loggedIn = isLoggedIn(cookies);
  const session = cookies.get('session');

  const posts = await db.post.findMany({
    include: {
      author: true,
    },
  });
    return {
      loggedIn,
      session,
      posts
    };
  }