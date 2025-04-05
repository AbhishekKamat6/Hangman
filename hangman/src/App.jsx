import { Routes , Route } from "react-router-dom"
import StartGame from "../pages/StartGame"
import PlayGame from "../pages/PlayGame"
import Home from "../pages/Home"
import { WordContext } from "../context/WordContext"
import { useState } from "react"

function App() {

  const [wordList, setWordList] = useState([]);
  const [word,setWord] = useState('')

  return (
    <WordContext.Provider value={{wordList,setWordList,word,setWord}}> {/** We can specify this provider only for the main components that require it. For now, we are using it in App.jsx so that it is available to all components.*/}
      <Routes>
        <Route path = '/start' element = {<StartGame/>} />{/*says that for which link what page should be shown*/}
        {/* C) <Route path = '/play/:text' element = {<PlayGame/>}/> */}
        <Route path = '/play' element = {<PlayGame/>}/> 

        <Route path="/" element={<Home/>} />
      </Routes>
      </WordContext.Provider>
  )
}

export default App
