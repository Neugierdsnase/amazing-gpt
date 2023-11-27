export const prerender = false;

import { db } from '../db';

async function main() {
	try {
		// Connect to the database
		await db.connect('http://127.0.0.1:8000', {
			// Set the namespace and database for the connection
			namespace: 'test',
			database: 'test',

			// Set the authentication details for the connection
			auth: {
				namespace: 'test',
				database: 'test',
				root: 'root',
				username: 'user',
				password: 'root'
			}
		});
	} catch (e) {
		console.error('ERROR', e);
	}
}

main();
