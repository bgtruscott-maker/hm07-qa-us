// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
            "price": 250
        }

test('PUT product update returns status 200', async () => {
    
		const response = await fetch(`${config.API_URL}/api/v1/products/4`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		expect(response.status).toBe(200);
	});

test('PUT product update returns ok true in the response body', async () => {
		const response = await fetch(`${config.API_URL}/api/v1/products/4`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const body = await response.json();
		expect(body.ok).toBe(true);
	});
