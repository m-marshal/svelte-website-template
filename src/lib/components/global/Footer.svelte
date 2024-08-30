<script>
    import { goto } from '$app/navigation';
  
    async function handleLogout() {
        const response = await fetch('/logout', {
            method: 'POST'
        });
        
        if (response.ok) {
            goto("/success");
        } else {
            console.error('Failed to logout');
        }
    }
  
    export let loggedIn = false;
  
    import { page } from '$app/stores';
    $: if ($page.data.loggedIn !== loggedIn) {
        loggedIn = $page.data.loggedIn;
    }
  </script>
  
  <style>
    .footer-container {
        position: relative;
        margin-top: 4rem;
    }
  
    .footer {
        position: absolute;
        bottom: -10rem; 
        left: 0;
        right: 0;
        height: 17rem;
    }
  </style>
  
  <div class="footer-container">
    <footer class="footer bg-white dark:bg-black border-t-2 border-black dark:border-white font-mono">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://github.com/s-marshal-dev" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/Logo-tr.png" class="h-16 w-14" alt="" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Marshal</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="/about" class="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="https://github.com/m-marshal" class="hover:underline me-4 md:me-6">Contact</a>
                    </li>
                    <li>
                        <a href="https://github.com/m-marshal/svelte-website-template" class="hover:underline me-4 md:me-6">Repository</a>
                    </li>
                </ul>
            </div>
            {#if loggedIn}
                <button on:click={handleLogout} class="ml-2 mt-4 text-black dark:text-white text-xl rounded transition-colors duration-200 hover:text-logo-green">LOGOUT</button>
            {/if}
            <hr class="my-6 border-black/50 sm:mx-auto dark:border-gray-400 lg:my-8" />
            <span class="block text-sm text-black sm:text-center dark:text-gray-400">Programmed in 2024 by <a href="https://github.com/s-marshal-dev" class="hover:underline">Marshal</a>. Distributed under the Unlicense License.</span>
        </div>
    </footer>
  </div>
  