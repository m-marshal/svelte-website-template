<script>
  export let loggedIn = false;

  import { page } from '$app/stores';
  $: loggedIn = $page.data.loggedIn;

  let title = "";
  let content = "";

  function chckempty(event) {
    if (title === "" || content === "") {
      alert("One or more fields are empty");
      event.preventDefault();
    }
  }
</script>

<div class="fixed h-full w-full top-0 z-0 bg-gray-100 dark:bg-black/95"></div>

{#if loggedIn}
  <form method="POST" class="relative mt-10 inset-0 flex items-center justify-center min-h-screen py-8 bg-transparent z-40 animate-flip-down">
    <section class="border dark:bg-black dark:border-white dark:text-white border-gray-400 bg-gray-200 text-black p-8 rounded-3xl shadow-lg z-50 w-full max-w-sm font-mono animate-delay-200 md:max-w-md">
      <p class="text-3xl font-mono font-bold">CREATE A POST</p>
      <p>&#8203;</p>
      <p>Title</p>
      <input name="title" type="text" bind:value={title} class="dark:border-white block mb-2 p-2 border border-gray-400 rounded w-full text-black" />
      <p>Content</p>
      <textarea maxlength="1500" name="content" bind:value={content} class="dark:border-white block mb-2 p-2 h-20 border border-gray-400 rounded w-full text-black text-sm resize-y max-h-40"></textarea>
      <button type="submit" on:click={chckempty} class="dark:border-white hover:scale-95 duration-300 border border-gray-400 transform transition-transform block w-full py-2 bg-logo-green text-black mt-5 rounded">Post</button>
    </section>
  </form>
{:else}
  <script>
    window.location.href = '/login';
  </script>
{/if}
