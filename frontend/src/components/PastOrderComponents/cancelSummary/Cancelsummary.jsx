import React from 'react'

const Cancelsummary = ({cancelOrder}) => {
  return (
    <div>
        <h3>Alert</h3>
        <p>Are you sure to cancel the order number 10909</p>
        <button onClick={cancelOrder}>Proceed</button>
    </div>
  )
}

export default Cancelsummary