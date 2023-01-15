import React from 'react'
import { Navbar } from './Navbar'
import Products from './Products'
import styles from "../Styles/HomePage.module.css"
import Filter from '../Component/Filter'


const HomePage = () => {
  return (
    <div>
        <Navbar/>

        <div className={styles.HomeMainBox}>

         <div className={styles.HomeLeftBox}>
        <Filter/>
         </div>


         <div className={styles.HomeRightBox}>
         <Products/>
         </div>


        </div>
        
    </div>
  )
}

export default HomePage