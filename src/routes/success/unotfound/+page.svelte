<script>
export let loggedIn = false;
  export let session = ""

  import { page } from '$app/stores';
  $: if ($page.data.loggedIn !== loggedIn) {
    loggedIn = $page.data.loggedIn;
    session = $page.data.session;
  }
    </script>
    
    {#if loggedIn == false}
    <div class="fixed h-full w-full top-0 z-0 bg-gray-100"></div>
    <div class="absolute inset-0 flex items-center justify-center bg-transparent z-40 animate-flip-down">
    <section class="bg-gray-200 border border-gray-400 text-black p-4 rounded-3xl shadow-lg z-50 w-3/12 font-mono animate-delay-200">
        <p class="text-3xl animate-pulse font-mono font-bold text-center">ERROR!</p>
        <p class="text-2xl animate-pulse font-mono text-center">Not found.</p>
        <p class="text-1xl animate-pulse font-mono italic text-center">Redirecting in 2s...</p>
    </section>
    </div>
    <script>
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    </script>
    {:else}
    <div class="fixed h-full w-full top-0 z-0 bg-gray-100"></div>
    <div class="absolute inset-0 flex items-center justify-center bg-transparent z-40 animate-flip-down">
    <section class="bg-gray-200 border border-gray-400 text-black p-4 rounded-3xl shadow-lg z-50 w-3/12 font-mono animate-delay-200">
        <p class="text-3xl animate-pulse font-mono font-bold text-center">ERROR!</p>
        <p class="text-2xl animate-pulse font-mono text-center">Not found.</p>
        <p class="text-1xl animate-pulse font-mono italic text-center">Redirecting in 2s...</p>
    </section>
    </div>
    <script>
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    </script>
    {/if}
