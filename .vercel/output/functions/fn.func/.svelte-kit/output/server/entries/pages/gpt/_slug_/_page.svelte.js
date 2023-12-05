import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AuthorSpan, T as Tags, B as BASE_OPENAI_GPT_URL } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { gpt } = data;
  const { name, author, tags, description, image, slug } = gpt[0][0];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex flex-col gap-8 min-h-screen items-stretch my-12 pb-12"><div class="p-4 md:p-12 flex flex-wrap gap-4 items-center flex-col md:flex-row-reverse justify-between rounded-xl bg-base-300"><div class="flex justify-center items-center h-44 w-44"><img${add_attribute("src", image, 0)}${add_attribute("alt", name?.display, 0)} class="mask mask-circle w-full"></div> <div><h1 class="text-4xl font-bold">${escape(name.display)}</h1> ${validate_component(AuthorSpan, "AuthorSpan").$$render($$result, { author }, {}, {})} ${validate_component(Tags, "Tags").$$render($$result, { size: "sm", tags }, {}, {})}</div></div> <a href="${escape(BASE_OPENAI_GPT_URL, true) + "/" + escape(slug, true)}" class="btn btn-secondary md:w-1/3 btn-lg self-center" target="_blank" rel="noopener noreferrer">Use
		<i class="ph-bold ph-arrow-square-out"></i></a> <div class="p-12 rounded-xl bg-base-300"><h2 class="text-xl font-bold" data-svelte-h="svelte-amnvnu">Description</h2> <div class="divider"></div> <p>${escape(description)}</p> </div> <a href="mailto:prompt-dress@vomkonstant.in" class="text-sm mt-32 btn btn-outline btn-error btn-xs font-light font-xs absolute bottom-4 right-4" data-svelte-h="svelte-7sblhc">Report an issue with this GPT.</a></div>`;
});
export {
  Page as default
};
