import dayjs, { Dayjs } from 'dayjs';
import { BookingEdit } from '@/interfaces';
export default async function  upDateBooking(token:string,bookingId:string,bookingEdit:BookingEdit){
    
    // await new Promise ((resolve)=>{setTimeout(resolve,5000)})
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${bookingId}`,{
        method:"GET",
        headers: {
            authorization:`Bearer ${token}`,
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            bookingEdit
        }), 
    })
const a = await response.json()
    if(!response.ok) {
        
        throw new Error(a.message)
    }

    return await response.json()
}