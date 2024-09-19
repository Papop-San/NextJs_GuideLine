"use client"

import { Login } from "./action"

export default function Page() {
    return(
        <form>
            <div>
               Email: <input type="email" name="email" className="border border-indigo-600"/>
            </div>
            <div>
               Pasword: <input type="password" name="password" className="border border-indigo-600"/>
            </div>
            <div>
                <button className="bg-blue-400 p-1">Login</button>
            </div>
           
            
        </form>
    )
}