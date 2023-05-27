<template>
    <div class="container min-h-18" style="height: calc(100vh - 64px)">
        <div class="center z-1">
            <div class="flexbox column center">
                <h1 class="fw-9">Welcome<br />to the land of CSS</h1>
                <p class="c-999 fw-5 pt-8 max-w-19 tagline">
                    <span class="c bold">Csslandia</span> is a free and open
                    source CSS framework carefully crafted with attention to
                    every detail.
                </p>
                <div class="pt-9 px-8">
                    <a href="/docs/" class="btn bg-a lg p-lg pill m-4"
                        >Get Started</a
                    >
                    <a
                        href="https://github.com/csslandia/"
                        target="_black"
                        class="btn bd bg lg p-lg pill m-4"
                        >View on Github</a
                    >
                </div>
            </div>
        </div>
    </div>

    <div class="aurora">
        <div></div>
    </div>
</template>

<style scoped>
h1 {
    width: fit-content;
    font-size: calc(2.25rem + 3.5vw) !important;
    line-height: 1.1;
    background: var(--vp-home-hero-name-background);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: var(--vp-home-hero-name-color);
    animation: gradient 12s linear infinite;
    background-size: 320% 320%;
    background-position: 50%;
}

h1::selection {
    -webkit-text-fill-color: var(--bg-strong) !important;
}

.tagline {
    font-size: calc(1rem + 0.75vw) !important;
    line-height: 1.4;
}

.aurora {
    overflow: hidden;
    height: 200px;
    margin-top: -200px;
    display: flex;
    flex-direction: column-reverse;
}

.aurora * {
    width: 100%;
    height: 40px;
    margin-top: -40px;
    transform: translateY(50%);
    filter: blur(60px);
    background-image: var(--vp-home-hero-name-background);
    animation: gradient 12s linear infinite;
    background-size: 320% 320%;
    background-position: 50%;
}

@keyframes gradient {
    0% {
        background-position: 50%;
    }
    25% {
        background-position: 100%;
    }
    75% {
        background-position: 0%;
    }
    100% {
        background-position: 50%;
    }
}
</style>
