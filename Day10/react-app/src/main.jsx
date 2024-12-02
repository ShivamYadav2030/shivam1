import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Marks from './Marks'
import DisplayMarks from './DisplayMarks'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Displaymarks></Displaymarks>
    <App Name={"Shivam Yadav"} email={"shivam203093@gmail.com"} Roll={"2200320130155"}></App>
    <Marks name={"Shivam"} roll={2200320130155} m1={87} m2={95} m3={85}></Marks>
    <Marks name={"Sazid"} roll={2200320130146} m1={89} m2={85} m3={99}></Marks>
  </StrictMode>,
)
