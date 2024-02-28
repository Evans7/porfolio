import React from 'react'
import ojas from '../../assets/ojas-pic.jpg'
import aokay from '../../assets/A-Okay-c.png'
import abhik from '../../assets/abhik-pic.jpg'
import khushi from '../../assets/khushi-pic.jpg'
import me1 from '../../assets/me1.jpg'


import Button from '../ui/button'
import DownloadButton from '../ui/downloadButton'
const App=(props)=> {

  return(
<div className="container">
    <div className="flexRow jcontent" style={{marginTop:"30px"}}>
    <div data-aos="fade-right" className="align-center" style={{marginTop:"70px"}}>
    <p className="uppercase textColor ls-1 mtb font-20 bold-20"><span className="primaryColor" > Hello!</span> We are team</p>
    <h1 className={"textColor mtb bold-40"}>AOKA</h1>
    <div className="jcontent flexRow">
        <div>
        <Button label="Team lead profile "/>
        </div>
        <div className="mlr">
        <DownloadButton label="Download our flyer" inverse={true}/>
        </div>
    </div>
    </div>
    <div data-aos="fade-down flexColumn" className='meImg'>
        <img style={{width:"300px",padding:"20px", marginLeft:"100px"}}src={aokay}></img>
    </div>
    </div>
    <div data-aos="fade-right flexRow" className='flexRow'>
      <div  style={{padding:"20px"}}>
        <img  style={{width:"180px", height: "270px" ,borderStyle: "groove"}} src={me1}></img>
        </div>
        <div style={{padding:"20px"}}>
        <img  style={{width:"180px", height: "270px" ,borderStyle: "groove"}} src={ojas}></img>
        </div>
        <div style={{padding:"20px"}}>
        <img  style={{width:"180px", height: "270px" ,borderStyle: "groove"}} src={khushi}></img>
        </div>
        <div style={{padding:"20px"}}>
        <img  style={{width:"180px", height: "270px" ,borderStyle: "groove"}} src={abhik}></img>
        </div>
    </div>
</div>

  )
}

export default App
