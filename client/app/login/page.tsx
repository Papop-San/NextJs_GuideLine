"use client"

import { Login } from "./action"
import { useFormState } from "react-dom"

export default function Page() {
    const initState = {
        message: ""
    }

    const [state ,formAction] = useFormState(Login , initState)
    return(
        <form action={formAction}>
            <div>
               Email: <input type="email" name="email" className="border border-indigo-600"/>
            </div>
            <div>
               Pasword: <input type="password" name="password" className="border border-indigo-600"/>
            </div>
            <div>
                Message: {state.message}
            </div>
            <div>
                <button className="bg-blue-400 p-1">Login</button>
            </div>
            
           
            
        </form>
    )
}