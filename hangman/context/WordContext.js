import { createContext } from "react";



export const WordContext = createContext(null) // createContext is a function that creates a context object.

// So this context object will help for storing the word that is being guessed in the game.
// So now we have to make this context object available to the whole application.