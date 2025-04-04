
* Single responsiblity principle -: ![alt text](image-1.png) 

* Component has a different different phases when it comes on UI 
FirstPhase -: Mounting ( Component has been inserted inside DOM )
SecondPhase -: Render or Updating  ( Our component will get updated and based on that component UI will get changed )
ThirdPhase -: UnMounting ( Removing the component from DOM )


I want to track these events now , So react will give us a hook

The hook is called as useEffect() 
Primary use case -: It will help you to control instructins to be executed during different lifecycle events
Secondary use case -: In useEffect we write a code to get the data

npm init -y -: Initializes a new Node.js project by creating a package.json file
