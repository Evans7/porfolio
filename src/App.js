import React, { useEffect } from 'react'
import Hero from './component/hero'
import Specializing from './component/specializing'
import Expertise from './component/expertise'
import Projects from './component/projects'
import Workexp from './component/workexp'
import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles

const App=(props)=> {
  useEffect(()=> {
    Aos.init({duration:1500,})
  },[]);
  return(
    <div>
<Hero/>
<Specializing />
<Expertise />
<Workexp />
<Projects />
</div>

  )
}

export default App
