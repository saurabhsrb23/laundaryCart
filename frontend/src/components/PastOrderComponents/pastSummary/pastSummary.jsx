import './pastSummary.css'
import Cancelsummary from '../cancelSummary/Cancelsummary'
import { useState } from 'react'

const PastSummary = ({closeOrder}) => {
    const [cancelAlert, setcancelAlert] = useState(false)

    const cancelOrder =()=>setcancelAlert(false)

    const Cancel =()=>{
        // closeOrder()
        if(closeOrder){
            setcancelAlert(true)
        }
    }
  return (
    <>
    <div className='pastSummaryContainer'>
        <header className='pastSummaryContainerHeader'>
            <p>summary</p>
            <button onClick={closeOrder}>X</button>
        </header>
            <section className='clientDetails'>
                <table>
                    <thead>
                        <tr>

                        <th>strore Location </th>
                        <th>strore Address: </th>
                        <th>phone </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                        <td>jp nagar</td>
                        <td>mdksfkvnfkj</td>
                        <td>0987658909</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        <main>

            {/* <section className='stausBar'>
                <span>pickup</span>
                <span>washed</span>
                <span>ironed</span>
                <span>delivered</span>
            </section> */}
            <section className='orderDetails'>
                <h5>order Details</h5>
                <table>
                    <thead>
                        <tr>
                            <td>Shirts</td>
                            <td>wasing</td>
                            <td>5X20 =</td>
                            <td>100</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td></td>
                            <td></td>
                            <td>sub total</td>
                            <td>90</td>
                            </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>pickup charge</td>
                            <td>90</td>
                            </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total:</td>
                            <td>560</td>
                            </tr>
                    </tfoot>
                </table>
            </section>


        <footer>
            <section className='footerup'>

            <h5>Address</h5>
            <article className='addressContainer'>
                <h3>Home</h3>
                <p>#222 ,10th road</p>
                <p>Bangalore</p>
            </article>
            </section>

        
        </footer>



        </main>
            <section className='footerdown'>
                <button onClick={Cancel} >Cancel Order</button>
            </section>
    </div>
            {cancelAlert&&<Cancelsummary cancelOrder={cancelOrder}/>}
    </>
  )
}

export default PastSummary