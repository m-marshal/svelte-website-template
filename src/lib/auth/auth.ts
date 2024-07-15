import type { Cookies } from '@sveltejs/kit';

export function isLoggedIn(cookies: Cookies): boolean {
  const session = cookies.get('session');
  return session ? true : false;
}
