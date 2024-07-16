import { PrismaClient } from '@prisma/client';
import { compareSync } from 'bcrypt-ts';
import { redirect, type Actions } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

const db = new PrismaClient();

import { isLoggedIn } from '$lib/auth/auth';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
  const loggedIn = isLoggedIn(cookies);
  return { loggedIn };
};

export const actions: Actions = {
  default: async ({ request, cookies }: RequestEvent) => {
    const data = await request.formData();

    const username = data.get('username') as string;
    const password = data.get('password') as string;

    try {
      const user = await db.user.findFirst({
        where: {
          OR: [
            { user_username: { equals: username } },
            { user_username_lower: { equals: username.toLowerCase() } }
          ]
        }
      });

      if (!user) {
        throw redirect(303, '/success/unotfound');
      }

      if (!compareSync(password, user.user_password_hash)) {
        throw redirect(303, '/success/passfail');
      }


      if (compareSync(password, user.user_password_hash)) {
        cookies.set('session', user.user_username, {
          httpOnly: true,
          secure: true,
          maxAge: 60 * 60 * 24,
          path: "/",
        });

        throw redirect(303, '/success');
      }

    } finally {
      console.log("Response ok");
    }
  }
};
