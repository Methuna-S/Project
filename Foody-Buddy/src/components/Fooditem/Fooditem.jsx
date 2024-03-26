import React, { useState } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../context/Storecontext'
const Fooditem = ({id,name,price,description,image}) => {

 
  const {cartitems,addToCart,removeFromCart}=useState(Storecontext);

  return (
    <div className='food-item'>
        <div className="food-item-img-con">
            <img src={image} alt="" className="food-item-img" />
        </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
            {
              !cartitems[id]? <img className='add' onClick={()=>setItemcount(prev=>prev+1)} src={assets.add_icon_white} alt=""/>
              :<div className='foot-item-count'>
                 <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                 <p>{cartitems[id]}</p>
                 <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-prz">${price}</p>
      </div>
    </div>
  )
}

export default Fooditem