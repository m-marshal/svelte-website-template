<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  import IoIosMoon from 'svelte-icons/io/IoIosMoon.svelte'
  import IoIosSunny from 'svelte-icons/io/IoIosSunny.svelte'

  export let loggedIn = false;
  export let session = "";

  $: if ($page.data.loggedIn !== loggedIn) {
    loggedIn = $page.data.loggedIn;
    session = $page.data.session;
  }

  let darkMode = false;
  onMount(() => {
    darkMode = localStorage.getItem('darkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', darkMode);
  });
  function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }
</script>

<header class="fixed left-0 right-0 border-b-2 dark:border-white border-black bg-white dark:bg-black animate-fade-down p-3 z-50 top-0 overflow-hidden">
  <nav class="flex dark:bg-black dark:text-white justify-between items-center bg-white text-black rounded-2xl px-4 overflow-hidden">
    <img src="/Logo-tr.png" alt="logo" class="w-14 h-16 mr-1 rounded-2xl animate-delay-500 animate-fade-right"/>
    <ul class="flex items-center list-none space-x-8 flex-1">
      {#if !loggedIn}
        <li class="text-2xl flex ml-4 items-center font-mono h-full { $page.url.pathname === '/home' ? 'animate-pulse' : '' }" aria-current={$page.url.pathname === '/home' ? 'page' : undefined}>
          <a href="/home" class="hover:text-logo-green transition-colors duration-200 animate-fade-left animate-delay-200">HOME</a>
        </li>
        <li class="text-2xl flex items-center h-full font-mono { $page.url.pathname === '/about' ? 'animate-pulse' : '' }" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
          <a href="/about" class="hover:text-logo-green transition-colors duration-200 animate-fade-left animate-delay-500">ABOUT</a>
        </li>
        <li class="text-2xl flex items-center h-full font-mono { $page.url.pathname === '/login' ? 'animate-pulse' : '' }" aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
          <a href="/login" class="hover:text-logo-green transition-colors duration-200 animate-fade-left animate-delay-500">LOGIN</a>
        </li>
        <li class="text-2xl flex items-center h-full font-mono { $page.url.pathname === '/signup' ? 'animate-pulse' : '' }" aria-current={$page.url.pathname === '/signup' ? 'page' : undefined}>
          <a href="/signup" class="hover:text-logo-green transition-colors duration-200 animate-fade-left animate-delay-500">SIGNUP</a>
        </li>
      {/if}
      {#if loggedIn}
        <li class="text-2xl flex ml-4 items-center h-full font-mono { $page.url.pathname === '/home' ? 'animate-pulse' : '' }" aria-current={$page.url.pathname === '/home' ? 'page' : undefined}>
          <a href="/home" class="hover:text-logo-green transition-colors duration-200 animate-fade-left animate-delay-200">HOME</a>
        </li>
        <li class="text-2xl flex items-center h-full font-mono { $page.url.pathname === '/about' ? 'animate-pulse' : '' }" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
          <a href="/about" class="hover:text-logo-green transition-colors duration-200 animate-fade-left animate-delay-500">ABOUT</a>
        </li>
        <li class="text-2xl flex items-center h-full font-mono { $page.url.pathname === '/forum' ? 'animate-pulse' : '' }" aria-current={$page.url.pathname === '/forum' ? 'page' : undefined}>
          <a href="/forum" class="hover:text-logo-green transition-colors duration-200 animate-fade-left animate-delay-500">FORUM</a>
        </li>
        <li class="text-2xl flex items-center h-full font-mono { $page.url.pathname === '/dashboard' ? 'animate-pulse' : '' }" aria-current={$page.url.pathname === '/dashboard' ? 'page' : undefined}>
          <a href="/dashboard" class="hover:text-logo-green transition-colors duration-200 animate-fade-left animate-delay-500">DASHBOARD</a>
        </li>
      {/if}
    </ul>
    {#if loggedIn}
      <div class="text-2xl font-mono animate-fade-right animate-delay-500 ml-4">
        <p class="text-black dark:text-white transition-colors mr-5 duration-200">{session.toUpperCase()}</p>
      </div>
    {/if}
    <button on:click={toggleDarkMode} class="p-2 bg-transparent dark:transparent border-black dark:border-white border rounded-full animate-fade-left animate-delay-500 transition-colors duration-200">
      {#if darkMode}
          <div class="moon">
          <IoIosMoon />
          </div>
      {:else}
      <div class="sun">
        <IoIosSunny />
        </div>
      {/if}
    </button>
  </nav>
</header>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  .moon {
      color: #00ff12;
      width: 26px;
      height: 26px;
    }

    .sun {
      color: #000000;
      width: 26px;
      height: 26px;
    }
</style>
