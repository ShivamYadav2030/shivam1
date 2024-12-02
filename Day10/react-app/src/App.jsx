import './App.css'

const App= ({Name,email,Roll}) =>{
  return (
    <>
    <div class="disp">
      <h1>Student Details</h1>
      <h2>Name:{Name}</h2>
      <h2>Email Id:{email}</h2>
      <h2>Roll Number:{Roll}</h2>
    </div>   
    </>
  )
}

export default App
