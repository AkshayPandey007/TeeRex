import React from 'react'
import styles from "../Styles/Navbar.module.css"
import { BsCart4 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const cartData = useSelector((store)=>store.cartData)
  return (
    <div>

      <div className={styles.MainNavBox}>

       <div className={styles.logoBox}>
       <p className={styles.logo}>TeeRex Store</p> 
       </div>

       <div className={styles.NavRightBox}>
        <div>
        <Link to={"/"}>  <p className={styles.products}>Products</p> </Link>
          </div>
       <div style={{display:"flex"}}>
      <Link to={"/cart"}> <BsCart4 size={26} style={{padding:"18px 0px 0px 0px"}} className={styles.cartIcon}/> </Link> 
        <p style={{fontSize:"14px" , color:"red" , fontWeight:'700'}}>{cartData.length}</p>
       </div>
       </div>


      </div>



    </div>
  )
}
