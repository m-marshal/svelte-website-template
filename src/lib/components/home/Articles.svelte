<script>
    export let title
    export let desc
    export let info
    export let href
    export let style
</script>
        <a href={href} class={style}>
            <p class="m-1 font-bold font-mono text-4xl">{title}</p>
            <p class="italic font-mono m-1">{desc}</p>
            <p class="italic font-mono m-1">{info}</p>
        </a>