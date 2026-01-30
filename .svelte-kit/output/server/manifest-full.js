export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DewsWysy.js",app:"_app/immutable/entry/app.eMhWmOUD.js",imports:["_app/immutable/entry/start.DewsWysy.js","_app/immutable/chunks/BzYXveVX.js","_app/immutable/chunks/9ez00J6O.js","_app/immutable/chunks/D_BMnu4b.js","_app/immutable/chunks/CgdH1Dce.js","_app/immutable/entry/app.eMhWmOUD.js","_app/immutable/chunks/9ez00J6O.js","_app/immutable/chunks/DY5k5uWI.js","_app/immutable/chunks/Cnv_taKE.js","_app/immutable/chunks/DB4D3CDU.js","_app/immutable/chunks/CpnSOZaI.js","_app/immutable/chunks/CgdH1Dce.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
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
				id: "/apPhysicsReference",
				pattern: /^\/apPhysicsReference\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/dev",
				pattern: /^\/dev\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/periodicTable",
				pattern: /^\/periodicTable\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/physicalScienceReference",
				pattern: /^\/physicalScienceReference\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/physicsReference",
				pattern: /^\/physicsReference\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
