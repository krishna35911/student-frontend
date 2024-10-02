import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Addstudent from './components/Addstudent'
import EditStudent from './components/EditStudent'

function App() {

  return (
    <Routes>
      <Route path={"/"} element ={<Home/>}></Route>
      <Route path={"/addstudent"} element ={<Addstudent/>}></Route>
      <Route path={"/editstudent/:id"} element ={<EditStudent/>}></Route>
    </Routes>
  )
}

export default App
