import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext=createContext(null)

const [cartitems,setCartitems]=useState({});

const addToCart=(itemId)=>
{
     if(!cartitems[itemId])
     {
        setCartitems((prev)=>({...prev,[itemId]:1}))
     }
     else{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
     }
}

const removeFromCart=(itemId)=>{
    setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}

useEffect(()=>
{
   console.log(cartitems);
},[cartitems])

const contextvalue={
    food_list,
    cartitems,
    setCartitems,
    addToCart,
    removeFromCart
}
const StorecontextProvider=(props)=>{
    
    return
    {
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    }
}
export default StorecontextProvider;