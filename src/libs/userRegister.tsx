export default async function userRegister(name:string, userEmail:string, tel:string ,userPassword:string){
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: userEmail,
            tel: tel ,
            password: userPassword
        }),  
    })

    if(!response.ok){
        throw new Error("failed to log-in")
    }

    return await response.json()
}