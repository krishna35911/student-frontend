import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import EditStudent from './components/EditStudent'
import Add from './components/Add'

function App() {

  return (
    <Routes>
      <Route path={"/"} element ={<Home/>}></Route>
      <Route path={"/addstudent"} element ={<Add/>}></Route>
      <Route path={"/editstudent/:id"} element ={<EditStudent/>}></Route>
    </Routes>
  )
}

export default App
