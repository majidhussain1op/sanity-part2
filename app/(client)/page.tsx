// import Container from "@/components/Container";
import DiscountBanner from "@/components/DiscountBanner";
// import { Button } from "@/components/ui/button";
import {getSale} from "@/sanity/helpers"


export default async function Home() {
  const sales = await getSale()
  
  
  
  return (
    
      <DiscountBanner sales={sales}/>
  );
}
