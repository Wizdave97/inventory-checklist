import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState={
  inventory:null,
  loading:false,
  error:null,
  selectedItem:null,
  addInventory:false,
  addInventorySuccess:false,
  addInventoryFail:false,
  deleteInventoryFail:false

}
const increaseQuantity = (state,id)=>{
  let newState=updateObject(state,{})
  let {inventory}= newState
  for(let i=0;i<inventory.length;i++){
    if(inventory[i].id==id){
      let quantity=inventory[i].quantity
      let objToIncrease=updateObject(inventory[i],{quantity:quantity+1})
      inventory[i]=objToIncrease
      return updateObject(state,newState)
    }
  }
}

const decreaseQuantity = (state,id)=>{
  let newState=updateObject(state,{})
  let {inventory}= newState
  for(let i=0;i<inventory.length;i++){
    if(inventory[i].id==id){
      let quantity=inventory[i].quantity
      let objToIncrease=updateObject(inventory[i],{quantity:quantity-1})
      inventory[i]=objToIncrease
      return updateObject(state,newState)
    }
  }
}

const deleteInventory =(state,id)=>{
  let newState={...state,inventory:[...state.inventory]};
  let { inventory } = newState;
  inventory.filter(([inventoryId,inventory])=>{
    return id!==inventoryId
  })
  return updateObject(state,newState)
}
const reducer= (state=initialState,action)=>{

  switch (action.type){
    case actionTypes.FETCH_INVENTORY: return updateObject(state,{loading:true})
    case actionTypes.FETCH_INVENTORY_SUCCESS: return updateObject(state,{inventory:action.value,loading:false,error:false})
    case actionTypes.FETCH_INVENTORY_FAIL: return updateObject(state,{loading:false,error:true})
    case actionTypes.ADD_INVENTORY :return updateObject(state,{addInventory:true})
    case actionTypes.ADD_INVENTORY_SUCCESS :return updateObject(state,{addInventory:false,addInventorySuccess:true,addInventoryFail:false})
    case actionTypes.ADD_INVENTORY_FAIL: return updateObject(state,{addInventory:false,addInventoryFail:true})
    case actionTypes.INCREASE_QUANTITY: return increaseQuantity(state, action.value)
    case actionTypes.DECREASE_QUANTITY: return decreaseQuantity(state,action.value)
    case actionTypes.DELETE_INVENTORY: return deleteInventory(state,action.value)
    case actionTypes.DELETE_INVENTORY_FAIL: return updateObject(state,{deleteInventoryFail:true})
    default: return state
  }

}

export default reducer;
