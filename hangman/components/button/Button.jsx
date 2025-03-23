import "./Button.css"

function Button({ text, onClickHandler }) {
  return (
    <>
      <button 
             onClick = {onClickHandler} 
             className = "text"
      >
        {text}
      </button>
      {/*This is called as JSX curlies where we can have a valid opertions and also this is how we destructure the props*/}
    </>
  );
}

export default Button;
