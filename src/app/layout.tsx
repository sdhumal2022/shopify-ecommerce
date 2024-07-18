import React,{} from'react'
import "../styles/baseglobal.scss";
import CpHeader from "../component/cp-header/cpHeader"
import CpFooter from "../component/cp-footer/cpFooter";
import { getFooterData } from "../component/cp-footer/cpFooter_data";
import { getHeaderData } from "../component/cp-header/cpHeader_data";

export const metadata = {
  title: 'Shopify-ecommerce',
  description: 'Generated by Next.js',
}

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) 

{
  const footerData = getFooterData();
  const headerData = getHeaderData();
  return (
    <html lang="en">
      <body>
        <CpHeader headerData={headerData}/>
        {children}     
        <CpFooter footerData={footerData}/>    
      </body>
    </html>
  )
}
