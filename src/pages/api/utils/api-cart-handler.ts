
const apiKey = 'bdf5acc87d9774fbd14e5af855d89696';
  const password = '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';
  const storeName = 'onlineshoppingfashion';
  const apiVersion = '2024-07';
  const resource = 'products';
  

// Example: Fetching cart data from Shopify using a session token or user authentication
export const fetchCartData = async (token: string) => {
    const apiUrl = `https://onlineshoppingfashion.myshopify.com/api/2024-07/customers/${token}/cart.json`;
  
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'X-Shopify-Storefront-Access-Token': 'your_storefront_access_token',
          // Add other necessary headers or authentication tokens
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch cart data');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching cart data:', error);
      throw error;
    }
  };

  