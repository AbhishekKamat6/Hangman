import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import { useEffect,useState } from "react";

function Home(){

    const [word,setWord] = useState("");

    useEffect(() => { 
       fetchWord()
    },[])

    async function fetchWord(){
         const response = await fetch("http://localhost:3000/words"); 
         const data = await response.json();
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