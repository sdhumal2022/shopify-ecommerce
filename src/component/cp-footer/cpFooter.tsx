import React, {} from 'react'
import styles from './cpFooter.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface prop {
    footerData: any;
}

const CpFooter  = (props : prop) =>{
    const footerData = props.footerData;
    return(
        <>        
            <footer role="footer" className={`${styles['footer']}`}>
                <div className="container">
                    <ul className={`${styles['footerMenuList']}`}>
                        {footerData.map((item: any, index: number) => {
                            return (    
                                <li className={`${styles['footer-Menu-ListItem']}`} key={index}>
                                    <h3 className={`${styles['footerHeading']}`}>{item.label}</h3>
                                    {item.subMenu.length > 0 && 
                                        <ul className={`${styles['footer-list']}`}>
                                            {item.subMenu.map((item2:any, indexVal:number) => {
                                                return (
                                                    <li className= {`${styles['footer-list-item']}`} key={indexVal}>
                                                        <Link href={item2.url} className={`${styles['footer-link']}`}>{item2.label}</Link>
                                                    </li>
                                                )}
                                            )}   
                                        </ul>
                                    } 
                                </li>
                            )}
                        )} 
                    </ul>
                </div>
                <div className={`${styles['footer-info']}`}>
                    <div className="container">
                        <ul className={`${styles['footer-info-list']}`}>
                            <div className={`${styles.footerInfoItem} ${styles.footerLogo}`} >
                                <a href="#" className={`${styles['footer-logo-link']}`}>Shopify-ecommerce</a>
                            </div>
                            <div className= {`${styles.footerInfoItem} ${styles.footerCopyright}`}>
                                <p className={`${styles['footer-copyright-text']}`}>© Company Name Address Ave, City Name, State ZIP</p>
                            </div>
                            <ul className={`${styles['footer-bottom-item']}`}>
                                <li className={`${['footer-links-item']}`}><Link href="#" className={`${styles['footer-link']}`}>Terms of Use</Link></li>
                                <li className={`${['footer-links-item']}`}><Link href="#" className={`${styles['footer-link']}`}>Privacy Policy</Link></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
    }
export default CpFooter;