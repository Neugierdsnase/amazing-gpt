

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.03d953af.js","_app/immutable/chunks/scheduler.c4f7ee1e.js","_app/immutable/chunks/index.a434242e.js","_app/immutable/chunks/singletons.e58e3646.js","_app/immutable/chunks/index.0a49d305.js"];
export const stylesheets = [];
export const fonts = [];
