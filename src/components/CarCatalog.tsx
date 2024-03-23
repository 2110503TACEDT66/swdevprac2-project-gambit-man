import Link from "next/link";
import ProductCard from "./ProductCard";
import { CarItem,CarJson } from "interfaces";
export default async function CarCatalog({carJson}:{carJson:CarJson}) {
    const carJsonReady = await carJson
    return (
        <>
        Explore {carJsonReady.count} models in pur catalog
        <div style={{margin:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap", justifyContent:"space-around",alignContent:"space-around",padding:"10px"}}>
                {
                    carJsonReady.data.map((carItem:CarItem)=>(
                        <Link href={`/car/${carItem.id}`} 
                        className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[20%]">
                        <ProductCard carName={carItem.model} imgSrc={carItem.picture}/> 
                        </Link>
                           
                    ))
                }
            </div>
        </>
    );

}