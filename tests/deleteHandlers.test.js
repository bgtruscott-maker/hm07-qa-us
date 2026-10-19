// eslint-disable-next-line no-undef
const config = require('../config');

test('DELETE kit returns status 200', async () => {
    
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
			method: 'DELETE',
			
		});
		expect(response.status).toBe(200);
	}

	);

test('DELETE kit returns ok true in the response body', async () => {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
			method: 'DELETE',
			
		});
		const body = await response.json();
		expect(body.ok).toBe(true);
	});