"use client"
import React, { useState } from 'react';
import styles from './cpProduct.module.scss';
import CpFilter from '../cp-filter/cpFilter';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from'../../app/plp/product'; // Ensure Product interface matches your actual product structure

interface Props {
  productData: { products: Product[] };
}

const CpProduct: React.FC<Props> = ({ productData }) => {
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

  // Function to handle filter change from CpFilter component
  const handleFilterChange = (filters: string[]) => {
    setAppliedFilters(filters);
  };

  // Function to filter products based on selected filters
  const filterProducts = () => {
    if (appliedFilters.length === 0) {
      return productData.products; // Return all products if no filters selected
    } else {
      return productData.products.filter(product => appliedFilters.includes(product.product_type));
    }
  };

  // Apply filtering to products
  const filteredProducts = filterProducts();

  return (
    <div className={styles['product-wrap']}>
      <div className={styles['container']}>
        <CpFilter onFilterChange={handleFilterChange} />
        <div className={styles['product-sec']}>
          {/* Breadcrumb and other UI elements */}
          <ul className={styles['product-list']}>
            {filteredProducts.map((item: Product, index: number) => (
              <li className={styles['product-item']} key={index}>
                <Link href={`/plp/${item.id}`}>
                  <Image
                    src={item.image?.src}
                    width={350}
                    height={350}
                    alt={item.title} // Ensure a meaningful alt text
                    className={`${styles['product-img']}`}
                  />
                </Link>
                <h3 className={styles['product-title']}>{item.title}</h3>
                <h4 className={styles['product-price']}>{item.variants[0].price}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CpProduct;
