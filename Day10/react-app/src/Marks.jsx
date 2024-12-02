import "./Marks.css";
const Marks = ({name, roll,m1,m2,m3}) => {
  return (
    <div class="disp">
      <h1>Marksheet</h1>
      <h2>Name:{name}</h2>
      <h2>Roll No:{roll}</h2>
      <h2>Semester1:{m1}</h2>
      <h2>Semester2:{m2}</h2>
      <h2>Semester3:{m3}</h2>
    </div>
  )
}

export default Marks
