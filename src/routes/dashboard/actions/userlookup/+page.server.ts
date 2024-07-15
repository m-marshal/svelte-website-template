import { PrismaClient } from '@prisma/client';
import { isLoggedIn } from '$lib/auth/auth';
import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

const db = new PrismaClient();

export const actions: Actions = {
  default: async ({ request }: RequestEvent) => {
    const data = await request.formData();
    const username = String(data.get('username'))

  
    try {
      const user = await db.user.findUnique({
        where: {
          user_username: username
        }
      });

      if (!user) {
        throw redirect(303, '/success/unotfound');
      }

    } finally {
    }
  }
};

export const load: PageServerLoad = async ({ cookies }) => {
  const loggedIn = isLoggedIn(cookies);
  const session = cookies.get('session');

  return {
    loggedIn,
    session,
  };
}