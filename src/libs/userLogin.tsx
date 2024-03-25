export default async function userLogin(userEmail:string, userPassword:string){
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword
        }),  
    })

    if(!response.ok){
        const a = await response.json()
        console.log(a)
        throw new Error(a.message)
    }

    return await response.json()
}