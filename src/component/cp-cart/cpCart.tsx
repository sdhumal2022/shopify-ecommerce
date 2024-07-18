import React, { useState } from 'react';
import styles from './cpCart.module.scss';
import Image from 'next/image';

interface Props {
  productName: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

const CpCart: React.FC<Props> = ({ productName, size, color, price, quantity, image }) => {
  const [count, setCount] = useState(quantity);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  }

  const formattedPrice = typeof price === 'number' ? price.toFixed(2) : '0.00';

  return (
    <>
      <div className='container'>
        <h2 className={`${styles['cart-heading']}`}>Your Shopping Bag</h2>
      </div>
      <div className='container'>
        <div className={`${styles['cart-wrap']}`}>
          <ul className={`${styles['cart-list']}`}>
            <li className={`${styles['cart-item']}`}>
              <div className={`${styles['pro-img']}`}>
                <Image src={image} alt={productName} className={styles.image}  width={166} height={199}></Image>
              </div>
              <div className={`${styles['content-wrap']}`}>
                <div className={`${styles['description-sec']}`}>
                  <h3 className={`${styles['product-title']}`}>{productName}</h3>
                  <p className={`${styles['desc']}`}>Size: {size}</p>
                  <p className={`${styles['desc']}`}>Color: {color}</p>
                  <p className={`${styles['desc']}`}>${formattedPrice}</p>
                </div>
                <div className="product-quantity-wrap typ-cart">
                  <ul className="quantity-list">
                    <li className="quantity-item">
                      <button type='button' onClick={decrement} className="quantity-btn">-</button>
                    </li>
                    <li className={`${styles['quantity-item']}`}>
                      <span className='quantity-input typ-cart'>{count}</span>
                    </li>
                    <li className={`${styles['quantity-item']}`}>
                      <button type='button' onClick={increment} className="quantity-btn">+</button>
                    </li>
                  </ul>
                </div>
                {/* <ul className={`${styles['editSec']}`}>
                  <li className={`${styles['edit-item']}`}>
                    <span className={`${styles['icon-img']}`}>
                      <Image src="/assets/images/edit-2.png" width={16} height={16} alt='edit'></Image>
                    </span>
                    <span className={`${styles['icon-text']}`}>Edit</span>
                  </li>
                  <li className={`${styles['edit-item']}`}>
                    <span className={`${styles['icon-img']}`}>
                      <Image src="/assets/images/trash-2.png" width={16} height={16} alt='edit'></Image>
                    </span>
                    <span className={`${styles['icon-text']}`}>Remove</span>
                  </li>
                  <li className={`${styles['edit-item']}`}>
                    <span className={`${styles['icon-img']}`}>
                      <Image src="/assets/images/heart.png" width={16} height={16} alt='edit'></Image>
                    </span>
                    <span className={`${styles['icon-text']}`}>Save for later</span>
                  </li>
                </ul> */}
              </div>
            </li>
          </ul>
          <div className={`${styles['price-summery']}`}>
            <h3 className={`${styles['price-heading']}`}>Pricing Summary</h3>
            <ul className={`${styles['summery-list']}`}>
              <li className={`${styles['summery-item']}`}>Subtotal</li>
              <li className={`${styles['summery-item']} ${styles['price']}`}>${(price * count).toFixed(2)}</li>
              {/* Add more pricing details as needed */}
            </ul>
            <button type='button' className={`${styles['checkout-btn']}`}>CHECKOUT</button>
            <div className={`${styles['pay-pal-btn']}`}>
              <Image src="/assets/images/PP_BTN.png" width={244} height={38} alt=''></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CpCart;
