import * as actionTypes from './actionTypes';

export const authStart =()=>{
  return {
    type:actionTypes.AUTH_START
  }
}

export const authSuccess=(authData) =>{
  localStorage.inventoryChecklist=JSON.stringify({idToken:authData.idToken,expiresIn:new Date(new Date().getTime() + (authData.expiresIn * 1000))})
  return {
    type:actionTypes.AUTH_SUCCESS,
    value:authData
  }
}

export const authFail =(authData) =>{
  return {
    type:actionTypes.AUTH_FAIL,
    value:authData
  }
}

export const auth =(authData,isSignUp)=>{
  return dispatch=>{
    dispatch(authStart())
    let url=`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=
    AIzaSyC2lWC3RgazQDLGKPiscZObn5nwnJzs9F0`
    if (isSignUp) url=`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=
    AIzaSyC2lWC3RgazQDLGKPiscZObn5nwnJzs9F0`
    fetch(url,{
      method:'POST',
      body:JSON.stringify(authData)
    }).then(response=>response.json()).then(response=>{
      if (response.error) dispatch(authFail(response))
      else {
        dispatch(authSuccess(response))
      }
    }).catch(response=> dispatch(authFail(response)))
  }
}
