import * as amp from '@sveltejs/amp';
// @ts-expect-error - dropcss is not typed
import dropcss from 'dropcss';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  let buffer = '';

  return await resolve(event, {
    transformPageChunk: ({ html, done }) => {
      buffer += html;

      if (done) {
        let css = '';
        const markup = amp
          .transform(buffer)
          .replace('⚡', 'amp') // dropcss can't handle this character
          .replace(/<style amp-custom([^>]*?)>([^]+?)<\/style>/, (match, attributes, contents) => {
            css = contents;
            return `<style amp-custom${attributes}></style>`;
          });

        css = dropcss({ css, html: markup }).css;
        return markup.replace('</style>', `${css}</style>`);
      }
    }
  });
}
// TODO: It's a good idea to use the handle hook to validate the transformed HTML using amphtml-validator, but only if you're prerendering pages since it's very slow.
