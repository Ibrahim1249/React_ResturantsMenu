

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';
import TextField from '@mui/material/TextField';
import { restaurants } from "./restaurant.js"

function RestaurantMenu() {
  const [restaurant,setRestaurant] = useState(restaurants);
  const [searchInput ,setSearchInput] = useState("")

  
  // useEffect(()=>{
  //   setRestaurant(restaurant.filter((item,idx)=>{
  //     let searchTerm = item.name.toLowerCase();
  //     return searchTerm.includes(searchInput.toLowerCase());
  //   }))
  // },[searchInput])

  function filterData(){
        setRestaurant(restaurant.filter((item,idx)=>{
      let searchTerm = item.name.toLowerCase();
      return searchTerm.includes(searchInput.toLowerCase());
    }))
  }


  return (
    <>
      <div className="form"> 
        <TextField id="outlined-basic" label="Search" variant="outlined" className='inp' value={searchInput} 
         onChange={(e)=>{setSearchInput(e.currentTarget.value),filterData()} }/>
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