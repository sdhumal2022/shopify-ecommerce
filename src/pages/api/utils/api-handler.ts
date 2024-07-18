const apiKey = 'bdf5acc87d9774fbd14e5af855d89696';
const password = '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';
const storeName = 'onlineshoppingfashion';
const apiVersion = '2024-07';
const resource = 'products';

export default async function shopifyFetch() {
	const url = `https://${storeName}.myshopify.com/admin/api/${apiVersion}/${resource}.json`;

	try {
		const response = await fetch(url, {
		  method: 'GET',
		  headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Basic ' + btoa(apiKey + ':' + password)
		  }
		});

		if (!response.ok) {
		  throw new Error(`Error fetching data: ${response.statusText}`);
		}
	
		const data = await response.json();
		// console.log('API Data:', data);
		return data;
	} catch (error) {
		console.error('Error in shopifyFetch:', error);
		throw error;
	}
}