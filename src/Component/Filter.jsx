import React, { useState } from 'react'
import styles from "../Styles/Filter.module.css"
import { filterItem } from '../Redux/action'
import { useDispatch } from 'react-redux'

const Filter = () => {
    const [category , setCategory] = useState("")
    const dispatch = useDispatch()

    const handleChange=(e)=>{
      // setCategory(e.target.value)
      dispatch(filterItem(e.target.value))
    }

  return (
    <div style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" , padding:"15px 0px"}}>

      <div className={styles.ColorBox}>
      <h3>Colour</h3>

      <div>
      <input type="checkbox" 
      value="Red"
      onChange={handleChange}
      />
      <label >Red</label>
      </div>

      <div>
      <input type="checkbox" 
      value="Blue"
      onChange={handleChange}
      />
      <label >Blue</label>
      </div>

      <div>
      <input type="checkbox" 
      value="Green"
      onChange={handleChange}
      />
      <label >Green</label>
      </div>
      
      </div>


      <div className={styles.ColorBox}>
      <h3>Gender</h3>

      <div>
      <input type="checkbox" 
      value="Men"
      onChange={handleChange}
      />
      <label >Men</label>
      </div>

      <div>
      <input type="checkbox" 
      value="Women"
      onChange={handleChange}
      />
      <label >Women</label>
      </div>
      
      </div>


      <div className={styles.ColorBox}>
      <h3>Price</h3>

      <div>
      <input type="checkbox" 
      value="low"
      onChange={handleChange}
      />
      <label >0-Rs250</label>
      </div>

      <div>
      <input type="checkbox" 
      value="medium"
      onChange={handleChange}
      />
      <label >Rs251-Rs450</label>
      </div>

      <div>
      <input type="checkbox" 
      value="high"
      onChange={handleChange}
      />
      <label >Rs450</label>
      </div>
      
      </div>


      
      <div className={styles.ColorBox}>
      <h3>Type</h3>

      <div>
      <input type="checkbox" 
      value="Polo"
      onChange={handleChange}
      />
      <label >Polo</label>
      </div>

      <div>
      <input type="checkbox" 
      value="Hoodie"
      onChange={handleChange}
      />
      <label >Hoodie</label>
      </div>

      <div>
      <input type="checkbox" 
      value="Basic"
      onChange={handleChange}
      />
      <label >Basic</label>
      </div>
      
      </div>


    </div>
  )
}

export default Filter