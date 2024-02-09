import React from 'react'
import { colors } from '../../style'
const DownloadButton=(props)=> {

  return(
  <a href='/Resume/RESUME-2024.pdf'
  download style={{boxSizing:'border-box',
  padding:'10px 20px', 
  background:props.inverse?"transparent":colors.primaryColor,
  color:'#fff',display:'inline-block',
  borderRadius:'20px',
  boxShadow:props.inverse?"none":'#e8a517 0 0 10px',
   border:"1px solid",
   borderColor:props.inverse?colors.primaryColor:"transparent",
   letterSpacing:"1px",
   fontWeight:400,
   
}}>{props.label}</a>

  )
}
export default DownloadButton