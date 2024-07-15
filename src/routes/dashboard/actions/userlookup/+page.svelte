<script>
  export let loggedIn = false;
  export let session = "";
  export let inpuser = "";
  import { page } from '$app/stores';

  $: if ($page.data.loggedIn !== loggedIn) {
    loggedIn = $page.data.loggedIn;
    session = $page.data.session;
  }

  function chckempty() {
    if (inpuser == "") {
      alert("Field is empty")
      event?.preventDefault()
    }
  }
</script>

{#if loggedIn}
  <form method="POST" class="relative mt-10 inset-0 flex items-center justify-center min-h-screen py-8 bg-transparent z-40 animate-flip-down">
    <section class="border dark:bg-black dark:border-white dark:text-white border-gray-400 bg-gray-200 text-black p-8 rounded-3xl shadow-lg z-50 w-full max-w-sm font-mono animate-delay-200 md:max-w-md">
      <p class="text-3xl font-mono font-bold">User Lookup</p>
      <p>&#8203;</p>
      <p>Username</p>
      <input name="username" bind:value={inpuser} type="text" class="block mb-2 p-2 border dark:border-white border-gray-400 rounded w-full text-black dark:text-white" />
      <a href={`/dashboard/actions/userlookup/${inpuser}`} class="block">
        <button type="submit" on:click={chckempty} class="dark:border-white hover:scale-95 transform transition-transform duration-300 border border-gray-400 block w-full py-2 bg-logo-green text-black dark:text-black mt-5 rounded">Lookup</button>
      </a>
    </section>
  </form>
{:else}
  <script>
    window.location.href = '/login';
  </script>
{/if}
<div class="fixed h-full w-full top-0 z-0 bg-gray-100 dark:bg-black/95"></div>
