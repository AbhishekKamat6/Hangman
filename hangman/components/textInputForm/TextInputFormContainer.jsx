import { use, useEffect, useState } from "react";
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
      
           navigate("/play",{state:{guessWord : value}}); // The navigate function is called to navigate to the /play route with the guessWord value
        
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

      // // useEffect is a function where it takew two params , where one is callback function and the other is an array 
 
      // useEffect(() => {
      //   // so it will be executed two time , First time when the component is attached to dom and second time when the component is updated
      //   console.log("Component first time mounted");
      // },[]) 
      // // If it is empty array then it will be executed only once when the component is mounted 

      // useEffect(() => {
      //   console.log("Component first load and update");
      // }) // Here it will be executed every time when the component is mounted and updated because we are not passing any array

      // useEffect(() => {
      //   console.log("component first load and update value change")
      // },[value]) // Here it will be executed only when the value is changed because we are passing value in the array

      // useEffect(() => {
      //   console.log("component first load and inputType value change")
      // },[inputType]) // Here it will be executed only when the inputType is changed because we are passing inputType in the array


      return (
        <>
        <TextInputForm handleFormSubmit={handleFormSubmit} handleTextInput={handleTextInput} handleShowHideClick={handleShowHideClick} text={text} inputType={inputType}/>

        { inputType == "password" ? <Temp/> : null }
        </>
      )
}

function Temp(){
  useEffect(() => {
    console.log("Component first time mounted");

    return () => {
      console.log("Component unmounted");
    }

    // The function you return in useEffect is called a cleanup function. React calls this cleanup function in two cases:

  // 1)  When the component unmounts → It helps clean up side effects (e.g., remove event listeners, stop API calls, clear timers).
  // 2)  Before running the effect again (if dependencies change) → This prevents memory leaks and avoids unintended behavior.

  },[])

  return (
    <>
    <div>
      <h1>temp</h1>
    </div>
    </>
  )
}


export default TextInputFormContainer;