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
		client: {"start":"_app/immutable/entry/start.ea69fe33.js","app":"_app/immutable/entry/app.591e09dd.js","imports":["_app/immutable/entry/start.ea69fe33.js","_app/immutable/chunks/scheduler.ddf07609.js","_app/immutable/chunks/singletons.0ac4f805.js","_app/immutable/chunks/index.24ec2bc8.js","_app/immutable/entry/app.591e09dd.js","_app/immutable/chunks/scheduler.ddf07609.js","_app/immutable/chunks/index.e55c1a00.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/gpt/[slug]",
				pattern: /^\/gpt\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
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
