import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Me() {
    const navigate=useNavigate();
    useEffect(()=>{
        const token=localStorage.getItem('token')
        if (token){
        navigate('/Dashboard')
        }
        else{
            navigate('/Signin')
        }
    })
    return (
        <></>
    )
}