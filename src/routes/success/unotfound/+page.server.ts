import { isLoggedIn } from '$lib/auth/auth';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
  const loggedIn = isLoggedIn(cookies);
  const session = cookies.get('session')
  return { loggedIn, session };
};
