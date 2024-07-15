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
  
    const title = data.get('title') as string;
    const content = data.get('content') as string;
  
    const session = cookies.get('session');
  
    try {
      const user = await db.user.findUnique({
        where: {
          user_username: session
        }
      });

      if (!user) {
        throw new Error('User not found'); 
      }

      const post = await db.post.create({
        data: {
          title: title,
          content: content,
          authorId: user.user_id
        }
      });
      console.log('Post created:', post);
      
      throw redirect(303, '/success');

    } finally {
    }
  }
};
