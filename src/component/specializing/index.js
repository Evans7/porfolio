import React from 'react'
import Mediumheadline from '../ui/mediumheadline'
import Smallheadline from '../ui/smallheadline'

import Card from '../ui/card'
import Skill from '../ui/skill';
const Specializing=(props)=> {
  const skills=[
    {
      skill:"HTML/CSS",
      desc:"2+ years of work experience",
      percentage:"80",
      textColor:"#FFC947",
      pathColor:"#185ADB"
    },
    {
      skill:"JavaScript",
      desc:"2+ years of work experience",
      percentage:"80",
      textColor:"#7952B3",
      pathColor:"#FFC107"
    },
    {
      skill:"React",
      desc:"Worked on few personal projects",
      percentage:"60",
      textColor:"#480032",
      pathColor:"#005792"
    },
    {
      skill:"jQuery",
      desc:" 1+ years of work experience",
      percentage:"70",
      textColor:"#FFC947",
      pathColor:"#185ADB"
    },
    {
      skill:"MVC(Java/Groovy)",
      desc:"2+ years of work experience",
      percentage:"70",
      textColor:"#171010",
      pathColor:"#4F0E0E"
    },
    {
      skill:"MySQL",
      desc:"2+ years of work experience",
      percentage:"80",
      textColor:"#D83A56",
      pathColor:"#DA0037"
    },
    {
      skill:"Python(Flask/Django)",
      desc:"Worked on few personal projects",
      percentage:"40",
      textColor:"#9D0191",
      pathColor:"#120078"
    }
  ];
  return(
<div className="container">
    <Card style={{padding:"60px"}}>
    <Smallheadline text="Things i do"/>
    <Mediumheadline text="Expertise in"/>

    <div data-aos="fade-up" className="flexRow wrap justify-sb" style={{padding:"20px"}}>
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

  )
}

export default Specializing