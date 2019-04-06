import * as actionTypes from './actionTypes';
export const addInventorySync = (type) =>{
  return {
    type:type
  }
}

export const addInventory = (data)=>{
  return dispatch =>{
    dispatch(addInventorySync(actionTypes.ADD_INVENTORY))
    let url=`https://soup-kitchen-8a966.firebaseio.com/inventory.json`
    fetch(url,{method:'POST',body:JSON.stringify(data)}).then(response=>{
      return response.json()
    }).then(response=>{
      console.log(response)
      dispatch(addInventorySync(actionTypes.ADD_INVENTORY_SUCCESS))
    }).catch(err=>{
      dispatch(addInventorySync(actionTypes.ADD_INVENTORY_FAIL))
    })
  }
}

export const increaseQuantity = (type,id) =>{
  return {
    type:type,
    value:id
  }
}
export const decreaseQuantity = (type,id) =>{
  return {
    type:type,
    value:id
  }
}
