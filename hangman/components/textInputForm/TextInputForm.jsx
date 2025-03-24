import TextInput from "../textinput/TextInput";
import Button from "../button/Button"
import { useState } from "react";

function TextInputForm(){


    //  let inputType = "text";
    // if you use let to store a value , REACT won't know when to update the UI 
    // The UI won’t update because React doesn’t track changes to let variables.
    // In functional components, each render is like a fresh function call.
    // If you use let, it gets reset every time the component re-renders and because of which everytime the function is called and inputType is set as text

    const [inputType,setInputType] = useState('password'); 
    // The useState hook in React returns an array which we destructure. The first element of the array is a state variable and the second element is a function that updates the state.

    const [text,setText] = useState('Show');

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
         <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                  type={inputType}
                  label = "Enter a word"
                  placeholder= "Enter a word or phrase here ..."
                  onChangeHandler={ handleTextInput }
                />
            </div>

            <div>
                <Button 
                  styleType="warning"
                  text  = {text}
                  onClickHandler={handleShowHideClick} // passing the callback function (A callback function is a function that is passed as an argument) to the child and is excuted 
                                                       // when the button is clicked
                />
            </div>

            <div>
                <Button
                type="submit"
                styleType="primary"
                 text = "submit"
                />
            </div>
         </form>
        </>
    )
}


export default TextInputForm;