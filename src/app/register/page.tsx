"use client"
import { UserRegister } from "@/interfaces";
import userRegister from "@/src/libs/userRegister";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Register(){
    const [name,setName] = useState<string|null>(null);
    const [email,setEmail] = useState<string|null>(null);
    const [telephone,setTelephone] = useState<string|null>(null);
    const [password,setPassword] = useState<string|null>(null);
    const router = useRouter()
    const addUser = async () => {
       
        if(!name || !email || !telephone || !password){
            return 
        }
        const user:UserRegister = {
            name:name,
            userEmail:email,
            tel:telephone,
            userPassword:password
        }
        const newUser = await userRegister(user)
        console.log(newUser)
        router.push("/")
        router.refresh()
    }
    
    return (
        <main className="bg-slate-100  p-auto w-1/2 m-auto">
            <form className="flex flex-col items-center w-full justify-center p-2">
            <div className="text-xl text-blue-700">Register User</div>
            <div className="flex item-center w-1/2 my-2">
                                <label className="w-auto block text-gray-700 pr-4" htmlFor="UserName">UserName</label>
                                <input type="text" required id="UserName" name="UserName" placeholder="UserName"
                                className="bg-white border-2 border-gray-200 rounded w-full p-2
                                text-gray-700 focus:outline-mome focus:border-blue-400"
                                onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className="flex item-center w-1/2 my-2">
                                <label className="w-auto block text-gray-700 pr-4" htmlFor="UserEmail">UserEmail</label>
                                <input type="text" required id="UserEmail" name="UserEmail" placeholder="UserEmail"
                                className="bg-white border-2 border-gray-200 rounded w-full p-2
                                text-gray-700 focus:outline-mome focus:border-blue-400"
                                onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="flex item-center w-1/2 my-2">
                                <label className="w-auto block text-gray-700 pr-4" htmlFor="telephone">tel</label>
                                <input type="text" required id="telephone" name="telephone" placeholder="telephone"
                                className="bg-white border-2 border-gray-200 rounded w-full p-2
                                text-gray-700 focus:outline-mome focus:border-blue-400"
                                onChange={(e)=>{setTelephone(e.target.value)}}/>
            </div>
            <div className="flex item-center w-1/2 my-2">
                                <label className="w-auto block text-gray-700 pr-4" htmlFor="password">password</label>
                                <input type="text" required id="password" name="password" placeholder="password"
                                className="bg-white border-2 border-gray-200 rounded w-full p-2
                                text-gray-700 focus:outline-mome focus:border-blue-400"
                                onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded" onClick={addUser}>Add new User</button>
            </form>
        </main>
    );
}