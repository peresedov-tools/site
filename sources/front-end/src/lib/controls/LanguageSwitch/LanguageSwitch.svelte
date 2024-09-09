<script>
  import {
    availableLanguageTags,
    languageTag,
    setLanguageTag,
  } from '$lib/paraglide/runtime.js';

  let selected = $state(languageTag());

  $effect(() => {
    if (selected === languageTag()) {
      return;
    }

    setLanguageTag(selected);
  });
</script>

<div class="language-switch">
  <select
    id="language-switch"
    name="languageSwitch"
    bind:value={selected}
  >
    {#each availableLanguageTags as lTag}
      <option
        class="language-tag"
        value="{lTag}"
        selected="{lTag === languageTag()}"
      >
          {lTag}
      </option> 
    {/each}
  </select>
</div>