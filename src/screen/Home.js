import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carausel from '../components/Carausel'
import Card from '../components/Card'

function Home() {

  const [foodItem,setFoodItem]=useState([]);
  const [foodCategory,setFoodCategory]=useState([]);
  const [search,setSearch]=useState("");
  const LoadData=async()=>{
    const response=await fetch("http://localhost:8000/api/foodData",{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })
    const res=await response.json();
    // console.log(res);
    setFoodItem(res[0]);
    setFoodCategory(res[1]);


  }
  const CarauselHandle=(val)=>{
   setSearch(val);
   console.log(val)
  }
  useEffect(()=>{
  LoadData();
  },[])
  return (
    <div>
    <div> <Navbar /></div>
    <div><Carausel CarauselHandle={CarauselHandle}/></div>
    <div className='container mt-3'>
      {foodCategory!=[]?foodCategory.map((data)=>{
        return(
          <div className="row mb-3">
          <div className=" fs-3 m-3" key={data._id}>{data.CategoryName}</div>
          <hr />
         
          {foodItem!=[]?foodItem.filter((item)=>{
           return ((item.CategoryName===data.CategoryName) && item.name.toLowerCase().includes(search.toLowerCase()))
          }).map((filterItem)=>{
            return(
             <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <Card key={filterItem._id} foodData={filterItem} options={filterItem.options[0]}/>
            </div>
            ) 
          }):""}
         
          </div>
        )
                    
      }):""}
    
    </div>
    <div><Footer /></div> 
    </div>
  )
}

export default Home