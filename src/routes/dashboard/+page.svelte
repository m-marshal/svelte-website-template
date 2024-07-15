<script lang="ts">
  export let loggedIn = false;
  export let session = "";
  export let mail = "";
  export let role = "";
  export let id = "";
  export let uname = "";
  export let desc = "";
  export let posts
  import { page } from '$app/stores';

  let inpuser = "";
  
  $: if ($page.data.loggedIn !== loggedIn) {
    loggedIn = $page.data.loggedIn;
    session = $page.data.session;
    mail = $page.data.mail;
    role = $page.data.role;
    id = $page.data.id;
    uname = $page.data.uname;
    desc = $page.data.desc;
    posts = $page.data.posts
  }
</script>

<div class="fixed h-full w-full top-0 z-0 bg-gray-100 dark:bg-black/95"></div>

{#if loggedIn}
  <div class="relative flex flex-col h-full m-3 mt-24">
    <div class="relative flex justify-between h-96 mb-10 animate-flip-down">
      <section class="bg-gray-200 dark:border-white dark:bg-black dark:text-white text-black border-gray-400 mt-10 border p-4 h-full w-1/2 rounded shadow-lg z-50 font-mono animate-delay-200 overflow-hidden mr-1.5">
        <p class="text-3xl text-left font-mono font-bold">HELLO, {session.toUpperCase()}</p>
        <p class="text-2xl text-left font-mono">UUID: {id}</p>
        <p class="text-2xl text-left font-mono">Username: {uname}</p>
        <p class="text-2xl text-left font-mono">E-Mail: {mail}</p>
        <p class="text-2xl text-left font-mono">Role: {role}</p>
        <p>&#8203;</p>
        <p class="text-2xl text-left font-mono">Description:</p>
        <p class="text-2xl text-left font-mono">{desc}</p>
      </section>
      <section class="bg-gray-200 dark:border-white dark:bg-black dark:text-white text-black border-gray-400 mt-10 border p-4 h-full w-1/2 rounded shadow-lg z-50 font-mono animate-delay-200 overflow-hidden mr-1.5">
          <p class="text-3xl text-left font-mono font-bold mb-6">ACTIONS</p>
          <a href="/dashboard/actions/createpost" class="mb-5 dark:border-white hover:scale-95 transform transition-transform duration-300 text-black border border-gray-400 block w-1/2 py-2 bg-logo-green rounded text-center animate-fade-down">Create a Post</a>
          <a href="/dashboard/actions/userlookup" class="mb-5 dark:border-white hover:scale-95 transform transition-transform duration-300 text-black border border-gray-400 block w-1/2 py-2 bg-logo-green rounded text-center animate-fade-down">User Lookup</a>
          <a href="/dashboard/actions/edituser" class="mb-5 dark:border-white hover:scale-95 transform transition-transform duration-300 text-black border border-gray-400 block w-1/2 py-2 bg-logo-green rounded text-center animate-fade-down">Edit User Details</a>
      </section>
    </div>
    <div class="mt-10 relative overflow-y-auto h-80 animate-flip-up shadow-lg">
      <section class="bg-gray-200 dark:border-white dark:bg-transparent dark:text-white text-black border border-gray-400 p-4 h-full rounded shadow-lg z-50 font-mono animate-delay-200 overflow-y-auto">
        <p class="text-3xl text-left font-mono font-bold pb-3">RECENT ACTIVITY</p>
        {#each posts as post}
        <a href={`/forum/${post.id}`} class="block">
        <div class="bg-white dark:bg-black dark:border-white dark:text-white border hover:scale-95 transform transition-transform duration-300 border-gray-400 p-4 mb-4 rounded shadow-md">
          <p class="text-sm">{post.author.user_username}</p>
          <p class="text-2xl font-bold">{post.title}</p>
          <p class="text-sm">{post.createdAt}</p>
        </div>
        </a>
      {/each}
      </section>
    </div>
  </div>
{:else}
  <script>
    window.location.href = '/login';
  </script>
{/if}
