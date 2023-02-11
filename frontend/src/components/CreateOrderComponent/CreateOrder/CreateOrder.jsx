import React,{useState} from 'react'
import './CreateOrder.css'

const CreateOrder = () => {

  return (
    <>
    <section className='createheaderContainer'>
    <div className='createM'>

        <div className='createleftItem'>
        Create Order
        </div>
        <div className='createrightItem'>
                <section>
                <input  className='createSearch' type="text" />
                </section>
        </div>
    </div>
    </section>
    </>
  )
}

export default CreateOrder