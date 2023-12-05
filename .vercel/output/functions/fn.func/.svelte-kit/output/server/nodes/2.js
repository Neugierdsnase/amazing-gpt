import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.b675b7d7.js","_app/immutable/chunks/scheduler.ddf07609.js","_app/immutable/chunks/index.e55c1a00.js","_app/immutable/chunks/index.9cfbfe50.js","_app/immutable/chunks/lodash.fb661e38.js","_app/immutable/chunks/index.24ec2bc8.js"];
export const stylesheets = ["_app/immutable/assets/2.d9366606.css"];
export const fonts = [];
