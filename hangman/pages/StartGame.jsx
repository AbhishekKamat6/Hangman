function StartGame(){

    // return (
    //   <div></div>
    //   <div></div>
    // )  

    // NOT POSSIBLE the way we are returning the JSX in above logic
    // From JSX we need to return single parent
    // And also we cannot wrap inside DIV or any other element because it means we are creating extran node in dom element and to avoid css clashes
    // So we use fragments ( <>  </> )


    return(
        <>
         <h1>Start Game</h1>

         
        </>
    )

}

export default StartGame;