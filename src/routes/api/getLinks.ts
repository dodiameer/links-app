import { database_id, notion } from '$lib/notion';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const links = (
		await notion.databases.query({
			database_id
		})
	).results.map((link) => {
		return {
			id: link.id,
			//@ts-ignore
			title: link.properties['Title'].title[0].plain_text,
			//@ts-ignore
			url: link.properties['URL'].url
		};
	});

	return {
		status: 200,
		body: links,
		headers: {
			'Content-Type': 'application/json'
		}
	};
};
