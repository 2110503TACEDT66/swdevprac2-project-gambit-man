import dayjs, { Dayjs } from 'dayjs';
export default async function  addBooking(providerId:string,token:string,carName:string,date:Dayjs){
    
    // await new Promise ((resolve)=>{setTimeout(resolve,5000)})
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/providers/${providerId}/bookings/`,{
        method:"POST",
        headers: {
            authorization:`Bearer ${token}`,
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            BookingDate: date,
            car: carName
            
        }),  
    })
    if(!response.ok) {
        const a = await response.json()
        throw new Error(a.message)

    }

    return await response.json()
}
