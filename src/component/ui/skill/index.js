import React from 'react'
import "./style.css"
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
const Skill=(props)=> {
    return(
        <div className="flexRow">
        <div className="skillcontainer mtb">
            
<CircularProgressbar
        value={props.percentage}
        text={`${props.percentage}%`}
        styles={buildStyles({
          textColor: props.textColor,
          pathColor: props.pathColor,
        })}
      />
     </div>
      <div className="skilldespcontainer " >
          <p className="mtb">{props.skill}</p>
          <p className="mtb" style={{fontSize:"14px",
                      color:"grey"}}>{props.desc}</p>
      </div>
      </div>
    )
}

export default Skill