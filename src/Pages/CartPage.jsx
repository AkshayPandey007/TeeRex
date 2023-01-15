import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from './Navbar'
import styles from "../Styles/Cart.module.css"
import { removeItem } from '../Redux/action'

const CartPage = () => {
    const dispatch = useDispatch()
    const cartData = useSelector((store)=>store.cartData)
    console.log(cartData)

    let price = cartData.reduce((sum,el)=>(
      sum+el.price
    ),0)


    const handleDel=(id)=>{
        dispatch(removeItem(id))
    }
  return (
    <div>
        <Navbar/>
       <p>Shopping Cart</p>

       <div className={styles.cartBox}>
       {cartData.map((el)=>(
        <div className={styles.cartMapEachBox} key={el.id}>


            <div className={styles.cartImageBox}>
                <img src={el.imageURL} alt="" style={{height:"100%" , width:"100%"}}/>
            </div>

            <div>
                <p style={{fontWeight:"700"}} className={styles.name}>{el.name}</p>
                <p style={{fontWeight:"700"}} className={styles.name}>Rs.{el.price}</p>
            </div>

            <div className={styles.CartQtyAndDelBox}>
                <select className={styles.cartQty} disabled="true">
                    <option value="1">Qty : 1</option>
                </select>

                <button className={styles.cartBtn} onClick={()=>handleDel(el.id)}>DELETE</button>
            </div>
            
        </div>
       ))}

       </div>


       
      <div className={styles.totalAmountBox}>
      <p style={{fontWeight:"700"}}>Total Amount :</p>
      <p style={{color:"red" , fontWeight:"500"}}>Rs.{price}</p>
      </div>
    </div>
  )
}

export default CartPage