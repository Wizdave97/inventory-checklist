import * as actionTypes from './actionTypes';

export const authStart =()=>{
  return {
    type:actionTypes.AUTH_START
  }
}
export const authLogout =()=>{
  localStorage.inventoryChecklist=''
  return{
    type:actionTypes.AUTH_LOGOUT
  }
}
export const authCheckTimeOut=(expiresIn)=>{
  return dispatch=>{
    setTimeout(()=>{
      dispatch(authLogout())
    },expiresIn*1000)
  }
}
export const authSuccess=(authData) =>{
  localStorage.inventoryChecklist=JSON.stringify({idToken:authData.idToken,localId:authData.localId,expiresIn:new Date(new Date().getTime() + (authData.expiresIn * 1000))})
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
        dispatch(authCheckTimeOut(response.expiresIn))
      }
    }).catch(response=> dispatch(authFail(response)))
  }
}

export const autoSignUp =() =>{
  return dispatch=>{
    if(localStorage.inventoryChecklist){
      let inventoryChecklist=JSON.parse(localStorage.inventoryChecklist);
      let currentTime= new Date().getTime();
      let expirationTime=new Date(inventoryChecklist.expiresIn).getTime()
      let validity=expirationTime-currentTime
      if(validity>0) {
        dispatch(authSuccess(inventoryChecklist))
        dispatch(authCheckTimeOut(validity/1000))
      }
      else{
        dispatch(authLogout())
      }
    }
    else{
      dispatch(authLogout())
    }
  }

}
