import { isLoggedIn } from '$lib/auth/auth';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const load: PageServerLoad = async ({ params, cookies }) => {
  const loggedIn = isLoggedIn(cookies);
  const session = cookies.get('session');
  

  const user = await db.user.findUnique({
    where: { 
      user_username_lower: params.inpuser.toLowerCase()
    }
  });

  if (!user) {
    throw redirect(303, "/success/unotfound")
  }

  return {
    loggedIn,
    session,
    user,
  };
}
