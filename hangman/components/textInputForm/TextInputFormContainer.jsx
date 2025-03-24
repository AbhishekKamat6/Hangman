import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){
    
    const [inputType,setInputType] = useState('password'); 
    // The useState hook in React returns an array which we destructure. The first element of the array is a state variable and the second element is a function that updates the state.
    
    const [text,setText] = useState('Show');
    
    const [value,setValue] = useState('');

    const navigate = useNavigate();  // The useNavigate hook is used to navigate to a different route in the application. It returns a navigate function which can be called to navigate to a different route.

      function handleFormSubmit(event){
        event.preventDefault(); // Stops form from submitting
          setTimeout(() => {
            if(value){
              navigate("/play",{state:{guessWord : value}}); // The navigate function is called to navigate to the /play route with the guessWord value
            }
          }, 5000);
      }
  
      function handleTextInput(event){
        setValue(event.target.value)
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