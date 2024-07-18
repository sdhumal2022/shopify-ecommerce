import React, {} from 'react'
import styles from './cpBanner.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const CpBanner = () =>{
    return(
        <>
        <div className={`${styles['mainBanner']}`}>
        <div className={`${styles['contentSec']}`}>
        Summer <br/>Sales
        </div>
        <div className="image-Wrap">
            <Image src="/assets/images/main-banner01.png" alt="Summer sale" width={945} height={352} style={{
                  objectFit: "cover",
                }}></Image>
            {/* <div className="search-Wrap">
                <div className="search-input-wrap">
                    <input id="search-input" type="text" placeholder="Search" className="search-input">
                    <button className="search-icon search-btn">
                        <img src="assets/images/search.png" alt="Cart Icon" >
                    </button>
                </div>
            </div>     */}
        </div>
        </div>
        </>
    )
}

export default CpBanner