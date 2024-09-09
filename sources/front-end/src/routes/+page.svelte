<script>
  import * as m from '$lib/paraglide/messages.js';
  import {
    LanguageStore as L,
  } from '$lib/stores/lang/LangStore.svelte.js';
</script>

<style>
  .main-article {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'tools accessories'
      'tools knowledge-base'
      'tools forum'
    ;
    gap: var(--main-grid-gap);
    container-name: main-article;
    container-type: inline-size;
    justify-self: center;
    align-self: center;

    width: 50svw;
    height: 50svh;

    & > .tools {
      grid-area: tools;
      container-name: tools;
      background-color: var(--theme-teal);
    }

    & > .accessories {
      grid-area: accessories;
      container-name: accessories;
      background-color: var(--theme-off_blue);
    }

    & > .knowledge-base {
      grid-area: knowledge-base;
      container-name: knowledge-base;
      background-color: var(--theme-red);
    }

    & > .forum {
      grid-area: forum;
      container-name: forum;
      background-color: var(--theme-green);
    }

    & > .tools, .accessories, .knowledge-base, .forum {
      container-type: inline-size;
    }
  }
</style>

<article class="main-article">
  {#key L.LanguageTag}
    <a href="/tools" class="tools">{m.navTools()}</a>
    <a href="/accessories" class="accessories">{m.navAccessories()}</a>
    <a href="knowledge-base" class="knowledge-base">{m.navKnowledgeBase()}</a>
    <a href="forum" class="forum">{m.navForum()}</a>
  {/key}
</article>