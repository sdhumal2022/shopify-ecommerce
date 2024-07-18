import React, { useState } from 'react'
import styles from './cpProductDetail.module.scss'
import Image from 'next/image'

const CpProductDetail = () =>{
    const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.
    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
          return (prevCount += 1);
        });
      }
    
      function decrement() {
        setCount(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 1); 
          } else {
            return (prevCount = 0);
          }
        });
      }

    return(
        <>
               
         <div className={`${styles['product-detail-wrap']}`}>
        <div className={`${styles['container']}`}>
            <div className= {`${styles['product-img']} `}>
            </div>
            <div className={`${styles['product-detail-sec']}`}>
                <h2 className={`${styles['product-title']}`}> BIYLACLESEN Women’s 3-in-1 Snowboard Jacket Winter Coats</h2>
                <span className={`${styles['product-price']}`}>$95.00</span>
                <div className={`${styles['rating']}`}></div>
                <p className={`${styles[`product-desc`]}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna. Read more</p>
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
                <button className={`${styles['add-to-cart']}`}>ADD TO CART</button>
                <div className={`${styles['other-btn-sec']}`}>
                    <span className={`${styles['other-btn-item']}`}>
                    <Image src="/assets/images/heart.png" alt="fav" className={`${styles['icon-img']}`} width={18} height={16} ></Image>
                Save
                    </span>

                    <span className={`${styles['other-btn-item']}`}>
                    <Image src="/assets/images/heart.png" alt="fav" className={`${styles['icon-img']}`} width={18} height={16} ></Image>
                Share
                    </span>
               
                </div>
            </div>
        </div>
        <div className={`${styles['description-wrap']}`}>
            <div className='container'>
            <h2 className={`${styles['description-title']}`}>BIYLACLESEN Women’s 3-in-1 Snowboard Jacket Winter Coats</h2>
            <h3 className={`${styles['description-subheading']}`}>Description</h3>
            <p className={`${styles['desc']}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit amet ipsum dolor sit amet, consectetur. Duis tristique sollicitudin nibh sit amet. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit amet ipsum dolor sit amet, consectetur. Duis tristique sollicitudin nibh sit amet. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.</p>
        </div>
        
        </div>
        </div>
        </>
    )
}

export default CpProductDetail