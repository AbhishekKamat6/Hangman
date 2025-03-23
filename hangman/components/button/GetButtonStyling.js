export function getButtonStyling(styleType){
    if(styleType === "primary"){
      return "bg-blue-500 test-white"
    }else if(styleType === "secondary"){
      return "bg-grey-500 test-white"
    }else if(styleType === "error"){
      return "bg-red-500 test-white"
    }
  }