<script>
  import ImageSlider from '$lib/components/home/Imgslider.svelte';
  import Article from '$lib/components/home/Articles.svelte';

  const baseStyle = "dark:bg-black/90 dark:border-white dark:text-white overflow-hidden break-normal text-2xl font-mono text-black w-full max-w-sm h-54 flex flex-col items-start justify-center p-6 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105 bg-gray-200 border border-gray-400";

  const articlesRow1 = [
    {
      title: "Forum",
      desc: "Access our forum",
      info: "Click for more info",
      href: "forum",
      style: baseStyle
    },
    {
      title: "Sign up",
      desc: "Create an account",
      info: "Click for more info",
      href: "signup",
      style: baseStyle
    },
    {
      title: "Log In",
      desc: "Log into your account",
      info: "Click for more info",
      href: "login",
      style: baseStyle
    },
  ];

  const articlesRow2 = [
    {
      title: "Dashboard",
      desc: "Access our Dashboard",
      info: "Click for more info",
      href: "dashboard",
      style: baseStyle
    },
    {
      title: "Edit your account",
      desc: "Change user details",
      info: "Click for more info",
      href: "dashboard/actions/edituser",
      style: baseStyle
    },
    {
      title: "User lookup",
      desc: "Look up other users",
      info: "Click for more info",
      href: "dashboard/actions/userlookup",
      style: baseStyle
    },
  ];
</script>

<ImageSlider />

<div class="fixed h-full w-full top-0 z-0 bg-gray-100 dark:bg-black/95"></div>

<div class="p-6 relative top-36 w-full mx-auto h-auto overflow-hidden z-40 flex flex-col items-center space-y-16">
  <div class="w-full flex flex-wrap justify-center gap-8 animate-fade-right">
    {#each articlesRow1 as article}
      <Article
        title={article.title}
        desc={article.desc}
        info={article.info}
        href={article.href}
        style={article.style}
      />
    {/each}
  </div>
  
  <div class="w-full flex flex-wrap justify-center gap-8 animate-fade-left">
    {#each articlesRow2 as article}
      <Article
        title={article.title}
        desc={article.desc}
        info={article.info}
        href={article.href}
        style={article.style}
      />
    {/each}
  </div>
</div>
