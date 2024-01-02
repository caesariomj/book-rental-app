import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { Home, Login, Register } from "./pages/index"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        {/* <Route path='/books' element={<Books/>} /> */}
      </Routes>
    </Router>
  )
}

export default App