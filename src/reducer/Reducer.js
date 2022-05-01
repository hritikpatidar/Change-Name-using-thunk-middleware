import { Change_Name, Change_surName } from "../constant/Constant";

//lets create rootReducer Function
let rootReducer =(oldState,action)=>{
    let newState = oldState; 
    switch(action.type){
      case Change_Name:
        return{
          ...newState,
          name :"Anurag Sharma"
        }
      case Change_surName:
        return{
          ...newState,
          name:"vijay Sharma"
        }
        default:
          return{
            ...newState
          }
    }
  
  }
export default rootReducer;