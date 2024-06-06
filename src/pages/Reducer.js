import * as Actions from "./Actions";


export const initialState = {
        isIssuePage:true,
        isPullrequestPage:false
}

//Reducer
function  pageTransition(state = initialState,action){

  switch(action.type ){
    case Actions.MOVE_PULLREREQUEST_PAGE:
      return {
        ...state,
        ...action.payload

      }

    case Actions.MOVE_ISSUE_PAGE:
      return {
        ...state,
        ...action.payload

      }
    default: return state
  }
}

export default pageTransition;