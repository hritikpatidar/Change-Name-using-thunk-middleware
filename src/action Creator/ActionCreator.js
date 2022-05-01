import { Change_Name, Change_surName } from "../constant/Constant"

export let ChangeNameActionCreator =()=>{ 
    return {
        type:Change_Name,
    }
}
export let ChangeSurNameActionCreator =()=>{
    return {
        type:Change_surName,
    }
}