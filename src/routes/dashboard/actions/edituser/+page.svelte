<script>
  export let loggedIn = false;
  export let session = "";

  import { page } from '$app/stores';
  $: loggedIn = $page.data.loggedIn;
  $: session = $page.data.session;

  let answer = "";
  let selected = null;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let questions = [
    { id: 1, text: "Username" },
    { id: 2, text: "E-Mail" },
    { id: 3, text: "Description" }
  ];

  function chckempty(event) {
    if (answer === "") {
      alert("The field is empty");
      event.preventDefault();
      return;
    }

    if (selected.id === 2 && !emailPattern.test(answer)) {
      alert("Email is invalid");
      event.preventDefault();
      return;
    }
  }
</script>
<div class="fixed h-full w-full top-0 z-0 bg-gray-100 dark:bg-black/95"></div>

{#if loggedIn}
  <form method="POST" class="relative mt-10 inset-0 flex items-center justify-center min-h-screen py-8 bg-transparent z-40 animate-flip-down">
    <section class="border dark:bg-black dark:border-white dark:text-white border-gray-400 bg-gray-200 text-black p-8 rounded-3xl shadow-lg z-50 w-full max-w-sm font-mono animate-delay-200 md:max-w-md">
      <p class="text-3xl font-mono font-bold">EDIT USER DETAILS</p>
      <p>&#8203;</p>
      <p class="mb-2">Select one</p>
      <select class="text-black  dark:border-white border-gray-400 rounded w-full mb-2 p-2" bind:value={selected} on:change={() => (answer = '')}>
        <option value="" disabled>Select an option</option>
        {#each questions as question (question.id)}
          <option value={question}>
            {question.text}
          </option>
        {/each}
      </select>
      <input type="hidden" name="selected" value={selected ? selected.id : ''} />
      {#if selected && selected.id === 3}
        <p class="mt-4 mb-2">Input</p>
        <textarea maxlength="1500" name="answer" bind:value={answer} class="block mb-2 p-2 h-20 border dark:border-white border-gray-400 rounded w-full text-black dark:text-white text-sm resize-y max-h-40"></textarea>
      {:else if selected}
        <p class="mt-4 mb-2">Input</p>
        <input name="answer" type="text" bind:value={answer} class="block mb-2 p-2 border dark:border-white border-gray-400 rounded w-full text-black dark:text-black" />
      {/if}

      <button type="submit" on:click={chckempty} class="dark:border-white hover:scale-95 transform transition-transform duration-300 border border-gray-400 block w-full py-2 bg-logo-green text-black dark:text-black mt-5 rounded">Change</button>
    </section>
  </form>
{:else}
  <script>
    window.location.href = '/login';
  </script>
{/if}
