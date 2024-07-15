<script>
    export let post;
    export let loggedIn = false;
    export let session = "";
    import { page } from '$app/stores';

    $: if ($page.data.loggedIn !== loggedIn) {
    loggedIn = $page.data.loggedIn;
    session = $page.data.session;
    post = $page.data.post;
  }
  </script>

{#if loggedIn}
  <div class="relative inset-0 flex items-center justify-center top-32 mb-16 mt-4 z-40 animate-flip-up">
    <div class="bg-gray-200 dark:bg-transparent border dark:border-white border-gray-400 p-4 rounded shadow-lg w-3/4 h-3/4 overflow-y-auto">
      <p class=" text-3xl dark:text-white font-mono font-bold text-center text-black p-10">{post.title}</p>
    <div class="bg-white dark:text-white dark:bg-black border border-gray-400 text-black p-4 mb-4 rounded shadow-md">
      <p class="text-xs italic">ID: {post.id}</p>
      <p class="text-sm">{post.author.user_username} Posted:</p>
      <p class="text-sm">{post.createdAt}</p>
      <p class="text-2xl mt-6">{post.content}</p>
    </div>
</div>
</div>
{:else}
  <script>
    window.location.href = '/login';
  </script>
{/if}
  
<div class="fixed h-full w-full top-0 z-0 bg-gray-100 dark:bg-black/95"></div>