import React, {  useState ,useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart';
import { useCart,useDipsatchCart } from './ContextReducer';

function Card({foodData,options}) {
  const [check,setcheck]=useState(false);
  const priceref=useRef();
  let  priceOption=Object.keys(options)//array return
  let dispatch=useDipsatchCart();
  let data=useCart();
  const [qty,setqty]=useState(1);
  const [size,setsize]=useState("");
  useEffect(()=>{
     setsize(priceref.current.value)
    
  },[])

  const handleCart = async () =>{
     console.log("dmk")
     
     await dispatch({type:"ADD",id:foodData._id,name:foodData.name,price:finalPrice,qty:qty,size:size,img:foodData.img});  
      
    // console.log(data)
     setcheck(!check);
    }
    if(check){
      console.log(data)
      setcheck(!check)
    }
  let finalPrice=qty*parseInt(options[size]);
  
 // console.log(data)w
  return (
    <div>
        <div className="card" style={{"width": "18rem"}}>
  <img src={foodData.img} className="card-img-top img-fluid" alt="..." style={{height:"180px",objectFit:"fill"}}/>
  <div className="card-body">
    <h5 className="card-title">{foodData.name}</h5>
    <p className="card-text">{foodData.description}</p>
    <Link to="/" className="btn btn-primary">Go somewhere</Link>
    <div className='container w-100'>
      <select className='m-2 h-100 bg-success rounded'  onChange={(e)=>setqty(e.target.value)}>
        {Array.from(Array(6),(e,i)=>{
          return(
            <option key={i+1} value={i+1}>{i+1}</option>
          )
        })}
      </select>
      <select className='m-2 h-100 bg-success rounded' ref={priceref} onChange={(e)=>setsize(e.target.value)}>
     { priceOption.map((data)=>{
        return(
          <option key={data} value={data}>{data}</option> 
        )
      })
       }
      </select>
      <div className='d-inline h-100 fs-2'>
       ${finalPrice}/-
    </div>

    </div>
    <hr />
    <button className='btn btn-success justify-center' onClick={handleCart}>ADD TO CART</button>
  </div>
</div>
    </div>
  )
}

export default Card