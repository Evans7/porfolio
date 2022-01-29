import React from 'react'
import me from '../../assets/me.png'
import Button from '../ui/button'
import DownloadButton from '../ui/downloadButton'
const App=(props)=> {

  return(
<div className="container">
    <div className="flexRow jcontent" style={{marginTop:"30px"}}>
    <div data-aos="fade-right" className="align-center" style={{marginTop:"70px"}}>
    <p className="uppercase textColor ls-1 mtb font-20 bold-20"><span className="primaryColor" > Hello!</span> I am Anoop</p>
    <h1 className={"textColor mtb bold-40"}>Software Engineer</h1>
    <div className="jcontent flexRow">
        <div>
        <Button label="Hire Me"/>
        </div>
        <div className="mlr">
        <DownloadButton label="Download Resume" inverse={true}/>
        </div>
    </div>
    </div>
    <div data-aos="fade-right" className='meImg'>
        <img src={me}></img>
    </div>
    </div>
</div>

  )
}

export default App
