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
    if(inventory[i][0]===id){
      let quantity=Number(inventory[i][1].quantity)
      inventory[i][1].quantity=quantity+1
      return updateObject(state,newState)
    }
  }
}

const decreaseQuantity = (state,id)=>{
  let newState=updateObject(state,{})
  let {inventory}= newState
  for(let i=0;i<inventory.length;i++){
    if(inventory[i][0]===id){
      let quantity=Number(inventory[i][1].quantity)
      if(quantity<1) return updateObject(state,newState)
      inventory[i][1].quantity=quantity-1
      return updateObject(state,newState)
    }
  }
}

const deleteInventory =(state,id)=>{
  let newState={...state,inventory:[...state.inventory]};
  let { inventory } = newState;
  let newInventory=[];
  for (let [inventoryId,obj] of inventory){
    if(id!==inventoryId){
      newInventory.push([inventoryId,obj])
    }
  }
  return updateObject(state,{...newState,inventory:newInventory})
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
    case actionTypes.ADD_INVENTORY_COMPLETE: return updateObject(state,{addInventorySuccess:false})
    default: return state
  }

}

export default reducer;
