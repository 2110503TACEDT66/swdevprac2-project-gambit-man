export default async function  getBookings(token:string){
    
    // await new Promise ((resolve)=>{setTimeout(resolve,5000)})
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings`,{
        method:"GET",
        headers: {
            authorization:`Bearer ${token}`,
        }
    })

    if(!response.ok) {
        throw new Error("Cannot get the booking")
    }

    return await response.json()
}