import { UserRegister } from "@/interfaces";
import userRegister from "@/src/libs/userRegister";
import { redirect } from "next/navigation";
export default async function Register(){
    
    const addUser = async (addUserFrom:FormData) => {
        "use server"
        var user:UserRegister = {
            name:"a",
            userEmail:"finally@gmail.com",
            tel:"085-358-4113",
            userPassword:"awdawadwawd"
        }
        const newUser = await userRegister(user)
        console.log(newUser)
        redirect("/")
    }
    
    return (
        <main>
            <form action={addUser}>
                <button type="submit">Add new User</button>
            </form>
        </main>
    );
}