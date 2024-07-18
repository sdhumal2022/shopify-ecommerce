import CpBanner from "@/component/cp-banner/cpBanner";
import CpProduct from "@/component/cp-product/cpProduct";
import shopifyFetch from "@/pages/api//utils/api-handler";
//import {imageServerURL} from "@/utils/config";

interface prop{
  serverImgUrl:any;
}

async function getData() { 
  try {
    const resData = await shopifyFetch();
    return { resData }; // Return the data 
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Throw the error to handle it in the calling function
  }
}

export default async function PLP() {
  let props = await getData();
  const shopifyData = props.resData;
  // console.log(shopifyData, ': shopifyData');
  
  return (
    <main>
      <CpBanner />
      <CpProduct productData={shopifyData} />
    </main>
  );
}
