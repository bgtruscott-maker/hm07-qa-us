// eslint-disable-next-line no-undef
const config = require('../config');


test('GET kit search returns status 200 for an existing kit', async () => {
	const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
	expect(response.status).toBe(200);
	}); 

test('GET kit search returns status 404 for a nonexistent kit', async () => {
	const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20New%20York`);
	const data = await response.json();
	
	expect(response.status).toBe(404);
	expect(data.code).toBe(404);
	expect(data.message).toBe("Not Found");
	
}); 

test('GET kit search returns the required product fields', async () => {
	const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
	const body = await response.json();
	const productsList = body.productsList;
	
	for (let i = 0; i < productsList.length; i++) {
	expect(productsList[i].id).toBeDefined();
	expect(productsList[i].id).not.toBeNull();
	expect(productsList[i].name).toBeDefined();
	expect(productsList[i].name).not.toBeNull();
    expect(productsList[i].price).toBeDefined();
	expect(productsList[i].price).not.toBeNull();
	expect(productsList[i].weight).toBeDefined();
	expect(productsList[i].weight).not.toBeNull();
	expect(productsList[i].units).toBeDefined();
	expect(productsList[i].units).not.toBeNull();
	expect(productsList[i].quantity).toBeDefined();
	expect(productsList[i].quantity).not.toBeNull();
	} 
});