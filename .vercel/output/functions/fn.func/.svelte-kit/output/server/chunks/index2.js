import { c as create_ssr_component, b as subscribe, d as each, a as add_attribute, e as escape } from "./ssr.js";
import _ from "lodash";
import { w as writable } from "./index.js";
const filterStoreWritable = writable({
  author: "",
  query: "",
  tags: [],
  sort: "added",
  desc: true
});
const handleTagClick = (tag) => {
  filterStoreWritable.update((store) => {
    if (store.tags.includes(tag)) {
      store.tags = store.tags.filter((t) => t !== tag);
    } else {
      store.tags.push(tag);
    }
    return store;
  });
};
const filterStore = {
  ...filterStoreWritable,
  handleTagClick
};
const Tags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTags;
  let combinedTags;
  let tagsToDisplay;
  let $filterStore, $$unsubscribe_filterStore;
  $$unsubscribe_filterStore = subscribe(filterStore, (value) => $filterStore = value);
  let { maxTags = void 0 } = $$props;
  let { tags = [] } = $$props;
  let { handleTagClick: handleTagClick2 = () => {
  } } = $$props;
  let { size = "md" } = $$props;
  let { includeTagsFilter = false } = $$props;
  let tagsFilter = "";
  const badgeSizes = {
    xs: "badge-xs",
    sm: "badge-sm",
    md: "badge-md",
    lg: "badge-lg"
  };
  let badgeSize = badgeSizes[size];
  if ($$props.maxTags === void 0 && $$bindings.maxTags && maxTags !== void 0)
    $$bindings.maxTags(maxTags);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.handleTagClick === void 0 && $$bindings.handleTagClick && handleTagClick2 !== void 0)
    $$bindings.handleTagClick(handleTagClick2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.includeTagsFilter === void 0 && $$bindings.includeTagsFilter && includeTagsFilter !== void 0)
    $$bindings.includeTagsFilter(includeTagsFilter);
  activeTags = $filterStore.tags;
  combinedTags = _.uniq([
    ...activeTags,
    ...tags.filter((tag) => {
      return true;
    })
  ]);
  tagsToDisplay = maxTags ? combinedTags.slice(0, maxTags) : combinedTags;
  $$unsubscribe_filterStore();
  return `<ul class="flex gap-1 flex-wrap justify-center">${each(tagsToDisplay, (tag) => {
    return `<li><button class="${[
      "badge badge-primary " + escape(badgeSize, true),
      activeTags.includes(tag) ? "badge-secondary" : ""
    ].join(" ").trim()}">${escape(tag)}</button> </li>`;
  })} ${includeTagsFilter ? `<li><input type="text" placeholder="filter tags" class="input input-primary input-xs rounded-xl text-center max-w-[8rem]"${add_attribute("value", tagsFilter, 0)}></li>` : ``}</ul>`;
});
const AuthorSpan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { author } = $$props;
  const name = author?.name;
  const url = author?.url;
  const removeHttp = (url2) => {
    const regex = /^(https?:\/\/)/;
    return url2.replace(regex, "");
  };
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  return `${!name && !url ? `<span class="text-xs"></span>` : `${!name ? `<a class="text-xs italic underline"${add_attribute("href", url, 0)} rel="noopener" target="_blank">- by ${escape(removeHttp(url))} <i class="ph-bold ph-arrow-square-out"></i></a>` : `${!url ? `<span class="text-xs italic">- by ${escape(name)}</span>` : `<a class="text-xs italic underline"${add_attribute("href", url, 0)} rel="noopener" target="_blank">- by ${escape(name)} <i class="ph-bold ph-arrow-square-out"></i></a>`}`}`}`;
});
const BASE_OPENAI_GPT_URL = "https://chat.openai.com/g/";
const GPT_PATH = "gpt";
export {
  AuthorSpan as A,
  BASE_OPENAI_GPT_URL as B,
  GPT_PATH as G,
  Tags as T,
  filterStore as f
};
