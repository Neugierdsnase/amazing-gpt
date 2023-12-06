

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d46aba3e.js","_app/immutable/chunks/scheduler.ddf07609.js","_app/immutable/chunks/index.e55c1a00.js","_app/immutable/chunks/singletons.86f5ea25.js","_app/immutable/chunks/index.24ec2bc8.js"];
export const stylesheets = [];
export const fonts = [];
