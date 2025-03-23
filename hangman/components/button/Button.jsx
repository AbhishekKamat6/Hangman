function Button(props) {
    
    console.log(props.text);

  return (
    <>
      <button>{props.text}</button> /*This is called as JSX curlies where we can have a valid opertions*/
    </>
  );
}

export default Button;
