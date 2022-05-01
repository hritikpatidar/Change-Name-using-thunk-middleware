import { ChangeNameActionCreator } from "../action Creator/ActionCreator";


export const MyAsyncAction = () =>{ 
    console.log("okok");  // async function are return async function
    return (dispatch)=>{
      setTimeout(()=>{
        dispatch(ChangeNameActionCreator());
      },2000)
      
    }
  }