import React from 'react'
import "./style.css";
import github from '../../assets/socialicons/github.png';
import linkedin from '../../assets/socialicons/linkedin.png';

const Socialconnect=(props)=> {
  return( 
<div className="socialconnect">
    <span className="textColor weight-14">Follow me:</span>
    <a className="sociallink" href="https://www.linkedin.com/in/anoop-a-548b17199/"  target="_blank">
        <img src={linkedin} alt={""}></img>
    </a>
    <a className="sociallink" href="https://github.com/Evans7"  target="_blank">
        <img src={github} alt={""}></img>
    </a>
</div>
  )
}

export default Socialconnect