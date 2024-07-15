<script>
  export let loggedIn = false;
  export let session = "";
  export let user;
  import { page } from '$app/stores';

  $: if ($page.data.loggedIn !== loggedIn) {
    loggedIn = $page.data.loggedIn;
    session = $page.data.session;
    user = $page.data.user;
  }
</script>

{#if loggedIn}
  <div class="relative inset-0 flex items-center justify-center mt-10 mb-16 min-h-screen py-8 bg-transparent z-40 animate-flip-up">
    <div class="border dark:bg-transparent dark:border-white dark:text-white border-gray-400 bg-gray-200 text-black p-8 rounded shadow-lg z-50 w-full max-w-2xl font-mono animate-delay-200 md:max-w-3xl overflow-y-auto">
      <p class="text-3xl font-mono font-bold text-center mb-6">{user.user_username}</p>
      <div class="bg-white dark:bg-black dark:text-white border dark:border-white border-gray-400 p-6 rounded shadow-md">
        <p class="text-lg italic">UUID: {user.user_id}</p>
        <p class="text-lg">Email: {user.user_email}</p>
        <p class="text-lg">Role: {user.user_role}</p>
        <p class="text-xl mt-6">Description:</p>
        <p class="text-2xl">{user.user_description}</p>
      </div>
    </div>
  </div>
{:else}
  <script>
    window.location.href = '/login';
  </script>
{/if}

<div class="fixed h-full w-full top-0 z-0 bg-gray-100 dark:bg-black/95"></div>
