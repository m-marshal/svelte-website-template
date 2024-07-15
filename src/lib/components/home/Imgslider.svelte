<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
</script>

<div class="mt-2 relative top-20 w-full mx-auto h-60 overflow-hidden z-40 animate-flip-down">
    <Splide options={ { rewind: true, autoplay: true, arrows: false, type: 'fade', hasTrack: true } } aria-label="Images" class="w-full h-full">
        <SplideSlide class="object-cover">
            <a href="https://en.wikipedia.org/wiki/HTML"><img src="/img1.jpg" alt="img1" class="w-full h-full object-cover blur-sm"/></a>
            <div id="img1" class="break-normal text-2xl font-mono absolute text-white top-0 z-50 left-0 w-96 h-full bg-gradient-to-r from-black/50 to-black/25">
                <p class="m-1 text-4xl">HTML</p>
                <p class="italic m-1">HyperText Markup Language</p>
                <p class="italic m-1">Click for more info</p>
            </div>
        </SplideSlide>
        <SplideSlide class="object-cover">
            <a href="https://svelte.dev/"><img src="/img2.jpg" alt="img2" class="w-full h-full object-cover blur-sm"/></a>
            <div id="img2" class="break-normal text-2xl font-mono absolute text-white  top-0 z-50 left-0 w-96 h-full bg-gradient-to-r from-black/50 to-black/25">
                <p class="m-1 text-4xl">Svelte</p>
                <p class="italic m-1">Enhanced web apps</p>
                <p class="italic m-1">Click for more info</p>
            </div>
        </SplideSlide>
    </Splide>
</div>
