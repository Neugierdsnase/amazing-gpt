import * as server from '../entries/pages/gpt/_slug_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gpt/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/gpt/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.bce56afd.js","_app/immutable/chunks/scheduler.ddf07609.js","_app/immutable/chunks/index.e55c1a00.js","_app/immutable/chunks/index.dbfd1baa.js","_app/immutable/chunks/lodash.fb661e38.js","_app/immutable/chunks/index.24ec2bc8.js"];
export const stylesheets = [];
export const fonts = [];
