<script>
import { onMount } from 'svelte';

onMount(() => {
  setTimeout(() => {
    window.location.href = '/home';
  }, 2000);
});
</script>

<div class="fixed h-full w-full top-0 z-0 bg-gray-100 dark:bg-black/95"></div>
<div class="absolute inset-0 flex items-center justify-center bg-transparent z-40 animate-flip-down">
<section class="bg-gray-200 dark:bg-black dark:border-white dark:text-white border border-gray-400 text-black p-4 rounded-3xl shadow-lg z-50 w-3/12 font-mono animate-delay-200">
    <p class="text-3xl animate-pulse font-mono font-bold text-center">SUCCESS!</p>
    <p class="text-1xl animate-pulse font-mono italic text-center">Redirecting in 2s...</p>
</section>
</div>
