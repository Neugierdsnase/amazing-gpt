import { c as create_ssr_component, s as subscribe, f as each, e as escape, d as add_attribute, v as validate_component, n as noop } from "../../chunks/ssr.js";
import _ from "lodash";
import { w as writable, d as derived } from "../../chunks/index.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const filterStore = writable({
  author: "",
  query: "",
  tags: [],
  sort: "added",
  desc: true
});
const Tags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTags;
  let combinedTags;
  let tagsToDisplay;
  let $filterStore, $$unsubscribe_filterStore;
  $$unsubscribe_filterStore = subscribe(filterStore, (value) => $filterStore = value);
  let { maxTags = void 0 } = $$props;
  let { tags = [] } = $$props;
  if ($$props.maxTags === void 0 && $$bindings.maxTags && maxTags !== void 0)
    $$bindings.maxTags(maxTags);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  activeTags = $filterStore.tags;
  combinedTags = _.uniq([...activeTags, ...tags]);
  tagsToDisplay = maxTags ? combinedTags.slice(0, maxTags) : combinedTags;
  $$unsubscribe_filterStore();
  return `<ul class="flex gap-1 flex-wrap justify-center">${each(tagsToDisplay, (tag) => {
    return `<li><button class="${["badge badge-primary", activeTags.includes(tag) ? "badge-secondary" : ""].join(" ").trim()}">${escape(tag)}</button> </li>`;
  })}</ul>`;
});
const FilterBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $filterStore, $$unsubscribe_filterStore;
  $$unsubscribe_filterStore = subscribe(filterStore, (value) => $filterStore = value);
  let { tags = [] } = $$props;
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$unsubscribe_filterStore();
  return `<div class="flex flex-wrap justify-around gap-8 py-4 p-4 rounded-t-xl bg-base-300 mt-4"><input class="input input-primary input-bordered input-sm" type="text" placeholder="Search"${add_attribute("value", $filterStore.query, 0)}> <div class="flex justify-center grow gap-1 h-full bg-base-200 rounded-2xl py-[2px]">${validate_component(Tags, "Tags").$$render($$result, { tags }, {}, {})}</div> <div class="flex gap-4"><select class="select select-primary select-sm"><option value="added" data-svelte-h="svelte-1l4ucie">Added</option><option value="updated" data-svelte-h="svelte-162axp8">Updated</option><option value="sortName" data-svelte-h="svelte-1t2u01m">Name</option></select> <label for="sort-descending" class="btn btn-ghost btn-sm"><input id="sort-descending" name="sort-descending" class="hidden" type="checkbox"${add_attribute("checked", $filterStore.desc, 1)}> <i class="${[
    "ph-bold ph-caret-down transition-transform duration-300",
    $filterStore.desc ? "rotate-180" : ""
  ].join(" ").trim()}"></i></label></div></div>`;
});
const AuthorSpan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { author } = $$props;
  const { name, url } = author;
  const removeHttp = (url2) => {
    const regex = /^(https?:\/\/)/;
    return url2.replace(regex, "");
  };
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  return `${!name && !url ? `<span class="text-xs"></span>` : `${!name ? `<a class="text-xs italic underline"${add_attribute("href", url, 0)} rel="noopener" target="_blank">- by ${escape(removeHttp(url))} <i class="ph-bold ph-arrow-square-out"></i></a>` : `${!url ? `<span class="text-xs italic">- by ${escape(name)}</span>` : `<a class="text-xs italic underline"${add_attribute("href", url, 0)} rel="noopener" target="_blank">- by ${escape(name)} <i class="ph-bold ph-arrow-square-out"></i></a>`}`}`}`;
});
const GPTInfoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { element = "article" } = $$props;
  let { gptInfo } = $$props;
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.gptInfo === void 0 && $$bindings.gptInfo && gptInfo !== void 0)
    $$bindings.gptInfo(gptInfo);
  return `${((tag) => {
    return tag ? `<${element ?? "article"} class="grid grid-cols-6 grid-rows-3 bg-primary/10 gap-2 custom-glass rounded-xl p-4 shadow-xl backdrop-filter backdrop-blur-md">${is_void(tag) ? "" : `<div class="flex justify-center items-center col-start-1 p-4 row-start-1 col-span-2 row-span-3"><img${add_attribute("src", gptInfo.image, 0)}${add_attribute("alt", gptInfo.name, 0)} class="mask mask-circle w-full"></div> <div class="row-start-1 row-span-1 col-start-3 col-span-4 text-xl"><h2 class="font-bold line-clamp-1 leading-1">${escape(gptInfo.name)}</h2> ${validate_component(AuthorSpan, "AuthorSpan").$$render($$result, { author: gptInfo.author }, {}, {})}</div> <p class="row-start-2 row-span-1 col-start-3 col-span-4 pl-4 line-clamp-2 mt-2">${escape(gptInfo.description)}</p> <div class="overflow-hidden row-start-3 col-span-3 flex items-end col-start-3">${validate_component(Tags, "Tags").$$render($$result, { maxTags: 2, tags: gptInfo.tags }, {}, {})}</div> <div class="col-start-6 row-start-3 align-baseline flex justify-end items-end"><a rel="noopener" target="_blank"${add_attribute("href", gptInfo.url, 0)} class="btn btn-primary">Use <i class="ph-bold ph-arrow-square-out"></i></a></div>`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(element ?? "article")}`;
});
const GPTList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `<div class="p-4 bg-base-200 rounded-b-2xl min-h-screen"><ul class="flex flex-wrap gap-4 justify-around">${each(items, (item) => {
    return `<li class="max-w-xl min-w-sm h-64">${validate_component(GPTInfoCard, "GPTInfoCard").$$render($$result, { gptInfo: item }, {}, {})} </li>`;
  })}</ul></div>`;
});
const isUuid = (uuid) => {
  if (/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi.test(uuid)) {
    return uuid;
  }
  throw new Error("Invalid UUID");
};
class GPTInfo {
  constructor(name, author, description, tags, added, updated, id, url, image) {
    this.name = name;
    this.author = author;
    this.description = description;
    this.tags = tags;
    this.added = added;
    this.updated = updated;
    this.id = id;
    this.url = url;
    this.image = image;
    this.sortName = name.toLowerCase().replace(/[^a-z]/g, "");
  }
  sortName;
}
const gpts = [
  {
    id: isUuid("788188ee-1cbe-4b9e-9316-a7fb8a803dc8"),
    name: "The Glibatree Art Designer",
    author: {
      url: "https://glibatree.com",
      name: "Glibatree"
    },
    description: "Use optimized prompts to create beautiful art!",
    tags: ["art", "images", "midjourney", "pictures"],
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-7CKojumSX-the-glibatree-art-designer",
    image: "https://files.oaiusercontent.com/file-ckcqbHACy07VMVCDAiDIIFAP?se=2123-10-20T03%3A48%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-09%252009.24.48%2520-%2520A%2520digital%2520painting%2520of%2520a%2520whimsical%2520tree%2520character%252C%2520its%2520branches%2520are%2520adorned%2520with%2520vibrant%2520rainbow-colored%2520leaves%252C%2520shimmering%2520as%2520if%2520freshly%2520rained%2520on.%2520Th.png&sig=bWlHwWvve27%2BVPn06/msFCH89ykI%2BnfcvuCnV2ZhQ2U%3D"
    // URL or path to an associated image, if available
  },
  {
    id: isUuid("2dfcddc8-6095-4872-9264-6a77cfaba692"),
    // Unique identifier, fill in with actual UUID
    name: "Find the perfect GPT for you!",
    author: {
      name: "Wes Roth",
      url: "https://natural20.com"
      // URL of the author, if available
    },
    description: "This searches for the perfect GPT for your use case.Just tell it what you want and it will get busy finding the perfect GPT for your need.",
    tags: ["gpt", "indexing", "searching", "meta"],
    // Add relevant tags as strings
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-ODDsHkh7I-find-the-perfect-gpt-for-you",
    image: "https://files.oaiusercontent.com/file-pT82H2IsJKCPRG5B9rV6CHak?se=2123-10-20T19%3A40%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo.png&sig=QVP0Mdz5j0LwwwmxudU/EnFYQRwxQ%2BZ/D7KdjG9s%2BWY%3D"
  },
  {
    id: isUuid("a2c7c6ed-4464-467f-968c-033d789e890f"),
    // Unique identifier, fill in with actual UUID
    name: "Browser Feature Compatibility Assistant",
    author: {
      name: "The Prompt Tailor",
      url: "https://prompt-dress.com"
    },
    description: "Checks CSS/JS feature compatibility across browsers.",
    tags: ["coding", "web development", "front end", "browser", "webdev"],
    // Add relevant tags as strings
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-DtQrCQOxt-browser-feature-compatibility-assistant",
    image: "https://files.oaiusercontent.com/file-PX3ZQrg8R1OQE4Uy81SBy5QZ?se=2123-10-27T12%3A53%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D32838bd5-e2f4-4175-856a-8c12f7fc6c21.png&sig=5GGci3RYLMv1RAEDQpumoMUbXeZhYmzlFEn3sw2Uqdo%3D"
  },
  {
    id: isUuid("c8a7e711-8726-4b2c-a80d-38b91b345387"),
    // Unique identifier, fill in with actual UUID
    name: "Unit Test Assistant for Vitest",
    author: {
      name: "The Prompt Tailor",
      url: "https://prompt-dress.com"
    },
    description: "Writes JS/TS unit tests for your functions using Vitest instead of Jest.",
    tags: [
      "coding",
      "web development",
      "front end",
      "browser",
      "webdev",
      "testing",
      "unit testing"
    ],
    // Add relevant tags as strings
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-VrxA01XiP-unit-test-assistant-for-vitest",
    image: "https://files.oaiusercontent.com/file-ycAjAtVaVoeCaMqHr5IghyPR?se=2123-10-24T13%3A53%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D51dff56f-cd2d-475f-9bd3-2cc3018d2d93.png&sig=MZR//lesoRKRBiiIQFvVw8LWuupJYvysnugagRRq1nA%3D"
  },
  {
    id: isUuid("277e0aa0-c30f-45ac-8f7e-c67a2f0529d6"),
    // Unique identifier, fill in with actual UUID
    name: "Product Hunt Launch Advisor",
    author: {
      name: "The Prompt Tailor",
      url: "https://prompt-dress.com"
    },
    description: "I guide users for impactful Product Hunt launches.",
    tags: ["product", "product hunt", "marketing", "copywriting", "content writing"],
    // Add relevant tags as strings
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-yZKIOxFhD-product-hunt-launch-advisor",
    image: "https://files.oaiusercontent.com/file-fF8451x9ee2dr2enNjTnymIs?se=2123-10-24T17%3A42%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7487a3ac-bbe7-4769-9718-09b25c9851f9.png&sig=5CN1SrKb3fF8hZbT9YRiLICfV014fZqlawZp7blHZjY%3D"
  },
  {
    id: isUuid("51bf544e-5e66-4fdf-af63-7ebfb9dba1b6"),
    name: "editGPT",
    author: {
      name: "editGPT",
      url: "https://editgpt.app"
    },
    description: "Proofread, edit and track changes to your content. Works alongside the editGPT browser extension.",
    tags: ["writing", "editing", "proofreading", "copywriting", "content writing"],
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-zpuYfzV7k-editgpt",
    image: "https://files.oaiusercontent.com/file-rtnaGVkL7cbKKvFKj4W3IIma?se=2123-10-19T16%3A47%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dandroid-chrome-192x192.png&sig=8IBMna9myk44fzf873z/OFp9oS8kflbVjN9T/xwRvw8%3D"
    // URL or path to an associated image, if available
  },
  {
    id: isUuid("d646a87c-9fff-427d-b2e7-bf0d0d7a8d0f"),
    name: "Grimoire",
    author: {
      name: "Mindgoblin Studios",
      url: "https://mindgoblinstudios.com/"
    },
    description: "Coding Wizard: 100x Engineer. Create a website with a sentence. Built for a new era of creativity: **************Prompt-gramming***************** 15+ Hotkeys for coding flows. 19 starter projects. Prompt first creativity! Start with a picture or a quest? Type: K for cmd Menu, or R for README v1.13",
    tags: ["coding", "webdev", "front end", "prompt-gramming", "creativity", "web development"],
    // Add relevant tags as strings
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-n7Rs0IK86-grimoire",
    image: "https://files.oaiusercontent.com/file-MTr7WWRSSCbZjGIeEUVF3Bwh?se=2123-10-15T16%3A15%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%2520Code%2520Wizard%2520Illustration.png&sig=G2gs2Pxi21I6346XTyg6tN9BydGthgIhc3YZIuE/n8w%3D"
  },
  {
    id: isUuid("753e7023-8c27-4dee-b754-ae860e7a97ee"),
    name: "Market Analyst",
    author: {
      name: "Colin Gillingham",
      url: "https://gillingh.am/"
    },
    description: "Analyze any chart, instantly. Just paste or upload an image of your chart. Include as many indicators as you want - great way to learn!",
    tags: ["analyst", "data", "business", "marketing"],
    // Add relevant tags as strings
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-m5ZAgJ5jt-market-analyst",
    image: "https://files.oaiusercontent.com/file-LysoBBUxXycslgSYCDP31aYK?se=2123-10-17T20%3A01%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D11402854-cde5-48d2-a41f-41f4184e7b1d.png&sig=SwXcmsDMly0YPEsmKiYsKsXbBVJ/MBUMZvBfqxzyvf0%3D"
    // URL or path to an associated image, if available
  },
  {
    id: isUuid("0aa16089-d584-4b85-8899-bbf286686cf0"),
    name: "SellMeThisPen",
    author: {
      name: "Active Solution",
      url: "https://www.activesolution.se/"
      // URL of the author, if available
    },
    description: "Create second hand marketplace listings based on pictures. Start by uploading a picture.",
    tags: ["sales", "image-to-text"],
    // Add relevant tags as strings
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-cTqsEOE4C-sellmethispen",
    image: "https://files.oaiusercontent.com/file-yALburFJq31FxM7lp7Sf4Shx?se=2123-10-17T07%3A39%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DSellMeThisPen-03.png&sig=D1KJbovUZ%2B0IcuMqQJVno6ZwQVjFgmP8unlpDV39XdE%3D"
    // URL or path to an associated image, if available
  },
  {
    id: isUuid("c1a3d931-9cc9-4532-98f6-09d91d2e88e5"),
    // Unique identifier, fill in with actual UUID
    name: "22.500+ Best Custom GPTs",
    author: {
      name: "SEO.ai",
      url: "https://seo.ai/"
      // URL of the author, if available
    },
    description: "Search all public GPTs in one place. Find the best Custom ChatGPTs tailored to your needs. Every day, hundreds of new popular GPTs join our ranks!",
    tags: ["gpt", "indexing", "searching", "meta"],
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-RuhDS8mbd-17500-best-custom-gpts",
    image: "https://files.oaiusercontent.com/file-MgGT6z8XgEqooNX79PZufM5S?se=2123-10-27T22%3A07%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbest-gpts.png&sig=MlatxQXK4pU8bZzLY/9zMjlRY2N4FEFOyMM16ZfUVTM%3D"
    // URL or path to an associated image, if available
  },
  {
    id: isUuid("56c064cb-426e-44cd-8926-587936d44e06"),
    name: "SEO Mentor",
    author: {
      name: "Natzir Turrado Ruiz",
      url: "https://www.natzir.com/"
    },
    description: "SEO mentor aligned with Google's best practices",
    tags: ["seo", "marketing", "google"],
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-QqvewXqPt-seo-mentor",
    image: "https://files.oaiusercontent.com/file-L9yIY9GqEdDo94onlYwWLP4U?se=2123-10-16T17%3A22%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6c5af06b-9dc1-480b-90df-57f7d0573ecc.png&sig=ndVjrBKmvk1x2b%2BvqDNu64rQDYOBhP9xQc0g6xlnzu8%3D"
  },
  {
    id: isUuid("a780dda2-7588-471a-b71e-41eee693c678"),
    name: "Logo Maker",
    author: {
      name: "Andrew Gao",
      url: "https://www.andrewgao.dev/"
    },
    description: "Makes you a professional high quality PNG for your business.",
    tags: ["logo", "design", "branding", "business", "marketing"],
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-Mc4XM2MQP-logo-maker",
    image: "https://files.oaiusercontent.com/file-OL42EdwTQ3ZqlwBJqSiepQua?se=2123-10-14T21%3A11%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D540b581d-40a5-4029-80dc-71c9eae7406d.png&sig=6a9vwOkaekscLiSE7AWY7iag1L1iaFXcwOEEx9BFjCk%3D"
  },
  {
    id: isUuid("620c5aa7-d600-4b54-9d36-3d953d453ae3"),
    name: "ConvertAnything",
    author: {
      name: "Pietro Schirano",
      url: ""
    },
    description: "The ultimate file converter for images, audio, video, documents and more. It handles individual or batch uploads, supports ZIPs, and provides a download link.",
    tags: ["file conversion", "images", "audio", "video", "documents"],
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-kMKw5tFmB-convertanything",
    image: "https://files.oaiusercontent.com/file-Gpws0QDcR4iL5URQQoxxvRET?se=2123-10-19T06%3A07%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8c64f203-9ea6-4c45-a339-d92f6545a2f7.png&sig=Zhlsp136YwCoXKLK%2BpCspdKokq%2BhQDrdimmAXvE4vME%3D"
  },
  {
    id: isUuid("adf31f9e-4a97-4129-8ce6-6b7c9ab44e30"),
    name: "DesignerGPT",
    author: {
      name: "Pietro Schirano",
      url: ""
    },
    description: "Creates and hosts beautiful websites.",
    tags: ["webdev", "design", "websites", "hosting", "web development"],
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-2Eo3NxuS7-designergpt",
    image: "https://files.oaiusercontent.com/file-x4outSHGhQh7YW6b8fqDK26y?se=2123-10-17T05%3A48%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Decd882e5-15b7-4dba-8198-94a8849974f9.png&sig=DAm8CnFD1K9kaX%2BVe6AFBl1Yje0t1MGJKrm/tT4YTFc%3D"
  },
  {
    id: isUuid("7bf4a00c-e93b-474f-a4c1-a9998390fb5b"),
    name: "Simpsonize Me",
    author: {
      name: "Matthew Schlicht",
      url: ""
    },
    description: "I turn photos into Simpsons-style art.",
    tags: ["simpsons", "art", "images", "pictures", "photos", "image editing"],
    added: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-22")).toISOString(),
    url: "https://chat.openai.com/g/g-tcmMldCYy-simpsonize-me",
    image: "https://files.oaiusercontent.com/file-17fHH5xrODVwm3MWDraASFA3?se=2123-10-14T18%3A36%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da722ea47-dbe5-48e9-8edb-18b06967b0a3.png&sig=1B5F0S7gRjMV2HmqIaIqmiSwoiePyILURO7nm3KDTIs%3D"
  },
  {
    id: isUuid("173b8815-e0aa-4086-af40-f0f77faf9bb3"),
    name: "GPTs Matchmaker",
    author: {
      name: "SynLabs",
      url: "https://synlabs.pro"
    },
    description: "Expert in matching users with suitable GPTs.",
    tags: ["gpt", "indexing", "searching", "meta"],
    added: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    url: "https://chat.openai.com/g/g-PCGBO2DdD-gpts-matchmaker",
    image: "https://files.oaiusercontent.com/file-aBomEOTt7zbEFziQobe33wwY?se=2123-10-21T12%3A23%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df2b293cc-a024-4df7-9cf7-c421bc94ffe4.png&sig=E0JIEy09ZmfT2xsQvHLaD/ewYdn3IlYmFEFSTYZ%2BR8A%3D"
  },
  {
    id: isUuid("aa7e86a1-3d2f-4fe8-b9a7-22fbe50f0d79"),
    name: "/Imagine Anything",
    author: {
      name: "Joshua Bodnar",
      url: ""
    },
    description: "You can create almost any image, making a masterpiece from thin air!",
    tags: ["images", "pictures", "art"],
    added: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    url: "https://chat.openai.com/g/g-z9mT0nYIk-imagine-anything",
    image: "https://files.oaiusercontent.com/file-LK85nAOSowLnp8XUC8gdvPRf?se=2123-10-22T23%3A56%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D34.png&sig=Ug0eoGNweed8xhIkA3CYU2HXVltPBk0FHKEbXe/fXCg%3D"
  },
  {
    id: isUuid("fd9688d6-60f1-49d5-b58e-b102018848f4"),
    name: "L6 Helix Sound Designer",
    author: {
      name: "Joel P Gouker",
      url: ""
    },
    description: "I help you with Line 6 Helix sound design, focusing on custom patches and guitar tone guidance - V 0.3",
    tags: ["music", "guitar", "sound design", "audio", "tone"],
    added: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    url: "https://chat.openai.com/g/g-jKUagForu-l6-helix-sound-designer",
    image: "https://files.oaiusercontent.com/file-4PrjMaqZ9TlAdXxcThPyjr2S?se=2123-10-17T02%3A04%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc0225314-3cf6-4bb5-99c3-7908329b6703.png&sig=HDQHyu6cNPKdGbo68fIVLIeWrKAk3Ske2dh80C0tl5s%3D"
  },
  {
    id: isUuid("47af4fb5-78c2-4288-86a9-4f305102b515"),
    name: "Dispatch Trainer",
    author: {
      name: "",
      url: ""
    },
    description: "Simulates 911 calls for dispatcher training.",
    tags: ["911", "dispatcher", "emergency"],
    added: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    url: "https://chat.openai.com/g/g-JjYTt8d1p-dispatch-trainer",
    image: "https://files.oaiusercontent.com/file-4JeBm1luXC4B73EBKIrFs1oZ?se=2123-10-21T16%3A48%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4f290fcd-80d9-42f5-a892-8124c742e61b.png&sig=eIJUb5sOsWD/6H7AEVEJ3%2B0EKHIyo4Z5wHS/e9OWPqQ%3D"
  },
  {
    id: isUuid("61f914d1-1a35-455f-886f-662b19d3dfbb"),
    name: "Portrait Cartoonator",
    author: {
      name: "",
      url: "https://rsugrafx.com/"
    },
    description: "Turns your photos into cartoon-style portraits. Just upload a photo, and the app automatically starts.",
    tags: ["cartoon", "portrait", "image editing", "pictures", "photos", "images"],
    added: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    url: "https://chat.openai.com/g/g-BVAcMP7wX-portrait-cartoonator",
    image: "https://files.oaiusercontent.com/file-W9AKvihAeIk1syTMYsC1aC9u?se=2123-10-21T09%3A34%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo.png&sig=Nn9ZWpbtFwyhq1nlfFdQjwD21DhppL3No7VRZFoWF8Y%3D"
  },
  {
    id: isUuid("bb2a68d2-9f7f-4ae0-bf26-9e925fa1b9ce"),
    name: "Pawtrait Creator",
    author: {
      name: "",
      url: "https://rsugrafx.com/"
    },
    description: "Creates cartoon pet portraits. Upload a photo of your pet, type its name, submit it, and watch the magic happen.",
    tags: ["cartoon", "portrait", "image editing", "pictures", "photos", "images"],
    added: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    url: "https://chat.openai.com/g/g-WYlcscE2T-pawtrait-creator",
    image: "https://files.oaiusercontent.com/file-YdiwHH35WY3pfNnmUWCeil7g?se=2123-10-21T09%3A37%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo.png&sig=5XMhernnJp0cGH7%2BHMFnROC/g7lZHiXjGjc2qZN8kdo%3D"
  },
  {
    id: isUuid("5213dba9-2ee8-4bf8-bf99-0d78442b8a52"),
    name: "Your Socratic Buddy",
    author: {
      name: "TOM GALLY",
      url: ""
    },
    description: "Thoughtful discussions with a knowledgeable partner",
    tags: ["philosophy", "discussion", "conversation"],
    added: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    url: "https://chat.openai.com/g/g-o03gktdyW-your-socratic-buddy",
    image: "https://files.oaiusercontent.com/file-JfnzO7n2gPGaw9PHvFoBs1u4?se=2123-10-16T13%3A30%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da05973f9-1b0f-4ef1-adc4-ede0df30125f.png&sig=ZwwFiiVUh8DvJY18/NsePn09tOnS8ugPLvhgJ4d3cew%3D"
  },
  {
    id: isUuid("200eb415-0117-4a72-9677-3bc57661c2de"),
    name: "Permaculture GPT",
    author: {
      name: "Anthony McLaughlin",
      url: ""
    },
    description: "Thoughtful discussions with a knowledgeable partner",
    tags: ["permaculture", "gardening", "farming", "sustainability", "ecology", "agriculture"],
    added: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    url: "https://chat.openai.com/g/g-y8BV6typ7-permaculture-gpt",
    image: "https://files.oaiusercontent.com/file-Ng2oCJXLK8jvlwDDFO8I92hY?se=2123-10-17T12%3A32%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db67d4367-862c-40ca-bd5b-60996578acd7.png&sig=3/AjCFo6Wsfuj0cHlmPYi3%2BJnInPh5P3T2sJwWk4EX8%3D"
  },
  {
    id: isUuid("abe4a5b3-806c-4357-bd36-427da0c46e4a"),
    name: "LimitlessGPT",
    author: {
      name: "Naja Faysal",
      url: ""
    },
    description: "Concise Step-by-Step Strategist",
    tags: ["strategy", "business", "marketing", "planning", "productivity", "management"],
    added: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    url: "https://chat.openai.com/g/g-XUgnMbahO-limitlessgpt",
    image: "https://files.oaiusercontent.com/file-kmJxKAgJIAxtDvKBoKtgCX0L?se=2123-10-18T02%3A09%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252009.33.34%2520-%2520A%2520modern%252C%2520futuristic%252C%2520and%2520minimalistic%2520logo%2520for%2520%2527Limitless%252C%2527%2520a%2520productivity%2520and%2520life-planning%2520system.%2520The%2520logo%2520should%2520combine%2520symbols%2520of%2520a%2520brain%2520and%2520a.png&sig=fSSKOktPJSy0J67un1D5j8E711XhZGjqAuxmWBjC1Zo%3D"
  },
  {
    id: isUuid("7d377bc1-22d4-4428-98ea-101965a6b914"),
    name: "SEO GOAT",
    author: {
      name: "benjamin ogden",
      url: ""
    },
    description: "AI blog writer with SEO expertise and automatic AI image generation",
    tags: ["seo", "marketing", "blogging", "writing", "content writing", "images", "pictures"],
    added: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    url: "https://chat.openai.com/g/g-vCVZafMQ3-seo-goat",
    image: "https://files.oaiusercontent.com/file-0nJY9hPmCTEwNS4yLDQtDkSG?se=2123-10-16T10%3A38%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd2b70ac6-3476-494a-ad85-fa0bb3701f78.png&sig=rt1ZULrH%2BVsHiIiuoGHLEabhUzrODZClRbRHVHDzS5s%3D"
  },
  {
    id: isUuid("201686b3-b454-4dbe-ad95-c7c1cbe4b0e4"),
    name: "DoubleSpeak GPT",
    author: {
      name: "Safa Bilici",
      url: ""
    },
    description: "not telling lies whilst not telling the truth",
    tags: ["politics", "media", "propaganda", "marketing", "business"],
    added: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    updated: (/* @__PURE__ */ new Date("2023-11-23")).toISOString(),
    url: "https://chat.openai.com/g/g-FEPMHxDYx-doublespeak-gpt",
    image: "https://files.oaiusercontent.com/file-Hm9eNsZ7QJvv9cFjwiWIKZ7Q?se=2123-10-22T19%3A31%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd00a980f-d3f8-48b4-8169-7f98863ba1e2.png&sig=tFd5kd4XOjhuYTSybTkxZq1uPu5LpMl7PlOf1iC5TwI%3D"
  }
];
const gptInfos = gpts.map(
  ({ name, author, description, tags, added, updated, id, url, image }) => new GPTInfo(name, author, description, tags, added, updated, id, url, image)
);
const gptStore = writable(gptInfos);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `h1.svelte-1fg7w3u.svelte-1fg7w3u{position:relative;--tw-bg-opacity:1;background-color:var(--fallback-s,oklch(var(--s)/var(--tw-bg-opacity)));-webkit-background-clip:text;background-clip:text;color:transparent;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23fcfce7' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");font-size:clamp(2rem, 10vw, 9rem)}h1.svelte-1fg7w3u>span.svelte-1fg7w3u{display:block}@media(min-width: 768px){h1.svelte-1fg7w3u>span.svelte-1fg7w3u{margin-bottom:-1rem}}@media(min-width: 1024px){h1.svelte-1fg7w3u>span.svelte-1fg7w3u{margin-top:0.25rem}}h1.svelte-1fg7w3u>span.svelte-1fg7w3u{font-size:clamp(1rem, 5vw, 4rem)}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gpts2;
  let tags;
  let $gpts, $$unsubscribe_gpts = noop, $$subscribe_gpts = () => ($$unsubscribe_gpts(), $$unsubscribe_gpts = subscribe(gpts2, ($$value) => $gpts = $$value), gpts2);
  let scrollY = 0;
  $$result.css.add(css);
  $$subscribe_gpts(gpts2 = derived([gptStore, filterStore], ([$gptStore, $filterStore]) => {
    if ($gptStore.length === 0)
      return [];
    const { query, tags: tags2, sort, desc } = $filterStore;
    let filteredStore = $gptStore;
    if (tags2.length > 0) {
      filteredStore = filteredStore.filter((gpt) => {
        return tags2.every((tag) => gpt.tags.includes(tag));
      });
    }
    if (query) {
      filteredStore = filteredStore.filter((gpt) => gpt.name.toLowerCase().includes(query.toLowerCase()));
    }
    filteredStore = _.sortBy(filteredStore, sort);
    return desc ? filteredStore.reverse() : filteredStore;
  }));
  tags = _.uniq($gpts.map((gpt) => gpt.tags).flat());
  $$unsubscribe_gpts();
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
