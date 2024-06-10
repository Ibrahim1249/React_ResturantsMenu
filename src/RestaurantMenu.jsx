

import React, { useEffect, useState } from 'react'
import Card from './Card';
import TextField from '@mui/material/TextField';
import { restaurants } from "./restaurant.js"

function RestaurantMenu() {
  const [restaurant,setRestaurant] = useState(restaurants);
  const [searchInput ,setSearchInput] = useState("")


  
  useEffect(()=>{
    if(searchInput === ''){
      setRestaurant(restaurants);
    }else{
      let filterData = restaurant.filter((item,idx)=>{
        let searchTerm = item.name.toLowerCase();
        return searchTerm.includes(searchInput.toLowerCase());
      })
      setRestaurant(filterData)
    }
   

  },[searchInput])




  return (
    <>
      <div className="form"> 
        <TextField id="outlined-basic" label="Search" variant="outlined" className='inp' value={searchInput} 
         onChange={(e)=>{setSearchInput(e.currentTarget.value)} }/>
      </div>
      <div className="restaurant-container">
         {restaurant.map((item,idx)=>{
             return <Card name={item.name} cuisine={item.cuisine} location={item.location} rating={item.rating} image={item.image}/>
         })}
      </div>
     
    </>
  )
}

export default RestaurantMenu