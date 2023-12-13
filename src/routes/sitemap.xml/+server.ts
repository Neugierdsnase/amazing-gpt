import dayjs from 'dayjs';
import type { GPTInfoType } from '../../types/gpt';
import sql from '../../db';

const generateUrlElement = ({ slug, updated }: GPTInfoType) => `
	<url>
		<loc>https://amazing-gpt.com/gpt/${slug}</loc>
		<lastmod>${dayjs(updated).format('YYYY-MM-DD')}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
	</url>
`;

export const GET = async () => {
	const gpts =
		(await sql`SELECT id, displayname, sortname, authorname, authorurl, description, image, slug, tags FROM gpt_entries`) as GPTInfoType[];

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
			${gpts.map(generateUrlElement)}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
};
