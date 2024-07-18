// src/pages/api/utils/product-detail-handler.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  const apiKey = 'bdf5acc87d9774fbd14e5af855d89696';
  const password = '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';
  const storeName = 'onlineshoppingfashion';
  const apiVersion = '2024-07';
  const resource = 'products';
  
  const url = `https://${storeName}.myshopify.com/admin/api/${apiVersion}/${resource}/${slug}.json`;

  console.log(`Received request for product with slug: ${slug}`);
  console.log(`Fetching product from URL: ${url}`);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${apiKey}:${password}`)
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error fetching product: ${response.status} ${response.statusText}`);
      console.error(`Error details: ${errorText}`);
      return res.status(response.status).json({ error: response.statusText });
    }

    const data = await response.json();
    console.log(`Product data: ${JSON.stringify(data)}`);
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching product: ${error.message}`);
      res.status(500).json({ error: error.message });
    } else {
      console.error('An unknown error occurred');
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}
