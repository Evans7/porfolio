import React from 'react'
import Smallheadline from '../ui/smallheadline'
import Mediumheadline from '../ui/mediumheadline'
import Card from '../ui/card'
import Skill from '../ui/skill'
import { colors } from '../../style'
import webdev from '../../assets/webdev.png'
import './style.css'
import Socialconnect from '../socialconnect'
const expertise=(props)=> {
  const skills=[{
      skill:"Web Development",
      desc:"",
      percentage:"90",
      textColor:"#F98404",
      pathColor:"#185ADB"
    }]
  return(
    <div className="container" style={{padding:"10px",marginTop:"80px"}}>
    <div> <Smallheadline text="Expertise"/></div>
    <div className="mtb"> <Mediumheadline text="Special skills" /></div>
    <div className="flexRow">
    <div data-aos="fade-right"><img className="imageContainer" src={webdev}/></div>
    <Card data-aos="flip-up" style={{padding:"30px", width:"320px",margin:"80px auto"}}>
    
        <div style={{width:"600px",height:"100px"}}>
    {skills.map((skill,index)=>(

<Skill
    key={index}
    skill={skill.skill}
     desc={skill.desc}
     percentage={skill.percentage}
      textColor={skill.textColor}
      pathColor={skill.pathColor}
      />
      
))}

</div>
<p className="wrap mtb font-14" style={{color:"grey"}}>Various projects and relevant work experience</p>

    </Card>
    
    </div>
    <Socialconnect/>
    </div>
  )
}

export default expertise