import React, { useState } from 'react'
import './pastOrder.css'
import PastSummary from '../pastSummary/pastSummary'
import { AiOutlineEye } from 'react-icons/ai';

// import { Link } from 'react-router-dom'
const PastOrder = () => {
const [showOrder, setshowOrder] = useState(false)

const closeOrder=()=>setshowOrder(false);

  return (
    <>
      <table className='pastOrdercontainer'>
        <thead className='pastOrdercontainerHead'>
          <tr>
            <th> order id</  th>
            <  th> order Date&Time</  th>
            < th> storeLocation</ th>
            < th> city</ th>
            < th> store phone</ th>
            < th> total Item</ th>
            < th> price</ th>
            < th> status</ th>
            < th></ th>
            < th> view</ th>
          </tr>
        </thead>
        <tbody>
        <tr className='pastOrdercontainerBody'>
            <td> 123345</ td>
            < td> 09/06/9043</ td>
            < td> storeLocation</ td>
            < td> city</ td>
            < td> store phone</ td>
            < td> total Item</ td>
            < td> price</ td>
            < td> status</ td>
            < td> cancel order  </ td>
            < td>

            <AiOutlineEye onClick={()=>setshowOrder(true)}/>
           
            
             </ td>
          </tr>

        </tbody>

      </table>
      {showOrder &&  <PastSummary closeOrder={closeOrder} />}
    </>
  )
}

export default PastOrder