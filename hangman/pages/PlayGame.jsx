import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { useContext, useState } from "react";
import MaskedText from "../components/maskedtext/MaskedText";
import LetterButtons from "../components/letterbuttons/LetterButtons";
import Hangman from "../components/hangman/Hangman";
import { WordContext } from "../context/WordContext";

function PlayGame() {

      const location = useLocation(); // The useLocation hook is used to access the location object of the current route. The location object contains information about the current URL and the state object.
      //const {guessWord} = location.state;// The guessWord value is extracted from the state object of the location object.

     const {wordList,word} =  useContext(WordContext)

// B)       const [searchparams] = useSearchParams(); 
// B)       const guessWord = searchparams.get("text"); 
         
// C)    const {text}  =  useParams();
      
      const [guessedLetters, setGuessedLetters] = useState([]);

      const [step,setStep] = useState(0);

      function handleLetterClick(letter){
        if(word?.toUpperCase().includes(letter)){
         console.log("Correct Guess");
        }else{
          setStep(step+1);
        }
        setGuessedLetters([...guessedLetters, letter]);
      }

        return(
    <>
     {/* A)   <p>This is the word need to guess by Player2 : {guessWord} </p> */}
     {/* B) <p>This is the word need to guess by Player2 : {guessWord}</p> */}
     {/* C) <p>This is the word need to guess by Player2 : {text}</p> */}
     <h1>Play Game</h1>
      {wordList.map((word) => (
        <div key={word.id}>
          <p>{word.wordValue}</p>
        </div>
      ))}
     {word &&
     <>
       <MaskedText text={word} guessedLetters={guessedLetters} />

      <div>
        <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
      </div>
     
      <div>
        <Hangman step={step}/>
      </div>
      </>
 }
    <Link to="/start">StartGameLink </Link>
      


    </>
  )
}


export default PlayGame;
