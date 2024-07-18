// // src/app/page/pdp/[slug]/page.tsx

// import { useRouter } from 'next/router';
// import React,{ useEffect, useState } from 'react';

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   body_html: string;
//   image: { src: string };
//   // Add other fields as needed
// }

// const ProductDetailPage = () => {
//   const router = useRouter();
//   const { slug } = router.query; // Access slug from router query

//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://onlineshoppingfashion.myshopify.com/admin/api/2024-07/products/${slug}.json`);
//         if (response.ok) {
//           const data = await response.json();
//           setProduct(data.product as Product); // Assert 'data.product' to 'Product' type
//         } else {
//           throw new Error('Failed to fetch product');
//         }
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
      
//     };

//     if (slug) {
//       fetchProduct();
//     }
//   }, [slug]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//       {/* Render other product details */}
//     </div>
//   );
// };

// export default ProductDetailPage;
