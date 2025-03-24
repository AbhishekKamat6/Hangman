import { useLocation, useParams, useSearchParams } from "react-router-dom";

function PlayGame() {

// A)  const location = useLocation(); // The useLocation hook is used to access the location object of the current route. The location object contains information about the current URL and the state object.
// A)  const {guessWord} = location.state; // The guessWord value is extracted from the state object of the location object.

// B)    const [searchparams] = useSearchParams(); 
// B)   const guessWord = searchparams.get("text"); 
          const {text}  =  useParams();

          console.log(text,"is the text")
        
        return(
    <>
     {/* A) <p>This is the word need to guess by Player2 : {guessWord} </p> */}
     {/* B) <p>This is the word need to guess by Player2 : {guessWord}</p> */}
      <p>This is the word need to guess by Player2 : {text}</p>
     <h1>Play Game</h1>
    </>
  )
}


export default PlayGame;
