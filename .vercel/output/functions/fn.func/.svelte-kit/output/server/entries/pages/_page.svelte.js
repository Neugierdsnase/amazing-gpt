import { c as create_ssr_component, b as subscribe, a as add_attribute, v as validate_component, e as escape, d as each, n as noop } from "../../chunks/ssr.js";
import { f as filterStore, T as Tags, A as AuthorSpan, G as GPT_PATH } from "../../chunks/index2.js";
import { w as writable, d as derived } from "../../chunks/index.js";
import _ from "lodash";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const FilterBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $filterStore, $$unsubscribe_filterStore;
  $$unsubscribe_filterStore = subscribe(filterStore, (value) => $filterStore = value);
  let { tags = [] } = $$props;
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$unsubscribe_filterStore();
  return `<div class="flex flex-wrap justify-around gap-8 py-4 p-4 rounded-t-xl bg-base-300 mt-4"><input class="input input-primary input-bordered input-sm" type="text" placeholder="Search"${add_attribute("value", $filterStore.query, 0)}> <div class="flex justify-center grow gap-1 h-full bg-base-200 rounded-2xl py-[2px]">${validate_component(Tags, "Tags").$$render(
    $$result,
    {
      handleTagClick: filterStore.handleTagClick,
      tags,
      includeTagsFilter: true
    },
    {},
    {}
  )}</div> <div class="flex gap-4"><select class="select select-primary select-sm"><option value="added" data-svelte-h="svelte-1l4ucie">Added</option><option value="updated" data-svelte-h="svelte-162axp8">Updated</option><option value="sortName" data-svelte-h="svelte-1t2u01m">Name</option></select> <label for="sort-descending" class="btn btn-ghost btn-sm"><input id="sort-descending" name="sort-descending" class="hidden" type="checkbox"${add_attribute("checked", $filterStore.desc, 1)}> <i class="${[
    "ph-bold ph-caret-down transition-transform duration-300",
    $filterStore.desc ? "rotate-180" : ""
  ].join(" ").trim()}"></i></label></div></div>`;
});
const GPTInfoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { element = "article" } = $$props;
  let { gptInfo = void 0 } = $$props;
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.gptInfo === void 0 && $$bindings.gptInfo && gptInfo !== void 0)
    $$bindings.gptInfo(gptInfo);
  return `${gptInfo ? `${((tag) => {
    return tag ? `<${element ?? "article"} class="grid grid-cols-6 grid-rows-3 bg-primary/10 gap-2 custom-glass rounded-xl p-4 shadow-xl backdrop-filter backdrop-blur-md">${is_void(tag) ? "" : `<div class="flex justify-center items-center col-start-1 p-4 row-start-1 col-span-2 row-span-3"><img${add_attribute("src", gptInfo.image, 0)}${add_attribute("alt", gptInfo.name?.display, 0)} class="mask mask-circle w-full"></div> <div class="row-start-1 row-span-1 col-start-3 col-span-4 text-xl"><h2 class="font-bold line-clamp-1 leading-1">${escape(gptInfo.name?.display)}</h2> ${validate_component(AuthorSpan, "AuthorSpan").$$render($$result, { author: gptInfo.author }, {}, {})}</div> <p class="row-start-2 row-span-1 col-start-3 col-span-4 pl-4 line-clamp-2 mt-2">${escape(gptInfo.description)}</p> <div class="overflow-hidden row-start-3 col-span-3 flex items-end col-start-3">${validate_component(Tags, "Tags").$$render(
      $$result,
      {
        handleTagClick: filterStore.handleTagClick,
        maxTags: 2,
        tags: gptInfo.tags
      },
      {},
      {}
    )}</div> <div class="col-start-6 row-start-3 align-baseline flex justify-end items-end"><a href="${escape(GPT_PATH, true) + "/" + escape(gptInfo.slug, true)}" class="btn btn-primary">Use <i class="ph-bold ph-arrow-square-out"></i></a></div>`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(element ?? "article")}` : ``}`;
});
const GPTList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `<div class="p-4 bg-base-200 rounded-b-2xl min-h-screen"><ul class="flex flex-wrap gap-4 justify-around">${each(items, (item) => {
    return `<li class="max-w-xl min-w-sm h-64">${validate_component(GPTInfoCard, "GPTInfoCard").$$render($$result, { gptInfo: item }, {}, {})} </li>`;
  })}</ul></div>`;
});
const gptStore = writable([]);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `h1.svelte-1fg7w3u.svelte-1fg7w3u{position:relative;--tw-bg-opacity:1;background-color:var(--fallback-s,oklch(var(--s)/var(--tw-bg-opacity)));-webkit-background-clip:text;background-clip:text;color:transparent;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23fcfce7' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");font-size:clamp(2rem, 10vw, 9rem)}h1.svelte-1fg7w3u>span.svelte-1fg7w3u{display:block}@media(min-width: 768px){h1.svelte-1fg7w3u>span.svelte-1fg7w3u{margin-bottom:-1rem}}@media(min-width: 1024px){h1.svelte-1fg7w3u>span.svelte-1fg7w3u{margin-top:0.25rem}}h1.svelte-1fg7w3u>span.svelte-1fg7w3u{font-size:clamp(1rem, 5vw, 4rem)}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gpts;
  let tags;
  let $gpts, $$unsubscribe_gpts = noop, $$subscribe_gpts = () => ($$unsubscribe_gpts(), $$unsubscribe_gpts = subscribe(gpts, ($$value) => $gpts = $$value), gpts);
  let $$unsubscribe_gptStore;
  $$unsubscribe_gptStore = subscribe(gptStore, (value) => value);
  let scrollY = 0;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$subscribe_gpts(gpts = derived([gptStore, filterStore], ([$gptStore2, $filterStore]) => {
    if ($gptStore2 && $gptStore2.length === 0)
      return [];
    const { query, tags: tags2, sort, desc } = $filterStore;
    let filteredStore = $gptStore2;
    if (tags2.length > 0) {
      filteredStore = filteredStore.filter((gpt) => {
        return tags2.every((tag) => gpt.tags.includes(tag));
      });
    }
    if (query) {
      filteredStore = filteredStore.filter((gpt) => gpt.name.sort.toLowerCase().includes(query.toLowerCase()));
    }
    filteredStore = _.sortBy(filteredStore, sort);
    return desc ? filteredStore.reverse() : filteredStore;
  }));
  tags = _.uniq($gpts.map((gpt) => gpt.tags).flat());
  $$unsubscribe_gpts();
  $$unsubscribe_gptStore();
  return ` <h1 class="text-9xl font-extrabold mx-auto px-8 text-center py-8 svelte-1fg7w3u"${add_attribute(
    "style",
    `background-position-y: ${scrollY}px;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23040b1955' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");`,
    0
  )}>A curated list <span class="svelte-1fg7w3u" data-svelte-h="svelte-jmmfr">of</span> amazing custom GPTs</h1> ${validate_component(FilterBar, "FilterBar").$$render($$result, { tags }, {}, {})} ${validate_component(GPTList, "GptList").$$render($$result, { items: $gpts }, {}, {})}`;
});
export {
  Page as default
};
