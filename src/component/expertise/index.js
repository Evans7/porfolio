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
      textColor:"#171010",
      pathColor:"#3A4162"
    },
    {
    skill:"App Development(Android/Ios)",
    desc:"",
    percentage:"70",
    textColor:"#171010",
    pathColor:"#336E83"
  }]
  return(
    <div className="container" style={{padding:"10px",marginTop:"80px"}}>
    <div> <Smallheadline text="Expertise"/></div>
    <div className="mtb"> <Mediumheadline text="Special skills" /></div>
    <div className="flexRow">
    <div data-aos="fade-right"><img className="imageContainer" src={webdev}/></div>
    <div>
    <Card data-aos="flip-up" style={{padding:"10px", width:"580px",margin:"60px",marginLeft:"300px"}}>
    
        <div style={{width:"600px",height:"240px"}}>
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

    </Card>
    </div>
    
    </div>
    </div>
  )
}

export default expertise