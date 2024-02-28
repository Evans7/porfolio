import React from 'react'
import "./style.css";
import Socialicons from '../../assets/socialicons';
import Card from '../ui/card';
import Smallheadline from '../ui/smallheadline';
import Mediumheadline from '../ui/mediumheadline';
import Portfolio from '../../assets/projects/portfolio.png'
import AuthAccessAPI from '../../assets/projects/flask.png'

import Github from '../../assets/socialicons/github.png'
const Projects=(props)=> {
  return( 
<div data-aos="zoom-in-up" className="container" style={{marginTop: "100px",marginBottom:"100px"}}>
    <Card className="flexRow " >
   <div style={{marginTop: "10px",marginBottom:"10px",padding:"20px"}}>
       <Smallheadline text="Porfolio" />
       <Mediumheadline text="Latest Projects" />
   </div>
   <div className="">
       <div className="flexRow justify-sb" style={{marginTop: "10px",marginBottom:"10px",padding:"20px"}}>
           <div className="mauto">
   <p className="mtb font-20">Auth/Authorization RESTful API's</p>
   <p className="wrap mtb font-14" style={{color:"grey"}}>Application made using flask which consists of JSON web token authentication and role based API access along with CRUD operations.</p>
   <a href="https://github.com/Evans7/AuthAccessAPIS">
        <img src={Github} style={{width:"30px", height:"30px",borderRadius:"50%"}} alt={""}></img>
    </a>
   </div>
   <div className="mauto" style={{padding:"10px"}}>
       <img className="projectImg" src={AuthAccessAPI} ></img>
   </div>
   </div>
   
   </div>
    </Card>
</div>
  )
}

export default Projects