import { isLoggedIn } from '$lib/auth/auth';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
  const loggedIn = isLoggedIn(cookies);
  return { loggedIn };
};
