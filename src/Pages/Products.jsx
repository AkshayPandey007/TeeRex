import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartSuccess, getProduct, searchItem } from '../Redux/action'
import styles from "../Styles/Product.module.css"
import { BsSearch } from "react-icons/bs";


const Products = () => {
    const dispatch = useDispatch()
    const productData = useSelector((store)=>store.productData)
   const[searchh,setSearch] = useState("")
   

    useEffect(()=>{
        if(productData.length==0)
        {
            dispatch(getProduct())
        }
    },[])
    

    const handleData=(el)=>{
    dispatch(getCartSuccess(el))
    }


    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }


    const handleSearchBtn=(val)=>{
    // console.log(val)
    val=val.toLowerCase()
    dispatch(searchItem(val))
    setSearch("")
    }
  return (
    <div>

        <div className={styles.searchBox}>
        <input type="text" value={searchh} placeholder='Search For Products...' className={styles.search} onChange={handleSearch}/>
        <BsSearch size={20} style={{backgroundColor:"lightgray",padding:"5px"}} onClick={()=>handleSearchBtn(searchh)} className={styles.searchBtn}/>
        </div>


        <div className={styles.mapMainBox}>
            {productData.map((data)=>(
                <div className={styles.mapBox} key={data.id}>
                 <h3>{data.name}</h3>
                 <div className={styles.MapimageBox}>
                 <img src={data.imageURL} alt={data.name} style={{width:"100%" , height:"100%"}}/>
                 </div>

                 <div className={styles.mapPriceandBtn}>
                <p style={{fontWeight:"500"}}>Rs.{data.price}</p>
                <button className={styles.cartBtn} onClick={()=>handleData(data)}>Add to cart</button>
                 </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products