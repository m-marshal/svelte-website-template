import { isLoggedIn } from '$lib/auth/auth';
import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';
import { redirect, type Actions } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

const db = new PrismaClient();

export const load: PageServerLoad = async ({ cookies }) => {
  const loggedIn = isLoggedIn(cookies);
  const session = cookies.get('session');

  return {
     loggedIn,
     session
  };
};

export const actions: Actions = {
  default: async ({ request, cookies }: RequestEvent) => {
    const data = await request.formData();
  
    const answer = data.get('answer') as string;
    const selected = data.get('selected') as string;
    const session = cookies.get('session');
  
    if (selected === "1") {
      await db.user.update({
        where: { user_username: session },
        data: { user_username: answer }
      })

    }

    if (selected === "2") {
      await db.user.update({
        where: { user_username: session },
        data: { user_email: answer }
      })

    }

    if (selected === "3") {
      await db.user.update({
        where: { user_username: session },
        data: { user_description: answer }
      })

    }

    throw redirect(303, "/success")
    
  }
};
