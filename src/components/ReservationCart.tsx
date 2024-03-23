"use client"
import { useAppSelector,AppDispatch } from "@/redux/store";
import { removeReservation } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";
export default function ReservationCart(){
    const carItems = useAppSelector( (state)=>state.cartSlice.carItem)
    
    const dispatch = useDispatch<AppDispatch>()
    
    return(
        <>
        {
            carItems.map((reservationItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                key={reservationItem.carId}>
                        <div className="text-xl">{reservationItem.CarModel}</div>
                        <div className="text-sm">Pick-up {reservationItem.pickupDate}
                         from {reservationItem.pickupLocation}
                        </div>
                        <div className="text-sm">Return {reservationItem.returnDate}
                         to {reservationItem.returnLocation}
                        </div>
                        <div className="text-md">Duration: {reservationItem.numOfDays}</div>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow"
                        onClick={()=>{
                            dispatch(removeReservation(reservationItem))
                        }}>
                        Remove from Cart
                        </button>
                </div>
            ))
        }
        </>
    );
}