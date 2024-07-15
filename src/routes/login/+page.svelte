<script>
    import Form from '$lib/components/login/Loginform.svelte'

    export let loggedIn = false;

    import { page } from '$app/stores';
    $: loggedIn = $page.data.loggedIn;
</script>
<div class="fixed h-full w-full top-0 z-0 bg-gray-100 dark:bg-black/95"></div>
{#if loggedIn == false}
<Form />
{:else}
<script>
    window.location.href = '/dashboard';
  </script>
{/if}
