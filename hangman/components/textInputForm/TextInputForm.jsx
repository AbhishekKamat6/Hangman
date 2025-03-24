import TextInput from "../textinput/TextInput";
import Button from "../button/Button"

function TextInputForm({handleFormSubmit,handleTextInput,handleShowHideClick,text,inputType}){


    //  let inputType = "text";
    // if you use let to store a value , REACT won't know when to update the UI 
    // The UI won’t update because React doesn’t track changes to let variables.
    // In functional components, each render is like a fresh function call.
    // If you use let, it gets reset every time the component re-renders and because of which everytime the function is called and inputType is set as text

    // The useState hook in React returns an array which we destructure. The first element of the array is a state variable and the second element is a function that updates the state.




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


// In this code we are violating the single responsibility principle.
// It says one function should only have one responsibility.
// If you see the above logic textInputForm component is doing multiple things

// 1) First responsibility is to show how the UI should look like
// 2) Second responsibility is to handle the form submission
// 3) Third responsibility is to handle the text input

// Ideally this should not be the case because reusability of the code is lost and let's say you want to use same to same UI somewhere else and there you don't want to handle the form submission
// then you can't use this component because it is tightly coupled with the form submission logic

// So here comes a design principle is known as presentor container pattern

// So what it says is visualize the component as two parts one is presentor and other is container(logical layer)
// Peresentation have only one work where it says how the UI looks like and container have the logic of the component
// And now IMPORTANT thing is container layer will call the presentor layer and pass the props to it and presentor layer will just show the UI

// So the use of it is if you want to use the same UI somewhere else you can use the presentor layer and pass the props to it and you can use the same UI
