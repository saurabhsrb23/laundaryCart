import React,{useState} from 'react'
import './pastOrderHeader.css'

const PastOrderHeader = () => {

    const [ordersCount, setOrdersCount] = useState(0)
  return (
    <>
    <section className='pastheaderContainer'>
    
        <div className='leftItem'>
        Orders |{ordersCount}        
        </div>
        <div className='rightItem'>
                <button className='CreateBtn'>Create</button>
                <section>
                {/* <img className='searchlogo'  src={require("./search.png")}alt="search" /> */}
                <input  className='Search' type="text" />
                </section>
        </div>
    </section>
    </>
  )
}

export default PastOrderHeader