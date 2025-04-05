import {create} from 'zustand';

// Create function creates a store for us

export const wordStore = create((set) => ({
    wordList: [], 
    word : '',
    setWordList  : (list) => set((state)=>{
        return{
            ...state,
            wordList : list
        }
    }),
    setWord : (newWord)=> set((state)=>{
        return {
            ...state,
            word : newWord
        }
    })
}));


