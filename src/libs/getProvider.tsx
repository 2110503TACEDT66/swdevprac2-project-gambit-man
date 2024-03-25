export default async function  getProvider(token:string){
    
    // await new Promise ((resolve)=>{setTimeout(resolve,5000)})
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/providers`)

    if(!response.ok) {
        throw new Error("Cannot get the provider")
    }

    return await response.json()
}