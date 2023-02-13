import React from 'react'

import MainHeader from '../MainHeader/MainHeader'
import OrderFooter from '../OrderFooter/OrderFooter'
import SD from './sideNav/sd'

const PastOrderContainer = (props) => {
  return (
    <>
       <MainHeader user={props.user} />
          <SD  />
      <OrderFooter />
    </>
  )
}

export default PastOrderContainer