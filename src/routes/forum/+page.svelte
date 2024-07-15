<script>
  export let loggedIn = false;
  export let session = "";
  export let posts;

  import { page } from '$app/stores';

  $: if ($page.data.loggedIn !== loggedIn) {
    loggedIn = $page.data.loggedIn;
    session = $page.data.session;
    posts = $page.data.posts;
  }
</script>

<div class="fixed h-full w-full top-0 z-0 bg-gray-100 dark:bg-black/95"></div>

{#if loggedIn}
  <div class="relative inset-0 flex items-center justify-center top-32 z-40 animate-flip-up">
    <div class="bg-gray-200 dark:bg-transparent border dark:border-white border-gray-400 p-4 rounded shadow-lg w-3/4 h-3/4 overflow-y-auto">
      <p class="bg-gray-200 dark:bg-transparent text-3xl font-mono font-bold text-center text-black dark:text-white p-10">FORUM</p>
      {#each posts as post}
        <a href={`/forum/${post.id}`} class="block">
          <div class="bg-white dark:bg-black dark:border-white border border-gray-400 text-black dark:text-white p-4 mb-4 rounded shadow-md hover:scale-95 transform transition-transform duration-300">
            <p class="text-xs italic">{post.id}</p>
            <p class="text-sm">{post.author.user_username} Posted:</p>
            <p class="text-2xl font-bold">{post.title}</p>
            <p class="text-sm">{post.createdAt}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>
{:else}
  <script>
    window.location.href = '/login';
  </script>
{/if}
