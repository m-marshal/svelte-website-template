<script>
	import Header from '../lib/components/global/Header.svelte';
	import Footer from '../lib/components/global/Footer.svelte';
	import { page } from '$app/stores';
	import "../app.css";

	let showLayout = true;
	$: showLayout = $page.url.pathname !== '/success' && $page.url.pathname !== '/success/unotfound' && $page.url.pathname !== '/success/passfail' && $page.url.pathname !== '/success/alrexist';
</script>

<style>
    main {
        padding-bottom: 16rem;
    }
</style>

{#if showLayout}
	<Header />
{/if}

<main>
	<slot />
</main>

{#if showLayout}
	<Footer />
{/if}
