//Action


export const MOVE_PULLREREQUEST_PAGE = 'MOVE_PULLREREQUEST_PAGE'
export const movePullRequest = () => {
  return{
      type: 'MOVE_PULLREREQUEST_PAGE',
      Payload:{
        isIssuePage:false,
        isPullrequestPage:true
      }
  }
}

export const MOVE_ISSUE_PAGE = 'MOVE_ISSUE_PAGE'
export const moveIssue = () => {
  return{
      type: 'MOVE_ISSUE_PAGE',
      Payload:{
        isIssuePage:true,
        isPullrequestPage:false
      }
  }
}
