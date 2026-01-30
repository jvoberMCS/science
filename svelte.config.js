import adapter from '@sveltejs/adapter-static'
// import adapter from '@sveltejs/adapter-netlify'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'

const config = {
	compilerOptions: {
		runes: true,
	},
	// preprocess: [vitePreprocess({ script: true }), mdsvex()],
	onwarn: (warning, handler) => {
		// suppress warnings on `vite dev` and `vite build`; but even without this, things still work
		if (warning.code === 'a11y-click-events-have-key-events') return
		if (warning.code === 'a11y-no-static-element-interactions') return
		if (
			warning.code ===
			'a11y_no_noninteractive_element_to_interactive_role'
		)
			return
		if (warning.code === 'a11y_click_events_have_key_events') return
		handler(warning)
	},
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true,
			fallback: '404.html', // Required for SPA-like routing on GH Pages
		}),
		alias: {
			'@/*': './src/lib/',
		},
		paths: {
			// Use your repo name (e.g., '/my-repo') if not using a custom domain
			base: process.env.NODE_ENV === 'production' ? '/build' : '',
		},
		prerender: {
			handleHttpError: 'warn'
		}
	},
	extensions: ['.svelte', '.svx'],
	output: {
		inlineDynamicImports: false,
		bundleStrategy: 'inline'
	}
}

export default config
