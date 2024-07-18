"use client"
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from '../../../component/cp-product-detail/cpProductDetail.module.scss';
import Image from 'next/image';

interface Image {
  src: string;
}

interface Variant {
  price: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  body_html: string;
  image: Image;
  variants: Variant[];
}

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = (params as { slug: string }).slug;
  const [product, setProduct] = useState<Product | null>(null);
  const [count, setCount] = useState(1);
  const [itemsAdded, setItemsAdded] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  }

  async function addToCart() {
    if (product) {
      const price = parseFloat(product.variants[0].price);
      if (isNaN(price)) {
        console.error('Invalid price:', product.variants[0].price);
        return;
      }

      const cartItem = {
        productId: product.id,
        productName: product.title,
        size: 'Medium', // Replace with actual size
        color: 'Red', // Replace with actual color
        price: price,
        quantity: count,
        image: product.image.src,
      };

      // Clear previous cart data and add the new item
      const cart = [cartItem];
      localStorage.setItem('cart', JSON.stringify(cart));
      setItemsAdded(count);
    }
  }

  function goToCart() {
    router.push('/cart');
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/utils/product-detail-handler?slug=${slug}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data.product as Product);
        } else {
          console.error('Failed to fetch product:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (!product) {
    return <div className='container'>Loading...</div>;
  }

  return (
    <div className={`${styles['product-detail-wrap']}`}>
      <div className={`${styles['container']}`}>
        <div className={`${styles['product-img']}`}>
          <div dangerouslySetInnerHTML={{ __html: product.body_html }} />
          {product.image && <Image src={product.image.src} width={400} height={400} alt={product.title} />}
        </div>
        <div className={`${styles['product-detail-sec']}`}>
          <h2 className={`${styles['product-title']}`}>{product.title}</h2>
          <span className={`${styles['product-price']}`}>{product.variants[0]?.price}</span>
          <div className={`${styles['rating']}`}></div>
          <p className={`${styles['product-desc']}`}>{product.description}</p>
          <div className="product-quantity-wrap">
            <h3 className="quantity-title"> Quantity</h3>
            <ul className="quantity-list">
              <li className="quantity-item">
                <button type='button' onClick={decrement} className="quantity-btn">-</button>
              </li>
              <li className={`${styles['quantity-item']}`}>
                <span className='quantity-input'>{count}</span>
              </li>
              <li className={`${styles['quantity-item']}`}>
                <button type='button' onClick={increment} className="quantity-btn">+</button>
              </li>
            </ul>
          </div>
          <div className={`${styles['button-wrap']}`}>
          <button className={`${styles['add-cart']}`} onClick={addToCart}>ADD TO CART</button>
          {itemsAdded > 0 && (
            <div className={styles['cart-count']}>
              {itemsAdded} item{itemsAdded > 1 ? 's' : ''} added to cart
            </div>
          )}
          <button className={`${styles['add-cart']}`} onClick={goToCart}>
            Go to Cart
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
