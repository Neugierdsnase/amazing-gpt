import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.51d2873b.js","_app/immutable/chunks/scheduler.c4f7ee1e.js","_app/immutable/chunks/index.a434242e.js"];
export const stylesheets = ["_app/immutable/assets/0.2f69fe3b.css"];
export const fonts = ["_app/immutable/assets/Phosphor-Bold.57717500.woff2","_app/immutable/assets/Phosphor-Bold.5bc6da01.woff","_app/immutable/assets/Phosphor-Bold.b0b27f81.ttf","_app/immutable/assets/Phosphor-Fill.390d843d.woff2","_app/immutable/assets/Phosphor-Fill.7222cf34.woff","_app/immutable/assets/Phosphor-Fill.3a8fd923.ttf"];
