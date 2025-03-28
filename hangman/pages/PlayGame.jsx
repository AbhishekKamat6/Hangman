import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import MaskedText from "../components/maskedtext/MaskedText";
import LetterButtons from "../components/letterbuttons/LetterButtons";

function PlayGame() {

      const location = useLocation(); // The useLocation hook is used to access the location object of the current route. The location object contains information about the current URL and the state object.
      const {guessWord} = location.state; // The guessWord value is extracted from the state object of the location object.

// B)       const [searchparams] = useSearchParams(); 
// B)       const guessWord = searchparams.get("text"); 
         
// C)    const {text}  =  useParams();
      
      const [guessedLetters, setGuessedLetters] = useState([]);

      function handleLetterClick(letter){
        setGuessedLetters([...guessedLetters, letter]);
      }

        return(
    <>
     {/* A)   <p>This is the word need to guess by Player2 : {guessWord} </p> */}
     {/* B) <p>This is the word need to guess by Player2 : {guessWord}</p> */}
     {/* C) <p>This is the word need to guess by Player2 : {text}</p> */}
     
      <h1>Play Game</h1>
      <MaskedText text={guessWord} guessedLetters={guessedLetters} />

      <div>
        <LetterButtons text={guessWord} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
      </div>
     

    </>
  )
}


export default PlayGame;
