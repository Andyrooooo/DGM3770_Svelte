import { error } from '@sveltejs/kit';
import { terms } from '../terms.js';

export function load({ params }) {
	const term = terms.find((term) => term.term === params.term);

	if (!term) throw error(404);

	return {
		term
	};
}
