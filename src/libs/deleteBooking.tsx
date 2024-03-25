export default async function getCar(id:string,token:string){
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/cars/${id}`,{
        method:"delete",
        headers: {
            authorization:`Bearer ${token}`,
        }
    })
    if(!response.ok) {
        const a = await response.json()
        throw new Error(a.message)
    }

    return await response.json()
}