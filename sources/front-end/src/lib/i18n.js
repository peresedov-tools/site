// file initialized by the Paraglide-SvelteKit CLI - Feel free to edit it
import { createI18n } from "@inlang/paraglide-sveltekit";
import * as runtime from "$lib/paraglide/runtime.js";
import * as m from '$lib/paraglide/messages.js';

const toURL = (path = null) => {
  if (path === null || path.length === 0) {
    console.error(`.toURL(${path}): path is either undefined or zero length`);

    return '/';
  }

  return path;
};

export const i18n = createI18n(runtime, {
  prefixDefaultLanguage: 'never',
});
// export const i18n = createI18n(runtime, {
//   pathnames: {
//     '/accessories': toURL(m.navAccessories()),
//     '/account': toURL(m.navAccount()),
//     '/basket': toURL(m.navBasket),
//     '/forum': toURL(m.navForum()),
//     '/knowledge-base': toURL(m.navKnowledgeBase()),
//     'tools': toURL(m.navTools()),
//   },
// });
