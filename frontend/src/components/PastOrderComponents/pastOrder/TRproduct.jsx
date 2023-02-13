import React,{useState} from 'react'
import './TRproduct.css'
import PastSummary from '../pastSummary/pastSummary'
import { AiOutlineEye } from 'react-icons/ai';

const TRproduct = ({product,key}) => {

    const closeOrder = () => setshowOrder(false);
    const [showOrder, setshowOrder] = useState(false)
    const [CanceDirect, setCanceDirect] = useState('cancel order')
  return (
              <tr className='pastOrdercontainerBody'>
              <td> {(product._id)}</ td>
              < td> 09/06/9043</ td>
              < td> banglore</ td>
              < td> banglore</ td>
              < td> td nagar</ td>
              < td> total Item</ td>
              < td> 530 </ td>
              < td> Ready to pickup</ td>
              < td> <span id='cancelXbtn' onClick={()=>setCanceDirect('Canceled')}>{CanceDirect}</span>  </ td>
              < td>
                <AiOutlineEye onClick={() => setshowOrder(true)} />
              </ td>
        {showOrder && <PastSummary closeOrder={closeOrder} />}
            </tr>
  )
}

export default TRproduct