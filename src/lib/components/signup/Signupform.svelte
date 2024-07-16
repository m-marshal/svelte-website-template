<script lang="ts">
  
  let username = "";
  let password = "";
  let confpassword = "";
  let mail = "";
  let description = "";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleSubmit(event) {
    if (username === "" || password === "" || confpassword === "" || mail === "") {
      event.preventDefault();
      alert("One or more fields are empty");
      return;
    }

    if (!emailPattern.test(mail)) {
      event.preventDefault();
      alert("Email is invalid");
      return;
    }

    if (password !== confpassword) {
      event.preventDefault();
      alert("Passwords do not match");
      return;
    }
  }
</script>

<div class="relative inset-0 flex items-center justify-center bg-transparent z-40 animate-flip-down">
  <form method="POST" action="?/create" class="relative mt-10 inset-0 flex items-center justify-center min-h-screen w-full py-8 bg-transparent z-50 animate-flip-down">
    <section class="border dark:border-white dark:bg-black dark:text-white border-gray-400 bg-gray-200 text-black p-8 rounded-3xl shadow-lg z-50 w-full max-w-sm font-mono animate-delay-200 md:max-w-md">
      <p class="text-3xl font-mono font-bold">SIGN UP</p>
      <p>&#8203;</p>
      <p>Username</p>
      <input name="name" type="text" bind:value={username} class="dark:border-white block mb-2 p-2 border border-gray-400 rounded w-full text-black" />
      <p>Password</p>
      <input name="password" type="password" bind:value={password} class="dark:border-white block mb-2 p-2 border border-gray-400 rounded w-full text-black" />
      <p>Confirm Password</p>
      <input name="confpassword" type="password" bind:value={confpassword} class="dark:border-white block mb-2 p-2 border border-gray-400 rounded w-full text-black" />
      <p>E-Mail</p>
      <input name="userEmail" type="email" bind:value={mail} class="dark:border-white block mb-2 p-2 border border-gray-400 rounded w-full text-black" />
      <p>Short Personal Description</p>
      <textarea maxlength="255" name="description" bind:value={description} class="dark:border-white block mb-2 p-2 h-20 border border-gray-400 rounded w-full text-black resize-y max-h-40"></textarea>
      <p>&#8203;</p>
      <button type="submit" on:click={handleSubmit} class="dark:border-white hover:scale-95 duration-300 border border-gray-400 transform transition-transform block w-full py-2 bg-logo-green text-black mt-5 rounded">Sign up</button>
    </section>
  </form>
</div>
