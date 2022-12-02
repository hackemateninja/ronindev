import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about-me preprocessors
	preprocess: preprocess({ postcss: true }),

	kit: {
		adapter: adapter(),
		alias: {
			$add: 'src/adapters',
			$app: 'src/application',
			$domain: 'src/domain',
			$services: 'src/services',
			$ui: 'src/ui',
			$svg: 'src/ui/svg',
			$root: 'src'
		}
	}
};

export default config;
