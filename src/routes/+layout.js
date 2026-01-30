// src/routes/+layout.js

// This enables prerendering for every page that uses this layout
export const prerender = true;
export const trailingSlash = "always";

// You can still include a load function if needed
/** @type {import('./$types').LayoutLoad} */
export async function load() {
	return {
		timestamp: new Date().toISOString()
	};
}
