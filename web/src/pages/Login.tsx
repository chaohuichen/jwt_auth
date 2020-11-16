import React, {useState} from 'react';
import {useLoginMutation} from "../generated/graphql";
import {setAccessToken} from "../accessToken";

// @ts-ignore
export const Login =({history})=>{
    const [email,setEmail]=useState(``)
    const [password,setPassword]=useState(``)
    const [login]=useLoginMutation()
    return <form onSubmit={async e=>{
        e.preventDefault()
        console.log("form submitted")
        const response = await login({
            variables:{
                email,
                password
            }
        })
        if(response && response.data){
            setAccessToken(response.data.login.accessToken)
        }
        history.push("/")
    }}>
        <div>
            <input value ={email} placeholder="email"
                   onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div>
            <input  type='password' value ={password} placeholder="password"
                    onChange={e=>setPassword(e.target.value)}/>
        </div>
        <button type="submit">Login</button>
    </form>
}
