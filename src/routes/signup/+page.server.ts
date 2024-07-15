import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

import { isLoggedIn } from '$lib/auth/auth';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { hashSync } from 'bcrypt-ts';

export const load: PageServerLoad = ({ cookies }) => {
  const loggedIn = isLoggedIn(cookies);
  return { loggedIn };
};

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    const name = String(data.get('name'));
    const userEmail = String(data.get('userEmail'));
    const password = String(data.get('password'));
    const description = String(data.get('description'))
    let namelower = String(name.toLowerCase())
    let hashedpassword = hashSync(password)

    try {
      const existingUser = await db.user.findFirst({
        where: {
          OR: [
            { user_username: name },
            { user_email: userEmail },
            { user_username_lower: namelower }
          ]
        }
      });

      if (existingUser) {
       redirect(303, '/success/alrexist');
      }

      const user = await db.user.create({
        data: {
          user_username: name,
          user_username_lower: namelower,
          user_email: userEmail,
          user_description: description,
          user_password_hash: hashedpassword
        }
      });
      redirect(303, '/success');
    } finally {
    
    }
  }
};
