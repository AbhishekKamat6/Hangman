import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import { useContext, useEffect } from "react";
import { WordContext } from "../context/WordContext"; 

function Home(){


    const {setWordList,word,setWord} = useContext(WordContext); // It expects the object which we provided everywhere in the app using the provider.

    useEffect(() => { 
       fetchWord()
    },[])

    async function fetchWord(){
         const response = await fetch("http://localhost:3000/words"); 
         const data = await response.json();

         setWordList([...data])

         const randomIndex = Math.floor(Math.random() * data.length);
         setWord(data[randomIndex].wordValue);
    }


    return (
        <>
        <Link to="/play" state={{guessWord:word}}>
          <Button text = "single player game" />
        </Link>
        <Link to = "/start">
        <div>
           <Button text = "multiplayer player game" styleType = "secondary"/>
        </div>
        </Link>
        </>
    )

}

export default Home;