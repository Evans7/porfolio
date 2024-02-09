import React from 'react'
import Mediumheadline from '../ui/mediumheadline'
import Smallheadline from '../ui/smallheadline'

import Card from '../ui/card'
import Skill from '../ui/skill';
const Specializing=(props)=> {
  const skills=[
    {
      skill:"Spring boot and J2EE",
      desc:"2+ years of work experience",
      percentage:"90",
      textColor:"#171010",
      pathColor:"#4F0E0E"
    },
    {
      skill:"HTML/CSS",
      desc:"2+ years of work experience",
      percentage:"95",
      textColor:"#FFC947",
      pathColor:"#185ADB"
    },
    {
      skill:"Native JS and jQuery",
      desc:"2+ years of work experience",
      percentage:"95",
      textColor:"#7952B3",
      pathColor:"#FFC107"
    },
    {
      skill:"React/Angular",
      desc:"Worked on few personal projects",
      percentage:"75",
      textColor:"#480032",
      pathColor:"#005792"
    },
    {
      skill:"iOS App Development",
      desc:"Few applications created",
      percentage:"70",
      textColor:"#FFC947",
      pathColor:"#185ADB"
    },
    {
      skill:"MySQL/MSSQL/PSQL/MongoDB",
      desc:"2+ years of work experience",
      percentage:"90",
      textColor:"#D83A56",
      pathColor:"#DA0037"
    },
    {
      skill:"Python(Flask/Django/ML)",
      desc:"Worked on few personal projects",
      percentage:"80",
      textColor:"#9D0191",
      pathColor:"#120078"
    },
    {
      skill:"NodeJs",
      desc:"Worked on few personal projects",
      percentage:"80",
      textColor:"#9D0191",
      pathColor:"#120078"
    }
  ];
  return(
<div className="container">
    <Card style={{padding:"40px"}}>
    <Smallheadline text="Things i do"/>
    <Mediumheadline text="Expertise in"/>

    <div data-aos="fade-up" className="flexRow wrap justify-sb" style={{padding:"10px"}}>
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