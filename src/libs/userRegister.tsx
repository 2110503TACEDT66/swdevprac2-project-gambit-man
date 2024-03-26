import { UserRegister } from "@/interfaces"
import { Redirect } from "next"
export default async function userRegister(user:UserRegister){
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            name: user.name,
            email: user.userEmail,
            tel: user.tel ,
            password: user.userPassword
        }),  
    })

    if(!response.ok){
        throw new Error("failed to log-in")
    }

    return await response.json()
}