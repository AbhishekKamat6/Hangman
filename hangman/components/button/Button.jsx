function Button({ text, onClickHandler }) {
  return (
    <>
      <button 
             onClick={onClickHandler} 
             style={{ 'backgroundColor': "blue" , 'color':"white"}} 
             /* 👉 Outer {} → Marks a JavaScript expression in JSX.
                👉 Inner {} → Represents the actual object with CSS properties. */
      >
        {text}
      </button>
      {/*This is called as JSX curlies where we can have a valid opertions and also this is how we destructure the props*/}
    </>
  );
}

export default Button;
