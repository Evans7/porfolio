import React from 'react'
import { colors } from '../../style'
const Smallheadline=(props)=> {

  return(
    <div className="primaryColor ls-1 uppercase font-14 bold-30 text-center mtb">
    <p>{props.text}</p>
</div>
  )
}

export default Smallheadline