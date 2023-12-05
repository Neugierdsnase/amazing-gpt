import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "theme-change";
import "lodash";
const app = "";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header data-svelte-h="svelte-6uwiqe"><div class="navbar bg-base-300 h-28"><div class="navbar-start"><a href="/" class="h-16 flex gap-4 items-center ml-6"><img src="/logo256.png" alt="logo" class="h-full"> <span class="hidden md:block font-bold text-xl">Awesome GPT</span></a></div> <div class="navbar-end"><label class="swap swap-rotate pr-4"> <input type="checkbox" data-toggle-theme="darker,lighter" data-act-class="ACTIVECLASS"> <i class="ph-fill ph-sun swap-off text-3xl"></i> <i class="ph-fill ph-moon swap-on text-3xl"></i></label></div></div></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollY = 0;
  return ` <footer class="footer p-10 text-neutral-content mt-4 bg-neutral"${add_attribute(
    "style",
    `background-position-y: ${scrollY}px;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%230086ff33' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");`,
    0
  )}><aside data-svelte-h="svelte-uakizy"><img src="/prompt_dress_logo.png" alt="logo" class="h-24"> <a href="https://prompt-dress.com">A project by The Prompt Tailor</a>
		It&#39;s creation was documented on
		<a href="https://www.youtube.com/channel/UCgE_-5ZfUR_UruSn1XrpXtw">YouTube</a></aside> <nav data-svelte-h="svelte-1yfwei4"><header class="footer-title">Social</header> <div class="grid grid-flow-col gap-4 text-3xl"><a rel="noopener" target="_blank" title="Medium" href="https://medium.com/the-prompt-tailor"><i class="ph-bold ph-medium-logo"></i></a> <a rel="noopener" target="_blank" title="Substack" href="https://promptdress.substack.com/"><i class="ph-bold ph-envelope-open"></i></a> <a rel="noopener" target="_blank" title="YouTube" href="https://www.youtube.com/channel/UCgE_-5ZfUR_UruSn1XrpXtw"><i class="ph-bold ph-youtube-logo"></i></a></div></nav></footer>`;
});
const style$1 = "";
const style = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1q0c828_START -->${$$result.title = `<title>A curated List of custom GPTs | Amazing GPT</title>`, ""}<script src="https://cdn.counter.dev/script.js" data-id="577cfaaf-19ed-4ba3-9a0d-62e8ddcebda3" data-utcoffset="2" data-svelte-h="svelte-1mauu2m"><\/script><meta name="twitter:card" content="summary_large_image"><meta name="description" content="Explore our extensive, hand-picked collection of custom GPTs, featuring diverse applications of OpenAI's technology for innovative AI solutions."><meta property="og:title" content="A curated List of custom GPTs | Amazing GPT"><meta name="og:description" content="Explore our extensive, hand-picked collection of custom GPTs, featuring diverse applications of OpenAI's technology for innovative AI solutions."><meta property="og:image" content="https://i.imgur.com/tbcjBgL.png"><meta property="og:url" content="https://amazing-gpt.com"><meta name="twitter:image" content="https://i.imgur.com/ayX62Br.png"><meta name="tags" content="gpt, list, curated, gpts, openai, ai"><meta name="twitter:title" content="Curated list of custom GPTs"><!-- HEAD_svelte-1q0c828_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="container mx-auto">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
