// originalWord -: The word whic is given as input and is expected to be guessed by the player2
// guessesLetters -: The letters guessed by the player2

//Ex : originalWord : "Humble"
//     guessesLetters : ['H','m','e']
//     return "H_m__e"

export function getMaskedString(originalWord, guessedLetters) {
  guessedLetters = guessedLetters.map((letter) => letter.toUpperCase());

  originalWord = originalWord.split("").map((letter) => letter.toUpperCase());

  const result = originalWord.map((letter) => {
    const found = guessedLetters.includes(letter);
    if (found) {
      guessedLetters = guessedLetters.filter((l) => l !== letter);
    }
    return found ? letter : "_";
  });
  // [G,U,E,S,S] [G,E,S]

  return result.join("").split("");
}
