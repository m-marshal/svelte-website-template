<script>
  export let loggedIn = false;

  import { page } from '$app/stores';
  $: loggedIn = $page.data.loggedIn;

  let password = "";
  let username = "";

  function chckempty() {
    if (password === "" || username === "") {
      alert("One or more fields are empty");
      event.preventDefault();
    }
  }
</script>

<form method="POST" action="/login" class="relative mt-10 inset-0 flex items-center justify-center min-h-screen py-8 bg-transparent z-40 animate-flip-down">
  <section class="border dark:bg-black dark:border-white dark:text-white border-gray-400 bg-gray-200 text-black p-8 rounded-3xl shadow-lg z-50 w-full max-w-sm font-mono animate-delay-200 md:max-w-md">
    <p class="text-3xl font-mono font-bold">LOG IN</p>
    <p>&#8203;</p>
    <p>Username</p>
    <input name="username" type="text" bind:value={username} class="dark:border-white block mb-2 p-2 border border-gray-400 rounded w-full text-black" />
    <p>Password</p>
    <input name="password" type="password" bind:value={password} class="dark:border-white block mb-2 p-2 border border-gray-400 rounded w-full text-black" />
    <button type="submit" on:click={chckempty} class="dark:border-white hover:scale-95 duration-300 border border-gray-400 transform transition-transform block w-full py-2 bg-logo-green text-black mt-5 rounded">Log In</button>
  </section>
</form>
