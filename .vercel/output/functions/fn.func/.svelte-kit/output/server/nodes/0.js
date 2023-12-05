import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.a17d3744.js","_app/immutable/chunks/scheduler.ddf07609.js","_app/immutable/chunks/index.e55c1a00.js","_app/immutable/chunks/lodash.fb661e38.js"];
export const stylesheets = ["_app/immutable/assets/0.9825f8f6.css"];
export const fonts = ["_app/immutable/assets/Phosphor-Bold.57717500.woff2","_app/immutable/assets/Phosphor-Bold.5bc6da01.woff","_app/immutable/assets/Phosphor-Bold.b0b27f81.ttf","_app/immutable/assets/Phosphor-Fill.390d843d.woff2","_app/immutable/assets/Phosphor-Fill.7222cf34.woff","_app/immutable/assets/Phosphor-Fill.3a8fd923.ttf"];
