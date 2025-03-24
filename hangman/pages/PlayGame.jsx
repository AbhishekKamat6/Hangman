import { useLocation } from "react-router-dom";

function PlayGame() {

  const location = useLocation(); // The useLocation hook is used to access the location object of the current route. The location object contains information about the current URL and the state object.
 console.log(location,'location')
  const {guessWord} = location.state; // The guessWord value is extracted from the state object of the location object.
  return(
    <>
     <p>This is the word need to guess by Player2 : {guessWord}</p>
     <h1>Play Game</h1>
    </>
  )
}


export default PlayGame;
