import { useContext, useState } from "react";
import { UserContext } from "./UseContextHook";

export default function UseContext4(){

    const user = useContext(UserContext);
    
    return(
        <>
        <h1>context 4 heading</h1>
        <h3>Hello {user}</h3>
        </>
    )
}