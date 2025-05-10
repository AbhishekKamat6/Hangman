const alphabets = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

function LetterButtons({ text , guessedLetters , onLetterClick }) {

    const originalLetters = new Set(text.toUpperCase().split(""));

    const guessesLettersSet = new Set(guessedLetters);

    const buttonStyle = function(letter){
        if(guessesLettersSet.has(letter)){
            return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`
        }else{
            return 'bg-blue-300'
        }
    }

    const buttons = alphabets.map((letter) => {
        return(
         <>
         <button 
           key={`buttons-${letter}`}
           onClick={()=>onLetterClick(letter)}
           disabled={guessesLettersSet.has(letter)}
           className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
           >
            {letter}
         </button>
         </>
        )
   })

    return (
        <>
        {buttons}
        </>
    )
}

export default LetterButtons;