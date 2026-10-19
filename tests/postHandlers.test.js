// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "products": [
            {
                "id": 5,
                "quantity": 1
            },
            {
                "id": 4,
                "quantity": 5
            }
        ]
}

test('POST warehouse check returns status 200', async () => {
    
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		expect(response.status).toBe(200);
	});
	

test('POST warehouse check returns warehouse names and product availability', async () => {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		const warehouseNames = Object.keys(data);
		expect(warehouseNames.length).toBeGreaterThan(0);

		for (let i = 0; i < warehouseNames.length; i++) {
    		const products = data[warehouseNames[i]];
			expect(products).toBeDefined();
			expect(products).not.toBeNull();
			const productNames = Object.keys(products);
			  for (let j = 0; j < productNames.length; j++) {
        		expect(typeof data[warehouseNames[i]][productNames[j]]).toBe("boolean");
    }
}
		});
	
	
