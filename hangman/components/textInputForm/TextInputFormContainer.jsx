import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){
    
    const [inputType,setInputType] = useState('password'); 
    // The useState hook in React returns an array which we destructure. The first element of the array is a state variable and the second element is a function that updates the state.
    
    const [text,setText] = useState('Show');
    
    const [value,setValue] = useState('');

      function handleFormSubmit(event){
        event.preventDefault(); // Stops form from submitting
      }
  
      function handleTextInput(event){
        console.log(event.target.value)
      }
  
      function handleShowHideClick(){
        if(inputType == "password"){
           setInputType("text");
           setText("Hide")
        }
        else{
           setInputType("password");
           setText("Show")
        }
        console.log(inputType,"is the type")
      }


      return (
        <>
        <TextInputForm handleFormSubmit={handleFormSubmit} handleTextInput={handleTextInput} handleShowHideClick={handleShowHideClick} text={text} inputType={inputType}/>
        </>
      )
}


export default TextInputFormContainer;