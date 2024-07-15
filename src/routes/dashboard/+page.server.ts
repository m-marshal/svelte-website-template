import { isLoggedIn } from '$lib/auth/auth';
import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';
import { redirect } from '@sveltejs/kit';

const db = new PrismaClient();

export const load: PageServerLoad = async ({ cookies }) => {
  const loggedIn = isLoggedIn(cookies);
  const session = cookies.get('session');

  if (!loggedIn) {
    return { loggedIn: false };
  }

  try {
    const user = await db.user.findUnique({
      where: { user_username: session }
    });

    if (!user) {
      throw redirect(303, "/success/unotfound");
    }

    const posts = await db.post.findMany({
      where: { authorId: user.user_id },
      include: {
        author: true,
      },
    });

    return {
      loggedIn: true,
      session,
      mail: user.user_email,
      role: user.user_role,
      id: user.user_id,
      uname: user.user_username,
      desc: user.user_description,
      posts
    };
  } catch (error) {
    console.error("Error loading data:", error);
    return { loggedIn: false };
  }
};
