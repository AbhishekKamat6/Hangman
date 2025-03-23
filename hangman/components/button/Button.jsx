import { getButtonStyling } from "./GetButtonStyling";

function Button({ text, onClickHandler , styleType = "primary" , type = "button" }) {
  return (
    <>
      <button 
             onClick = {onClickHandler} 
             className = {`px-4 py-2 ${getButtonStyling(styleType)}`}
             type = {type}
      >
        {text}
      </button>
      {/*This is called as JSX curlies where we can have a valid opertions and also this is how we destructure the props*/}
    </>
  );
}

export default Button;
