

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.aff12b15.js","_app/immutable/chunks/scheduler.ddf07609.js","_app/immutable/chunks/index.e55c1a00.js","_app/immutable/chunks/singletons.2becec3c.js","_app/immutable/chunks/index.24ec2bc8.js"];
export const stylesheets = [];
export const fonts = [];
