import {
  onSetLanguageTag,
  languageTag,
} from '$lib/paraglide/runtime.js';

let langStore = null;

class LangStore {
  #languageTag = $state(languageTag());

  #setLanguageTag(tag = null) {
    this.#languageTag = tag;
  }

  constructor() {
    onSetLanguageTag(this.#setLanguageTag.bind(this));
  }

  get LanguageTag() {
    return this.#languageTag;
  }

  set LanguageTag(value = null) {
    this.#languageTag = value;
  }
}

if (langStore === null) {
  langStore = new LangStore();
}

export const LanguageStore = langStore;
