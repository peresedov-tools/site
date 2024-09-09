<script>
  import {
    languageTag,
  } from '$lib/paraglide/runtime.js';
  import * as m from '$lib/paraglide/messages.js';
  import LanguageSwitch from '$lib/controls/LanguageSwitch/LanguageSwitch.svelte';
  import {
    LanguageStore as L,
  } from '$lib/stores/lang/LangStore.svelte.js';

  let lTag = $state(languageTag());
</script>

<style>
  .nav-div {
    justify-self: center;
    display: flex;
    flex-direction: column;
    gap: var(--main-grid-gap);

    & > .logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > .nav {
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-flow: column;
      gap: var(--main-grid-gap);

      & > .nav-item {
        display: flex;
        justify-content: center;
      }
    }
  }
</style>

<div class="nav-div">
  <a href="/" class="logo">logo</a>
  <nav class="nav">
    {#key L.LanguageTag}
      <a href="/tools" class="nav-item">{m.navTools()}</a>
      <a href="/accessories" class="nav-item">{m.navAccessories()}</a>
      <a href="/knowledge-base" class="nav-item">{m.navKnowledgeBase()}</a>
      <a href="/forum" class="nav-item">{m.navForum()}</a>
      <a href="/account" class="nav-item">{m.navAccount()}</a>
      <a href="/basket" class="nav-item">{m.navBasket()}</a>
    {/key}
    <div class="nav-item"><LanguageSwitch /></div>
  </nav>
</div>