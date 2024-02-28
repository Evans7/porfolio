import React from 'react'
import "./style.css";
import Card from '../ui/card';
import Smallheadline from '../ui/smallheadline';
import Mediumheadline from '../ui/mediumheadline';
import Razorpay from '../../assets/workexp/razorpay.jpeg'
import Yoska from '../../assets/workexp/yoska.png'
import Wonderslate from '../../assets/workexp/wonderslate.png'
import Verifone from '../../assets/workexp/verifone-logo.png'

const Workexp=(props)=> {
  return( 
<div data-aos="fade-up-right" className="container" style={{marginTop: "10px",marginBottom:"10px"}}>
<div style={{marginTop: "10px",marginBottom:"10px",padding:"20px"}}>
       <Smallheadline text="Work Experience" />
</div>
<div >
   <Card className="flexRow">
   <div className="mlr justify-sb">
       <div className="justify-sb" style={{marginTop: "10px",marginBottom:"10px",padding:"20px"}}>
           <div className="mauto flexCol">
               <div className="flexRow">
               <img className="workImg" src={Razorpay} alt="" />
               <a href="https://razorpay.com/"className="font-20" target="_blank" style={{padding:"10px"}}>Razorpay</a>
               </div>
    <div className="mtb">
   <p className=" font-14" style={{color:"grey"}}>Providing solutions for custom requirements with the use of Razorpay's product suite.</p>
   <p className="font-14" style={{color:"grey"}}>Building custom code/applications based on the different requirements.</p>
   <p className=" font-14" style={{color:"grey"}}>In depth knowledge of Razorpay Mobile SDK's (Android, iOS, React-native, Flutter)</p>
   </div>
   </div>
   </div>
   </div>
   
   <div className="mlr justify-sb">
       <div className="justify-sb" style={{marginTop: "10px",marginBottom:"10px",padding:"20px"}}>
           <div className="mauto flexCol">
               <div className="flexRow">
               <img className="workImg" src={Wonderslate} alt="" />
   <a href="https://www.wonderslate.com/books/index"className="font-20" target="_blank" style={{padding:"10px"}}>Wonderslate</a>
               </div>
    <div className="mtb">
   <p className=" font-14" style={{color:"grey"}}>Providing API's and functionality to improve existing Wonderslate projects</p>
   <p className="font-14" style={{color:"grey"}}>Collaborating with other functional teams in a fast-paced startup.</p>
   </div>
   </div>
   </div>
   </div>
  

   <div className="mlr justify-sb">
       <div className="justify-sb" style={{marginTop: "10px",marginBottom:"10px",padding:"20px"}}>
           <div className="mauto flexCol">
               <div className="flexRow">
               <img className="workImg" src={Verifone} alt="" />
   <a href="https://www.verifone.com/en/global"className="font-20" target="_blank" style={{padding:"10px"}}>Verifone</a>
               </div>
    <div className="mtb">
   <p className=" font-14" style={{color:"grey"}}>Built enhancements and contributed towards performance improvement to the spring project.</p>
   <p className="font-14" style={{color:"grey"}}>Bug identification and resolution based on priority either from production or backlog using CI/CD tools.</p>
   </div>
   </div>
   </div>
   </div>


        </Card>
    </div>

</div>
  )
}

export default Workexp