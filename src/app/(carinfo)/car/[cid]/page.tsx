import Image from "next/image"
import getCar from "@/libs/getCar"
import Link from "next/link";
export default async function CarDetailPage({params} : {params:{cid:string}}){
    const carDetail = await getCar(params.cid)
    /**
     * Mock Data for Demonstration Only
     */
    /*
    const mockCarRepo = new Map()
    mockCarRepo.set("001",{name:"Honda Civic",image: "/img/civic.jpg"})
    mockCarRepo.set("002",{name:"Honda Accord",image: "/img/accord.jpg"})
    mockCarRepo.set("003",{name:"Toyota Fortuner",image: "/img/fortuner.jpg"})
    mockCarRepo.set("004",{name:"Tesla Model 3",image: "/img/tesla.jpg"})
    */

    return (
        <main className="test-center p-5">
            <h1 className="text-lg front-medium text-center">{carDetail.data.model}</h1>
            <div className="flex flex-row my-5">
                <Image src={carDetail.data.picture} alt="Car Image"
                    width={0} height={0} sizes="100vw" className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">{carDetail.data.description}
                <div className="text-md mx-5">Doors: {carDetail.data.doors}</div>
                <div className="text-md mx-5">Seats: {carDetail.data.seats}</div>
                <div className="text-md mx-5">Large Bages: {carDetail.data.largebags}</div>
                <div className="text-md mx-5">Small Bages: {carDetail.data.smallbags}</div>
                <div className="text-md mx-5">Daily Rental Rate: {carDetail.data.dayRate} (insurance included)</div>
                
                <Link href={`/reservations?id=${params.cid}&model=${carDetail.data.model}`}>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow">
                            Make Reservation
                    </button>
                </Link>
                
                
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return [{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'}]
}