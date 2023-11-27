export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon16.png","logo1024.png","logo256.png","logo512.png","prompt_dress_logo.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.a6d542a6.js","app":"_app/immutable/entry/app.e7bd6d09.js","imports":["_app/immutable/entry/start.a6d542a6.js","_app/immutable/chunks/scheduler.c4f7ee1e.js","_app/immutable/chunks/singletons.e58e3646.js","_app/immutable/chunks/index.0a49d305.js","_app/immutable/entry/app.e7bd6d09.js","_app/immutable/chunks/scheduler.c4f7ee1e.js","_app/immutable/chunks/index.a434242e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
