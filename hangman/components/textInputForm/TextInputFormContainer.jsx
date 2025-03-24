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
 
            if(value){
      
        //  A)  navigate("/play",{state:{guessWord : value}}); // The navigate function is called to navigate to the /play route with the guessWord value
        
        //  B)  navigate(`/play?text=${value}`); // QUERY PARAMS

        //  C)   navigate (`/play/${value}`);  // PATH PARAMS
        // IMP -: When you set a path param then you need to define the path in app.jsx like this ( <Route path = '/play/:text' element = {<PlayGame/>}/>)
        
        // There are two params that can be passed to the navigate function
     
        // 1) Query Params : are extra pieces of information added to the end of a URL after a ? and are repersented in the form of key value pair.They usually provide additional details 
        // example : "blog?date=2021-09-01&author=John"
        

        // 2)  Path Params : They are like placeholders in your URL that represent specific pieces of data
        // example : "blog/2021-09-01/John"  

                     }
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