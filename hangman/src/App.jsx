import { Routes , Route } from "react-router-dom"
import StartGame from "../pages/StartGame"
import PlayGame from "../pages/PlayGame"
import Home from "../pages/Home"


function App() {

  return (
      <Routes>
        <Route path = '/start' element = {<StartGame/>} />{/*says that for which link what page should be shown*/}
        {/* C) <Route path = '/play/:text' element = {<PlayGame/>}/> */}
        <Route path = '/play' element = {<PlayGame/>}/> 

        <Route path="/" element={<Home/>} />
      </Routes>
  )
}

export default App
