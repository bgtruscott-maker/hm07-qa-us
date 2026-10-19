// eslint-disable-next-line no-undef
const config = require('../config');

test('GET warehouses returns status 200', async () => {
	const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	expect(response.status).toBe(200);
});

test('GET warehouses returns warehouse names and working hours', async () => {
	
	const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	const body = await response.json();
		
	for (let i = 0; i < body.length; i++) {
	expect(body[i].name).toBeDefined();
	expect(body[i].name).not.toBeNull();
	expect(body[i].workingHours).toBeDefined();
	expect(body[i].workingHours).not.toBeNull();
    expect(body[i].workingHours.start).toBeDefined();
	expect(body[i].workingHours.start).not.toBeNull();
	expect(body[i].workingHours.end).toBeDefined();
	expect(body[i].workingHours.end).not.toBeNull();
	} 
});

